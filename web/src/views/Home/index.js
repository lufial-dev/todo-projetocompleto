import React, {useState} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterCard from '../components/FilterCard';

import * as S from './style';


function Home() {
  
  const [filterActived, setFilterActived] = useState('today');

  return (
    <S.Container>
      <Header />
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
      <Footer />
    </S.Container>
      
  );
}

export default Home;