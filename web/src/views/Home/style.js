import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
`

export const FilterArea = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 30px;

    button{
        background: none;
        border: none;
        outline: none;
    }
    
`
export const ContentArea = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    margin: 0 30px;
`

export const Title = styled.div`
    width: 100%;
    display: flex;
    border-bottom: 1px solid #20295f; 
    justify-content: center;
    margin-bottom: 30px;
    h3{
        color: #20295f;
        position: relative;
        top: 30px;
        background: #fff;
        padding: 0 10px;
    }
`