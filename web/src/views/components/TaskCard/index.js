import React from 'react';

import * as S from './style';
import icon_default from '../../assets/icon-default.png';

function TaskCard(){
    return (
        <S.Container>
            <S.CardTop>
                <img src={icon_default} alt="Icone da Atividade" />
                <h3>Titulo da tarefa</h3>
            </S.CardTop>
            <S.CardBottom>
                <strong>20/10/2020</strong>
                <span>10:00</span>
            </S.CardBottom>
        </S.Container>

    );
}

export default TaskCard;