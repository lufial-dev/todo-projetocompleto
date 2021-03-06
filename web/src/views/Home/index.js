import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterCard from '../components/FilterCard';
import TaskCard from '../components/TaskCard';

import * as S from './style';


function Home() {
  
  const [filterActived, setFilterActived] = useState('today');
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState();

  async function loadTasks(){
    await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
    .then(response => {
      setTasks(response.data);
    });
  }

  async function lateVerify(){
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
    .then(response => {
        setLateCount(response.data.length);
    });
  }

  function Notification(){
    setFilterActived('late');
  }

  useEffect(()=>{
    lateVerify();
    loadTasks();
  }, [filterActived]);

  return (
    <S.Container>
      <Header lateCount={lateCount} clickNotification={ Notification }/>
      <S.FilterArea>

        <button type="button" onClick={ () => setFilterActived('all') }>
          <FilterCard title="Todos" actived = { filterActived == 'all' } />
        </button>

        <button type="button" onClick={ () => setFilterActived('today') }>
          <FilterCard title="Dia" actived={ filterActived == 'today' }  />
        </button>
        
        <button type="button" onClick={ () => setFilterActived('week') }>
          <FilterCard title="Semana" actived={ filterActived == 'week' } />
        </button>
        
        <button type="button" onClick={ () => setFilterActived('month') }>
          <FilterCard title="Mês" actived={ filterActived == 'month' } />
        </button>
        
        <button type="button" onClick={ () => setFilterActived('year') }>
          <FilterCard title="Ano" actived={ filterActived == 'year' } />
        </button>

      </S.FilterArea>
      <S.Title>
        <h3> { filterActived == 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS' }</h3>
      </S.Title>
      <S.ContentArea>
        {
          tasks.map( task=> (
            <TaskCard type={task.type} title={task.title} when={task.when} />
          ))
        }
      </S.ContentArea>
      <Footer />
    </S.Container>
      
  );
}

export default Home;