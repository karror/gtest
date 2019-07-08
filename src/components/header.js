import React, { Component } from 'react';
import Particles from 'react-particles-js';
import '../../static/css/foundation.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { headHeight: 0, header: {}, pass: '' }
    this.pass = '12345'
  }

  onChangeInput(pass) {
    console.log('pass', pass)
    this.setState({ pass })
  }

  form() {
    return (
        <label  style={{ width: '50%', alignSelf: 'center' }}>
          Wpisz kod, żeby zobaczyć dane osobowe:
          <input className={'input-transition'} type="text" value={this.state.pass} onChange={event => this.onChangeInput(event.target.value)} placeholder={'hasełko'} />
        </label>
    );
  }

  persData() {
    return (
      <div style={{ alignSelf: 'center' }}>
        <h3>Dane do wyświetlenia</h3>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className={'grid-x grid-padding-x align-justify align-middle'} style={{ backgroundColor: '#aaa', height: 300}}>
          <Particles height={300} style={{ position: 'absolute', top: 0, zIndex: 0}} />
          <img src={require('../../static/img/nav.png')} className={'large-2 show-for-medium'} style={{ zIndex: 1 }} />
          <div className={'grid-y large-8 align-center'} style={{ zIndex: 1 }}>
            <h1 style={{ textAlign: 'center' }}>Titulki</h1>
            {this.state.pass === this.pass ? this.persData() : this.form()}
          </div>
          <img src={require('../../static/img/trash.png')} className={'large-2 show-for-medium'} style={{ zIndex: 1 }} />
        </div>
      </div>
    );
  }
}

export default Header;
