import React, { Component } from 'react';

class Client extends Component {
  render() {
    return (
      <li key = { this.props.cliente.id }>{ this.props.cliente.nome }</li>
    )
  }
}

export default Client;
