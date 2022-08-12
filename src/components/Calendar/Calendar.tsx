import React, { FC, useState } from "react";
import AddTask from "../../Ico/AddTask";
import Arrow from "../../Ico/Arrow";
import { ArrowWrapper1, ArrowWrapper2, CalendarMainWrapper, DayItem, DayNumber, DaysWrapper, DayWrapper, Header, MonthWrapper, TimeWrapper, TitleHeader, Wrapper } from "./Calendar.styled";

const LocalState: any = [
    {
        day: 25, time:
        {
            11: '11-task',
            18: '18-tasks'
        }

    },
    { day: 26, time: {} },
    { day: 27, time: {} },
    { day: 28, time: {} },
    {
        day: 29, time:
        {
            10: '10-task',
            17: '17-tasks'
        }

    },
    { day: 30, time: {} },
    { day: 31, time: {} },
]

const weekly = ['w', 't', 'w', 't', 'f', 's', 's']

const time = ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18']

const Calendar: FC = ({ }) => {

    const [state, setState] = useState(LocalState);
    const [popup, setPopup] = useState<boolean>(false);

    const changeEvent = (id: number, idItem: number) => {
        const task = 'Mock-data';
        const newTime = state[id].time;
        if (!newTime[idItem + 9]) {
            newTime[idItem + 9] = task;
        } else {
            // console.log('task - on-added')
            newTime[idItem + 9] = null;
        }
        // console.log(newTime, 'newTime')

        const newState = [...state]
        newState[id].time = newTime

        // console.log(newState, 'newState')

        setState((prev: any) => {
            return newState
        })
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
                    // {console.log(state[5].day, id)}
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
                {time.map((timeItem, idItem) => {
                    return (
                        <TimeWrapper key={idItem}>
                            <>
                                {timeItem}
                                {state.map((item: any, id: number) => {
                                    // {console.log(typeof(Number(timeItem)), timeItem)}
                                    let a = item.time
                                    let b = Number(timeItem)
                                    {
                                        if (a[b] != undefined) {
                                            // console.log(a[b])
                                            return (
                                                <DayItem key={id} state={true} onClick={() => { changeEvent(id, idItem) }}>
                                                    {a[b]}
                                                </DayItem>
                                            )
                                        }
                                        // console.log(a[b], b, timeItem)
                                    }
                                    return (
                                        <DayItem key={id} state={false} onClick={() => { changeEvent(id, idItem) }} />
                                    )
                                    // <DayItem state={item.time[10] ? false : true}>

                                    {/* {item.time[18] && 'Y'} */ }
                                    {/* {timeItem} */ }
                                    // </DayItem>
                                })}
                            </>

                        </TimeWrapper>
                    )
                })}
            </CalendarMainWrapper>
        </Wrapper>
    )
}

export default Calendar;
