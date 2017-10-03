import React, { Component } from 'react';

// Components
import Cliente from './Client';

class ClientList extends Component {
  constructor(props){
    super(props);

    this.state = {
      clientes : [
        { id: 1, 'nome' : "Nuno"},
        { id: 2, 'nome' : "Sandra"},
        { id: 2, 'nome' : "Artur"},
      ]
    }
  }


  render() {
    const clts = this.state.clientes;
    return (
      <div>
        Lista de clientes
        <ul>
          { clts.map( cliente => <Cliente cliente={cliente} /> ) }
        </ul>
      </div>
    )
  }
}

export default ClientList;
