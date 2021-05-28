import React from 'react';
import Topo from './Componentes/Topo/Topo';
import Menu from './Componentes/Menu/Menu';
import Noticias from './Componentes/Noticias/Noticias';

export default function Principal(props) {
  const categorias = [
    { url: 'breaking-news', nome: 'Geral' },
    { url: 'world', nome: 'Mundo' },
    { url: 'nation', nome: 'Nacional' },
    { url: 'business', nome: 'Negócios' },
    { url: 'technology', nome: 'Tecnologia' },
    { url: 'entertainment', nome: 'Entretenimento' },
    { url: 'sports', nome: 'Esportes' },
    { url: 'science', nome: 'Ciência' },
    { url: 'health', nome: 'Saúde' },
  ];

  let categoriaAtiva = 'general';
  if (typeof props.match.params.categoria !== 'undefined') {
    categoriaAtiva = props.match.params.categoria;
  }

  return (
    <div className="container">
      <Topo titulo={'Últimas Notícias'} logo={'/logo.png'} />
      <Menu categorias={categorias} categoriaAtiva={categoriaAtiva} />
      <Noticias categoriaAtiva={categoriaAtiva} />
    </div>
  );
}
