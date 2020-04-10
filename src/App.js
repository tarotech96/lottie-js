import React, { Component } from 'react';
import lottiie from 'lottie-web';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import boxAnimation from './data/my_box.json';
import coronaAnimation from './data/corona.json';
import handsAnimation from './data/hands.json';
import foreheadAnimation from './data/forehead.json';
import fatoAnimation from './data/fato.json';
import learningAnimation from './data/learning.json';
import pepcoinAnimation from './data/pepcoin.json';
import walkingAnimation from './data/walking.json';

// declare types of animation
const types = {
  MY_BOX: 'MY_BOX',
  CORONA: 'CORONA',
  HANDS: 'HANDS',
  FOREHEAD: 'FOREHEAD',
  FATO: 'FATO',
  LEARNING: 'LEARNING',
  PEPCOIN: 'PEPCOIN',
  WALKING: 'WALKING'
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation_key: '',
      refValue: null,
      show: false
    }
  }

  componentDidUpdate() {
    var { animation_key, refValue } = this.state;
    var animationData = this.setAnimation(animation_key);
    if (refValue) {
      // using loadAnimation method of lotties library for load my animation 
      lottiie.loadAnimation({
        container: refValue, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData
      })
    }
  }

  // create function toggleAnimation when cliked button
  toggleAnimation = (e) => {
    var value = e.target.value
    var refValue = this.setRefValue(value);
    this.setState({
      animation_key: value,
      refValue: refValue,
      show: true
    })
  }

  // create function setAnimation for set animationData of each button when click
  setAnimation(type) {
    switch (type) {
      case types.MY_BOX:
        return boxAnimation;
      case types.CORONA:
        return coronaAnimation;
      case types.HANDS:
        return handsAnimation;
      case types.FOREHEAD:
        return foreheadAnimation;
      case types.FATO:
        return fatoAnimation;
      case types.LEARNING:
        return learningAnimation;
      case types.PEPCOIN:
        return pepcoinAnimation;
      case types.WALKING:
        return walkingAnimation;
      default:
        return null;
    }
  }

  // create function setRefValue for set ref value of each div tag which animation will be displayed 
  setRefValue(value) {
    switch (value) {
      case types.MY_BOX:
        return this.box
      case types.CORONA:
        return this.corona;
      case types.HANDS:
        return this.hands;
      case types.FOREHEAD:
        return this.forehead;
      case types.FATO:
        return this.fato;
      case types.LEARNING:
        return this.learning;
      case types.PEPCOIN:
        return this.pepcoin;
      case types.WALKING:
        return this.walking;
      default:
        return null;
    }
  }
  render() {
    var show = this.state.show;
    return (
      <Container>
        <h1>Generate Animation</h1>
        <div className="toggleBtns">
          <Button className="myBtn" onClick={this.toggleAnimation} value={'MY_BOX'} >Box</Button>
          <Button className="myBtn" onClick={this.toggleAnimation} value={'CORONA'} >Corona Virus</Button>
          <Button className="myBtn" onClick={this.toggleAnimation} value={'HANDS'} >Washing Hand</Button>
          <Button className="myBtn" onClick={this.toggleAnimation} value={'FOREHEAD'} >Forehead</Button>
          <Button className="myBtn" onClick={this.toggleAnimation} value={'FATO'} >Fato</Button>
          <Button className="myBtn" onClick={this.toggleAnimation} value={'LEARNING'} >Learning</Button>
          <Button className="myBtn" onClick={this.toggleAnimation} value={'PEPCOIN'} >Pepcoin</Button>
          <Button className="myBtn" onClick={this.toggleAnimation} value={'WALKING'} >Walking</Button>
        </div>
        <Row>
          <div className="myanimation">
            <Col xs={3}>
              {show ? <div className="box" ref={box => this.box = box}></div> : ''}
            </Col>

            <Col xs={3}>
              {show ? <div className="corona" ref={corona => this.corona = corona}></div> : ''}
            </Col>

            <Col xs={3}>
              {show ? <div className="hands" ref={hands => this.hands = hands}></div> : ''}
            </Col>

            <Col xs={3}>
              {show ? <div className="forehead" ref={forehead => this.forehead = forehead}></div> : ''}
            </Col>
          </div>
        </Row>

        <Row>
          <div className="myanimation">
            <Col xs={3}>
              {show ? <div className="fato" ref={fato => this.fato = fato}></div> : ''}
            </Col>

            <Col xs={3}>
              {show ? <div className="learning" ref={learning => this.learning = learning}></div> : ''}
            </Col>

            <Col xs={3}>
              {show ? <div className="pepcoin" ref={pepcoin => this.pepcoin = pepcoin}></div> : ''}
            </Col>

            <Col xs={3}>
              {show ? <div className="walking" ref={walking => this.walking = walking}></div> : ''}
            </Col>
          </div>
        </Row>

      </Container>
    );
  }
}

export default App;
