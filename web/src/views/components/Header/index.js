import React from 'react';
import * as S from './style';

import logo from '../../assets/logo.png';
import bell from '../../assets/icon-bell.png';

function Header(){
    return (
            <S.Container>
                <S.LeftSide>
                    <img src={logo} alt="Logo"></img>
                </S.LeftSide>
                <S.RightSide>
                    <a href="#">INÍCIO</a>
                    <span className="divider"></span>
                    <a href="#">ADICIONAR TAREFA</a>

                    <span className="divider"></span>
                    <a href="#">SINCRONIZAR CELULAR</a>

                    <span className="divider"></span>
                    <a href="#" id="icon-notifications">
                        <img src={bell} alt="Notifições"></img>
                        <span>5</span>
                    </a>
                </S.RightSide>
            </S.Container>
    );
}

export default Header;