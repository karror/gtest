import React, { Component } from 'react';
import Blur from 'react-blur';
import { Animated } from "react-animated-css";
import Rating from './rating';

class ExpBox extends Component {
  constructor(props) {
    super(props);

    this.state = { view: false, hgh: 0 };
    this.tail = {}
    this.mediaUrl = 'http://127.0.0.1:8000/media/'
  }

  render() {
    return (
      <div
        className="card"
        style={{
          maxWidth: '500px',
          minWidth: '300px',
          borderRadius: 10,
          backgroundImage: `url(${this.props.imgBlur})`,
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}>
        <div className={"card-divider"} style={{ justifyContent: 'center' }}>
          <h5>{this.props.title}</h5>
        </div>
        <div
          className={'card-section grid-x'}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          { !this.props.img ? null : <a href={this.props.url} style={{ width: '30%' }}><img src={this.mediaUrl + this.props.img} alt={this.props.title} style={{ width: '100%' }} /></a>}
        { !this.props.subtitle ? null : <h5 style={{ textAlign: this.props.img ? 'right' : 'center' , width: '68%' }} >{this.props.subtitle}</h5>}
        </div>
        <a
          className={'card-section'}
          style={{ textAlign: 'center', fontSize: 12, width: '100%', padding: 10, paddingTop: 0, color: 'dodgerblue' }}
          onClick={() => {
            this.setState({ hgh: this.state.view ? 0 : this.tail.clientHeight, view: !this.state.view });
          }}
        >
          {this.state.view ? 'Hide' : 'Expand'}
        </a>
        <Animated
          animationIn={"rotateInUpLeft"}
          animationOut={"rotateOutDownRight"}
          isVisible={this.state.view}
          style={{ height: this.state.hgh, transitionDuration: '1s', transitionProperty: 'height' }}
        >
          <div ref={ (divElement) => this.tail = divElement}>
            { !this.props.text ? null : <div className={'card-section'}>
              <p style={{ textAlign: 'justify' }} >{this.props.text}</p>
            </div>}
            { !(this.props.from || this.props.to) ? null : <div className={"card-section"}>
              <p>{(this.props.from && !this.props.to) ? 'od ' : ''}{this.props.from}{(this.props.from && this.props.to) ? ' - ' : !this.props.from ? 'do ' : ''}{this.props.to}</p>
            </div>}
            { (this.props.rates && this.props.rates.length) ? <div className={"card-section grid-x"} style={{ justifyContent: 'space-between' }}>
              {this.props.rates.map(item => <Rating key={this.props.title + item.desc} rate={item.rate/2} description={item.desc} color={item.color} />)}
            </div> : null}
            { !this.props.tags ? null : <div className={"card-section grid-x"} style={{ justifyContent: 'space-between' }}>
              {this.props.tags.map(item => {
                return (
                  <a href={item.url}>
                    <p style={{ fontSize: 12, padding: 2, paddingLeft: 15, paddingRight: 15, margin: 5, color: 'dodgerblue', borderColor: 'dodgerblue', borderStyle: 'solid', borderWidth: 1, borderRadius: 10 }}>
                      {item.name}
                    </p>
                  </a>
                );
              })}
            </div>}
          </div>
        </Animated>
      </div>
    );
  }
}

export default ExpBox;
