import styled from 'styled-components';

export const Wrapper = styled('div')`
& {
    max-width: 740px;
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

export const ButtonTask = styled('button')`
& {
    cursor: pointer;
    border: none;
    background-color: #fff;
    transition: all .2s ;
}
&:hover {
    transform: scale(1.5);
}
`

export const DaysWrapper = styled('div')`
& {
    width: 100%;
    background-color: #F6F6F6;
    display: flex;
    box-sizing: border-box;
    padding-left: 70px;
    text-align: start;
    height: 80px;
}
`

export const DayWrapper = styled('div')`
& {
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
    padding-top: 10px;
    width: 40px;
    height: 30px;
    border-radius: 50%;
    color: ${_ => _.state && '#fff'};
    background-color: ${_ => _.state && 'tomato'};
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
    padding-left: 100px;
    box-sizing: border-box;
    background-color: #F6F6F6;
    align-items: center;
    border-bottom: 1px solid #ECECEC;
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
    padding-top: 20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    height: 600px;
    overflow: scroll;
}
`
export const TimeWrapper = styled('div')`
& {

    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    color: #c7c7c7;
    padding-left: 80px;
    position: relative;
    position: relative;
    right: -5px;
}
&:hover{
    opacity: .7;
}

`

export const TimeItem = styled('div')`
&{
    position: absolute;
    left: 20px;
    top: -10px;
    box-sizing: border-box;
}
`

export const DayItem = styled('div') <{ state?: boolean, extraLink?: boolean }>`
& {
    cursor: pointer;
    padding: 2px;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    border: 2px solid #ECECEC;
    border-left: none;
    border-top: none;
    background-color: ${_ => _.state ? '#EBECFF' : '#fff'};
    background-color: ${_ => _.extraLink && '#B3B7FF'};
    overflow: hidden;
    color: gray;
}
&:hover {
    background-color: #B3B7FF;
}
`

export const Footer = styled('div')`
& {
    background-color: #F6F6F6;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-top: 1px solid #ECECEC;
}
`

export const FooterLink = styled('div')`
& {
    cursor: pointer;
    color: tomato;
    font-size: 20px;
    font-weight: 500;
    padding-left: 40px;
}
&:hover {
    opacity: .7;
}
`
