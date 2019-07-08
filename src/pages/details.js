
import React, { Component } from 'react';
import { Link } from "gatsby"
import Header from '../components/header';

class Details extends Component {
  constructor(props) {
    super(props)

    this.state = { number: 0 }
  }


  render() {
    return (
      <div>
        <Header />
        <h1>Szczegoly</h1>
        <div className={'grid-x'}>
          <div className={'grid-y large-6'}>
            <button
              className={'button large-4'}
              onClick={() => this.setState({ number: this.state.number + 1 })}
            >
              <h2>up</h2>
            </button>
            <h2 className={'small-4'} style={{ alignSelf: 'center', textAlign: 'center' }}>{this.state.number}</h2>
            <button
              className={'button large-4'}
              onClick={() => this.setState({ number: this.state.number - 1 })}
            >
              <h2 style={{ borderWidth: 1, borderRadius: 20, padding: 10, paddingHorizontal: 40 }}>down</h2>
            </button>
          </div>
          <div className={'large-6 text-center'} style={{ marginTop: '5em' }}>
            <h3><Link to="/">Back</Link></h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
