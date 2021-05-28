import React, { Component } from 'react';
import axios from 'axios';

export default class UltimasNoticias extends Component {
  constructor() {
    super();
    this.chaveAcesso = 'e75c4d8babcc1fda571d67ad6fcdfd5a';
    this.state = {
      noticias: [],
    };
    this.style = {
      corNomeOrigemNoticia: '#8DB5E9',
    };
  }

  definirNoticias() {
    if (!navigator.onLine) {
      this.setState({ noticias: [] });
      let noticiasEmCache = localStorage.getItem(
        'noticias_' + this.props.categoriaAtiva,
      );
      if (typeof noticiasEmCache !== 'undefined' && noticiasEmCache !== null) {
        this.setState({ noticias: JSON.parse(noticiasEmCache) });
      }
    } else {
      axios
        .get(
          'https://gnews.io/api/v4/top-headlines?lang=pt&country=br&topic=' +
            this.props.categoriaAtiva +
            '&token=' +
            this.chaveAcesso,
        )
        .then((response) => {
          this.setState({ noticias: response.data.articles });
          localStorage.setItem(
            'noticias_' + this.props.categoriaAtiva,
            JSON.stringify(response.data.articles),
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.categoriaAtiva !== this.props.categoriaAtiva) {
      this.definirNoticias();
    }
  }
  componentDidMount() {
    this.definirNoticias();
  }
  render() {
    if (this.state.noticias.length) {
      return (
        <div className="row mb-2">
          {this.state.noticias.map((noticia, i) => {
            return (
              <div className="col-md-6" key={'noticia_' + i}>
                <div className="card flex-md-row mb-4 shadow-sm h-md-200">
                  <div className="card-body d-flex flex-column align-items-start">
                    <strong
                      className="d-inline-block mb-2"
                      style={{ color: this.style.corNomeOrigemNoticia }}
                    >
                      {noticia.source.name}
                    </strong>
                    <h4 className="mb-0">
                      <a className="text-dark" href={noticia.url} target="_new">
                        {noticia.title}
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      if (!navigator.onLine) {
        return (
          <div class="alert alert-warning" role="alert">
            Não foi possível carregar as notícias dessa categoria :(
          </div>
        );
      } else {
        return <div>Carregando...</div>;
      }
    }
  }
}
