import styled from 'styled-components';

export const Wrapper = styled('div')`
& {
    max-width: 750px;
    margin: 0 auto;
}
`

export const Header = styled('div')`
& {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 30px;
    box-sizing: border-box;
    align-items: center;
}
`

export const TitleHeader = styled('h1')`
& {
    font-size: 22px;
    font-weight: normal;
}
`

export const DaysWrapper = styled('div')`
& {
    width: 100%;
    /* height: 50px; */
    background-color: #eee;
    padding-left: 50px;
    display: flex;
    /* justify-content: center; */
}
`

export const DayWrapper = styled('div')`
& {
    width: 50px;
    height: 100px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    
}
`

export const DayNumber = styled('div')`
& {
    padding-top: 10px;
}
`

export const MonthWrapper = styled('div')`
& {
    /* padding-top: 10px; */
    width: 56%;
    display: flex;
    justify-content: space-around;
    gap: 50px;
    background-color: #eee;
}
`

export const ArrowWrapper1 = styled('div')`
&:first-child {
    transform: rotate(270deg);
}
`

export const ArrowWrapper2 = styled('div')`
& {
    transform: rotate(90deg);
}
`

// CalendarMainWrapper
export const CalendarMainWrapper = styled('div')`
& {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
}
`
export const TimeWrapper = styled('div')`
& {
    width: 60%;
    height: 50px;
    /* border: 1px solid black; */
    /* background-color: red; */
    display: flex;
    /* align-items: flex-end; */
    justify-content: flex-end;
    color: #ccc;
 
}
`

export const DayItem = styled('div')<{state?:boolean}>`
& {
    cursor: pointer;
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    background-color: ${_ => _.state? 'red' : '#eee'};
}
&:hover {
    background-color: tomato;
}
`