import React, { Component } from 'react';
import CardNota from '../CardNota/CardNota';
import './style.css';

export class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-de-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li key={index} className="lista-de-notas_item">
              <CardNota titulo={nota.titulo} text={nota.texto} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
