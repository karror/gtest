import React, { Component } from "react"
//import df from 'dateformat';
//import axios from 'axios';
import { graphql } from "gatsby";
import Header from '../components/header.js';
import ExpBox from '../components/expBox.js';
import BgExp from '../../static/img/bgExp.jpg';
import BgAbi from '../../static/img/bgAbi.jpg';
import BgPro from '../../static/img/bgPro.jpg';
import BgExpBlur from '../../static/img/bgExpBlur.jpg';
import BgAbiBlur from '../../static/img/bgAbiBlur.jpg';
import BgProBlur from '../../static/img/bgProBlur.jpg';
import '../../static/css/animate.css';
import '../../static/css/blur.css';


export const query = graphql`{
  cms {
    cards {
      title,
      link,
      subtitle,
      cardType,
      begin,
      end,
      text,
      img {
        file
      },
      tags {
        name
        url
      }
      rates {
        rate,
        desc,
        color
      }
    }
  }
}`


class Index extends Component {

  setData() {
    const { cms } = this.props.data
    if (cms.cards) {
      return {
        exp: cms.cards.filter(item => item.cardType === 'exp'),
        abi: cms.cards.filter(item => item.cardType === 'abi'),
        pro: cms.cards.filter(item => item.cardType === 'pro')
      }
    }
  }

  render() {
    const {exp, abi, pro} = this.setData()
    return (
      <div>
        <Header />
        <div
          className={'grid-padding-x'}
          style={{
            justifyContent: 'center',
            padding: '2em',
            paddingTop: '4em',
            background: '#000'
          }}
        >
          <h1 style={{ textAlign: 'center', color: 'white', fontWeight: '300' }}>Doświadczenie zawodowe</h1>
        </div>
        <div
          className={'grid-x grid-padding-x small-up-1 medium-up-1 large-up-3'}
          style={{
            padding: '2em',
            justifyContent: 'center',
            backgroundImage: `url(${BgExp})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
          }}
        >
          {exp.map(item => {
            return (
              <div className={'cell'} key={item.title}>
                <ExpBox
                  title={item.title}
                  img={item.img.file}
                  subtitle={item.subtitle}
                  text={item.text}
                  from={item.begin}
                  to={item.end}
                  rates={item.rates}
                  url={item.link}
                  tags={item.tags}
                  imgBlur={BgExpBlur}
                />
              </div>
            );
          })}
        </div>
        <div
          className={'grid-padding-x'}
          style={{
            justifyContent: 'center',
            padding: '3em',
            paddingTop: '4em',
            background: '#000'
          }}
        >
          <h1 style={{ textAlign: 'center', color: 'white', fontWeight: '300' }}>Projekty</h1>
        </div>
        <div
          className={'grid-x grid-padding-x small-up-1 medium-up-1 large-up-3'}
          style={{
            padding: '2em',
            justifyContent: 'center',
            backgroundImage: `url(${BgPro})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
          }}
        >
          {pro.map(item => {
            return (
              <div className={'cell'} key={item.title}>
                <ExpBox
                  title={item.title}
                  img={item.img}
                  subtitle={item.subtitle}
                  text={item.text}
                  from={item.from}
                  to={item.to}
                  secondRate={item.secondRate}
                  firstRate={item.firstRate}
                  url={item.url}
                  tags={item.tags}
                  imgBlur={BgProBlur}
                />
              </div>
            );
          })}
        </div>
        <div
          className={'grid-padding-x'}
          style={{
            justifyContent: 'center',
            padding: '3em',
            paddingTop: '4em',
            background: '#000'
          }}
        >
          <h1 style={{ textAlign: 'center', color: 'white', fontWeight: '300' }}>Umiejętności</h1>
        </div>
        <div
          className={'grid-x grid-padding-x small-up-1 medium-up-1 large-up-3'}
          style={{
            padding: '2em',
            justifyContent: 'center',
            backgroundImage: `url(${BgAbi})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
          }}
        >
          {abi.map(item => {
            return (
              <div className={'cell'} key={item.title}>
                <ExpBox
                  title={item.title}
                  img={item.img}
                  subtitle={item.subtitle}
                  text={item.text}
                  from={item.from}
                  to={item.to}
                  secondRate={item.secondRate}
                  firstRate={item.firstRate}
                  url={item.url}
                  tags={item.tags}
                  imgBlur={BgAbiBlur}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Index;
