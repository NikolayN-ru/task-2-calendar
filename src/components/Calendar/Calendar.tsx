import React, { FC, useState } from "react";
import AddTask from "../../Ico/AddTask";
import Arrow from "../../Ico/Arrow";
import {
    ArrowWrapper1,
    ArrowWrapper2,
    CalendarMainWrapper,
    DayItem, DayNumber,
    DaysWrapper,
    DayWrapper,
    Footer,
    FooterLink,
    Header,
    MonthWrapper,
    TimeItem,
    TimeWrapper,
    TitleHeader,
    Wrapper
} from "./Calendar.styled";

const LocalState: any = [
    { day: 25, time: { 11: '11-task', 18: '18-tasks' } },
    { day: 26, time: {} },
    { day: 27, time: {} },
    { day: 28, time: {} },
    { day: 29, time: { 10: '10-task', 17: '17-tasks' } },
    { day: 30, time: {} },
    { day: 31, time: {} },
];

const weekly = ['w', 't', 'w', 't', 'f', 's', 's'];

const time = ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
const initialBuffer = { z: -1, x: -1 };

const Calendar: FC = () => {
    const [state, setState] = useState(LocalState);
    const [deleteItem, setDeleteItem] = useState<Boolean>(false);
    const [buffer, setBuffer] = useState(initialBuffer);

    const changeEvent = (id: number, idItem: number) => {
        let bu = { z: id, x: idItem };
        const newState = [...state];
        let b = false;
        if (!state[id].time[idItem + 9]) {
            const newTime = state[id].time;
            const task = prompt('vvod')
            newTime[idItem + 9] = task;
            newState[id].time = newTime;
            bu = initialBuffer
        } else {
            b = true;
        }
        setDeleteItem(() => {
            if (buffer.z < 0) {
                return b
            } else {
                return !b
            }
        });
        setState((prev: any) => newState);
        if (JSON.stringify(bu) === JSON.stringify(buffer)) {
            bu = initialBuffer
        }
        setBuffer(() => bu);
    }

    const ItemDelete = () => {
        const newTime2 = state[buffer.z].time;
        newTime2[buffer.x + 9] = undefined;
        const newState2 = [...state];
        newState2[buffer.z].time = newTime2;
        setState((prev: any) => newState2);
        setDeleteItem(false);
        setBuffer(initialBuffer)
    }

    return (
        <Wrapper>
            <Header>
                <TitleHeader>
                    Interview Calendar
                </TitleHeader>
                <AddTask />
            </Header>
            <DaysWrapper>
                {weekly.map((item, id) => {
                    return (
                        <DayWrapper key={id}>
                            {item}
                            <DayNumber>
                                {state[id].day}
                            </DayNumber>
                        </DayWrapper>
                    )
                })}
            </DaysWrapper>
            <MonthWrapper>
                <ArrowWrapper1>
                    <Arrow />
                </ArrowWrapper1>
                March 2019
                <ArrowWrapper2>
                    <Arrow />
                </ArrowWrapper2>
            </MonthWrapper>
            <CalendarMainWrapper>
                {buffer && time.map((timeItem, idItem) => {
                    return (
                        <TimeWrapper key={idItem}>
                            <>
                                <TimeItem>
                                    {timeItem}:00
                                </TimeItem>
                                {state.map((item: any, id: number) => {
                                    const extra = { z: id, x: idItem }
                                    {
                                        if (item.time[Number(timeItem)] !== undefined) {
                                            return (
                                                <DayItem key={id} state={true}
                                                    onClick={() => { changeEvent(id, idItem) }}
                                                    extraLink={JSON.stringify(extra) === JSON.stringify(buffer) ? true : false}>
                                                    {item.time[Number(timeItem)]}
                                                </DayItem>
                                            )
                                        }
                                    }
                                    return (
                                        <DayItem key={id} state={false}
                                            onClick={() => { changeEvent(id, idItem) }}
                                            extraLink={JSON.stringify(extra) === JSON.stringify(buffer) ? true : false} />
                                    )
                                })}
                            </>
                        </TimeWrapper>
                    )
                })}
            </CalendarMainWrapper>
            <Footer>
                {
                    deleteItem && <>
                        <FooterLink>Today</FooterLink>
                        <FooterLink onClick={() => ItemDelete()} >Delete</FooterLink>
                    </>
                }
            </Footer>
        </Wrapper>
    )
}

export default Calendar;
