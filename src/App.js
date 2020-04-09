import React, { Component } from 'react';
import lottiie from 'lottie-web';
import './App.css';
import boxAnimation from './data/my_box.json';
import coronaAnimation from './data/corona.json';
import handsAnimation from './data/hands.json';
import foreheadAnimation from './data/forehead.json';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

// declare types of animation
const types = {
  MY_BOX: 'MY_BOX',
  CORONA: 'CORONA',
  HANDS: 'HANDS',
  FOREHEAD: 'FOREHEAD'
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
      default:
        return null;
    }
  }
  render() {
    var show = this.state.show;
    return (
      <Container>
        <div className="toggleBtns">
          <Button variant="outline-primary" onClick={this.toggleAnimation} value={'MY_BOX'} >Box</Button>
          <Button variant="outline-success" onClick={this.toggleAnimation} value={'CORONA'} >Corona Virus</Button>
          <Button variant="outline-warning" onClick={this.toggleAnimation} value={'HANDS'} >Washing Hand</Button>
          <Button variant="outline-info" onClick={this.toggleAnimation} value={'FOREHEAD'} >Forehead</Button>
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

      </Container>
    );
  }
}

export default App;
