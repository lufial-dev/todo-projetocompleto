import styled from 'styled-components';
import iconCalendar from '../assets/icon-calendar.png';
import iconClock from '../assets/icon-clock.png';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const Form = styled.div`
    width: 50%;
    margin-bottom: 70px;

`

export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    .inative{
        opacity: 0.5;
    }

    button{
        border: none;
        background: none;
        outline: none;
    }

    img {
        width: 30px;
        height: 30px;
        margin: 10px;
        cursor: pointer;
        &:hover{
            opacity: 1.0;
        }
    }

`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span{
        color: #707070;
        margin: 5px 0;
    }

    input {
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #EE6B26;
        outline: none;
    }

    input[type='date']::-webkit-calendar-picker-indicator {
        background-image: url(${iconCalendar});
    }  

   
    input[type='time']::-webkit-calendar-picker-indicator {
        background-image: url(${iconClock});
    }  



  

` 

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span{
        color: #707070;
        margin: 5px 0;
    }

    textarea{
        font-size: 16px;
        border: 1px  solid #EE6B26;
    }


`

export const Options = styled.div`
    display: flex;
    justify-content: space-between;

    button{
        font-weight: bold;
        color: #20295f;
        border: none;
        background: none;
        outline:none;
        font-size: 18px;
        cursor: pointer;
    }

    button:hover{
        opacity: 0.7;
    }

    div{
        display: flex;
        align-items: center;
        color: #ee6b26;
        font-size: 18px;
        font-weight: bold;

        input{
            margin-right: 5px;
            height: 20px;
            width: 20px;
        }
        
    }
`

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;

    button{
        width: 100%;
        background: #ee6b26;
        border: none;
        font-size: 20px;
        color: #fff;
        font-weight: bold;
        padding:20px;
        border-radius: 30px;
        cursor: pointer;
        outline: none;
    }

    button:hover{
        opacity: 0.7;
    }

`



