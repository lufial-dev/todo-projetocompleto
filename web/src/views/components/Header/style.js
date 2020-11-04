import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    border-bottom: solid 5px #ee6b26;
    background: #20295f;
   
`;

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 10px;

    img{
        width: 100px;
    }
`;

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: flex-end;

    a{
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        margin: 0 10px;
        
        &:hover{
            color: #ee6b26;
        }
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
        outline:none;
    }

    #icon-notifications{
        img{
            width: 25px;
        }

        span{
            background: #fff;
            color:  #ee6b26;
            padding: 3px 7px;
            border-radius: 50%;
            position: relative;
            left: -10px;
            top: -20px;
        }

        &:hover{
            opacity: 50%;
        }   
    }

    .divider::after{
        content: "|";
        padding: 0 10px;
        color: #fff;
    }

    
`;



