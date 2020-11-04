import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Header from '../components/Header';
import Footer from '../components/Footer';

import * as S from './style';

import typeIcons from '../utils/typeIcons';


function Task() {
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();
  
    async function lateVerify(){
      await api.get(`/task/filter/late/11:11:11:11:11:11`)
      .then(response => {
          setLateCount(response.data.length);
      });
    }
  
    useEffect(()=>{
      lateVerify();
    }, []);
  

  return (
    <S.Container>
      <Header lateCount={lateCount} />
      <S.Form>
          <S.TypeIcons>
            {
                typeIcons.map((icon, index) => (
                  <button type="button" onClick = { () => {setType(index); console.log(index)} }>
                    <img src={icon} alt="Tipo da Tarefa" 
                      className={ type != index && 'inative' }/>
                  </button>
                ))
            }
          </S.TypeIcons>

          <S.Input>
            <span>Título</span>
            <input type="text" placeholder="Título da Tarefa"></input>
          </S.Input>

          <S.TextArea>
            <span>Detalhes</span>
            <textarea rows={5} placeholder="Detalhes da Tarefa"></textarea>
          </S.TextArea>

          <S.Input>
            <span>Data</span>
            <input type="date" placeholder="Data da Tarefa"></input>
           
          </S.Input>

          <S.Input>
            <span>Hora</span>
            <input type="time" placeholder="Hora da Tarefa"></input>
            
          </S.Input>

          <S.Options>
            <div>
              <input id="check" type="checkbox"></input>
              <label for="check">CONCLUÍDO</label>
            </div>
            <button type="buttom">EXCLUIR</button>
          </S.Options>

          <S.Save>
            <button type="button">SALVAR</button>
          </S.Save>

      </S.Form>
      <Footer />
    </S.Container>
      
  );
}

export default Task;