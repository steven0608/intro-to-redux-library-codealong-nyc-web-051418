import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux'
import './App.css';

class App extends Component {


  handleOnClick = (event) => {
    this.props.increaseCount()
  }

  render() {
    console.log("check length", this.props.items.length)
    console.log("check item", this.props.items)
    return ( <
      div className = "App" >
      <
      button onClick = {
        this.handleOnClick
      } >
      Click <
      /button> <
      p > {
        this.props.items.length
      } < /p>

      <
      /div>
    );
  }
};

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCount: () => dispatch({
      type: 'INCREASE_COUNT'
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);