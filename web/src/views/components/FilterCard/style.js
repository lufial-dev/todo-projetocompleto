import styled from 'styled-components';

export const Container = styled.div`
    width: 180px;
    height: 50px;
    background: ${ props => props.actived ?  '#ee6b26' : '#20295f'};
    display: flex;

    border-radius: 5px;

    flex-direction: column;
    justify-content: space-around;

    margin-top: 10px;
    padding: 10px;

    cursor: pointer;
    
    &:hover{
        background: #ee6b26;
    }



    img{
        width: 20px;
        height: 23px;
    }

    span{
        color: #fff;
        align-self: flex-end;
    }
`