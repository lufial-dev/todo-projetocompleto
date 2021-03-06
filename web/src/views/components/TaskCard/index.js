import React, {useMemo} from 'react';
import { format } from 'date-fns';
import * as S from './style';

import typeIcons from '../../utils/typeIcons';

function TaskCard({ type, title, when }){

    const date = useMemo(() => format (new Date(when), 'dd/MM/yyyy'));
    const hour = useMemo(() => format (new Date(when), 'HH:mm'));

    return (
        <S.Container>
            <S.CardTop>
                <img src={typeIcons[type]} alt="Icone da Atividade" />
                <h3>{title}</h3>
            </S.CardTop>
            <S.CardBottom>
                <strong>{date}</strong>
                <span>{hour}</span>
            </S.CardBottom>
        </S.Container>

    );
}

export default TaskCard;