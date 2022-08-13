import styled from 'styled-components';

export const Wrapper = styled('div')`
& {
    max-width: 740px;
    margin: 0 auto;
    /* background-color: green; */
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

export const ButtonTask = styled('button')`
& {
    cursor: pointer;
    border: none;
    background-color: #fff;
}
&:hover {
    opacity: .7;
}
`

export const DaysWrapper = styled('div')`
& {
    width: 100%;
    background-color: #eee;
    display: flex;
    box-sizing: border-box;
    padding-left: 50px;
    text-align: start;
    height: 80px;
}
`

export const DayWrapper = styled('div')`
& {
    /* width: 50px; */
    flex-grow: 1;
    height: 100px;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;

}
`

export const DayNumber = styled('div') <{ state?: boolean }>`
& {
    cursor: pointer;
    /* margin-left: 29px; */
    padding-top: 10px;
    /* padding-left: 5px; */
    width: 40px;
    height: 30px;
    border-radius: 50%;
    color: ${_ => _.state && '#fff'};
    background-color: ${_ => _.state && 'tomato'};
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    /* padding-left: 10px; */
    /* box-sizing: border-box; */
    text-align: center;
}



&:hover {
    background-color: tomato;
    color: #fff;
}
&:active {
    opacity: .6;
}
`

export const MonthWrapper = styled('div')`
& {
    width: 100%;
    display: flex;
    padding-left: 80px;
    box-sizing: border-box;
    background-color: #eee;
    align-items: center;
    /* padding-left: 30px; */
}
`

export const TitleMonth = styled('span')`
& {
flex-grow: 1;
}
`

export const ArrowWrapper1 = styled('div')`
&:first-child {
    transform: rotate(270deg) scale(0.7);
}
`

export const ArrowWrapper2 = styled('div')`
& {
    transform: rotate(90deg) scale(0.7);
}
`

export const CalendarMainWrapper = styled('div')`
& {
    /* margin-top: 20px; */
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    height: 400px;
    overflow: scroll;
}
`
export const TimeWrapper = styled('div')`
& {

    width: 60%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    gap: 2px;
    color: #c7c7c7;
    background-color: #fff;
    margin-bottom: 1px;
}
&:hover{
    opacity: .7;
}
`

export const TimeItem = styled('div')`
&{
    position: relative;
    top: -10px;
    margin-right: 5px;
}
`

export const DayItem = styled('div') <{ state?: boolean, extraLink?: boolean }>`
& {
    cursor: pointer;
    padding: 2px;
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    background-color: ${_ => _.state ? '#d7d6ff' : '#eee'};
    border: ${_ => _.extraLink ? '2px solid tomato' : 'none'};
    overflow: hidden;
}
&:hover {
    background-color: #9b99ff;
}
`

export const Footer = styled('div')`
& {
    background-color: #f1f1f1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}
`

export const FooterLink = styled('div')`
& {
    cursor: pointer;
    color: tomato;
    font-size: 20px;
    font-weight: 500;
}
&:hover {
    opacity: .7;
}
`
