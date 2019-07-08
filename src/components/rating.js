import React, { Component } from 'react';
import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from 'react-icons/io';
import ReactTooltip from 'react-tooltip'

class Rating extends Component {

  star(nmb) {
    return nmb <= this.props.rate ? <IoMdStar size={25} color={this.props.color} /> : ((nmb - 0.65) <= this.props.rate) ? <IoMdStarHalf size={20} color={this.props.color} /> : <IoMdStarOutline size={15} color={'gray'} />
  }

  render() {
    return (
      <div>
        <div data-tip={this.props.description} className="grid-x" style={{ marginRight: 5, marginLeft: 0, marginTop: -15, marginBottom: -15, justifyContent: 'center', alignItems: 'center' }}>
          <p style={{ marginRight: 5, paddingTop: 15, textAlign: 'right', textAlignVertical: 'center', color: this.props.color, fontWeight: '800' }} >{this.props.rate}</p>
          {this.star(1)}
          {this.star(2)}
          {this.star(3)}
          {this.star(4)}
          {this.star(5)}
        </div>
        <ReactTooltip />
      </div>
    );
  }
}

export default Rating;
