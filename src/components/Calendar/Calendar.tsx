import React, { FC, useState } from "react";
import AddTask from "../../Ico/AddTask";
import Arrow from "../../Ico/Arrow";
import {
    ArrowWrapper1,
    ArrowWrapper2,
    ButtonTask,
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

interface ILocalState {
    day: number;
    time: {
        [key: number]: string | undefined | null,
    }
}

const LocalState: ILocalState[] = [
    { day: 25, time: { 11: '11-task', 18: '18-tasks' } },
    { day: 26, time: {} },
    { day: 27, time: {} },
    { day: 28, time: {} },
    { day: 29, time: { 10: '10-mock-data', 17: '17-mock-data' } },
    { day: 30, time: {} },
    { day: 31, time: {} },
];

const weekly: string[] = 'w t w t f s s'.split(' ');

const time: number[] = [];
(function () {
    for (let i = 0; i <= 24; i++) {
        time.push(i)
    }
}())

interface IBuffer {
    x: number;
    y: number;
}

const initialBuffer: IBuffer = { x: -1, y: -1 };

const Calendar: FC = () => {
    const [state, setState] = useState<ILocalState[]>(LocalState);
    const [deleteItem, setDeleteItem] = useState<boolean>(false);
    const [buffer, setBuffer] = useState<IBuffer>(initialBuffer);
    const [canditateTask, setCandidateTask] = useState<IBuffer>(initialBuffer);

    const changeEvent = (id: number, idItem: number) => {
        let localBuffer = { x: id, y: idItem };
        const newState = [...state];
        let b = false;
        if (!state[id].time[idItem]) {
            setCandidateTask(localBuffer);
        } else {
            b = true;
        }
        setDeleteItem(() => {
            if (buffer.x < 0) {
                return b
            } else {
                return !b
            }
        });
        setState(newState);
        if (localBuffer.x === buffer.x && localBuffer.y === buffer.y) {
            localBuffer = initialBuffer;
        }
        setBuffer(() => localBuffer);
        setCandidateTask(initialBuffer);
    }

    const ItemDelete = () => {
        const newTime2 = state[buffer.x].time;
        newTime2[buffer.y] = undefined;
        const newState2 = [...state];
        newState2[buffer.x].time = newTime2;
        setState(newState2);
        setDeleteItem(false);
        setCandidateTask(initialBuffer);
        setBuffer(initialBuffer);
    }

    const AddTaskItem = () => {
        if (canditateTask.x > -1) {
            const newState = [...state];
            const newTime = state[canditateTask.x].time;
            const task = prompt('Enter your task');
            newTime[canditateTask.y] = task;
            newState[canditateTask.x].time = newTime;
            setState(newState);
            setBuffer(initialBuffer)
            setCandidateTask(initialBuffer);
        } else {
            console.log('выберите клетку')
        }
    }

    return (
        <Wrapper>
            <Header>
                <TitleHeader>
                    Interview Calendar
                </TitleHeader>
                <ButtonTask onClick={() => AddTaskItem()}>

                    <AddTask />
                </ButtonTask>
            </Header>
            <DaysWrapper>
                {weekly.map((item, id) => {
                    return (
                        <DayWrapper key={id}>
                            {item}
                            <DayNumber state={id === 4 && true}>
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
                                {state.map((item: ILocalState, id: number) => {
                                    const extra = { x: id, y: idItem }
                                    {
                                        if (item.time[timeItem] !== undefined) {
                                            return (
                                                <DayItem key={id} state={true}
                                                    onClick={() => { changeEvent(id, idItem) }}
                                                    extraLink={extra.x === buffer.x && extra.y === buffer.y}>
                                                    {item.time[timeItem]}
                                                </DayItem>
                                            )
                                        }
                                    }
                                    return (
                                        <DayItem key={id} state={false}
                                            onClick={() => { changeEvent(id, idItem) }}
                                            extraLink={extra.x === buffer.x && extra.y === buffer.y} />
                                    )
                                })}
                            </>
                        </TimeWrapper>
                    )
                })}
            </CalendarMainWrapper>
            <Footer>
                <FooterLink>Today</FooterLink>
                {deleteItem &&
                    <FooterLink onClick={() => ItemDelete()} >Delete</FooterLink>
                }
            </Footer>
        </Wrapper>
    )
}

export default Calendar;
