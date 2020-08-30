import styled from 'styled-components';


export const Container = styled.div`
    width: 250px;
    height: 180px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border-radius: 10px;

    margin: 20px;

    cursor: pointer;
    transition: all 0.5s ease;
    
    &:hover{
        opacity: 0.5;

    }
    
`

export const CardTop = styled.div`
    width: 100%;
    display: flex;

    justify-content: center;
    flex-direction: column;
    align-items: center;

    img{
        width: 70px;
    }
`

export const CardBottom = styled.div`
    width: 100%;
    display: flex;

    justify-content: space-around;

    strong{
        color: #ee6b26;
        font-weight: bold;
    }

    span{
        color: #707070;
    }
`