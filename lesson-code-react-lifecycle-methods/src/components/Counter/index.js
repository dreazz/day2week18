import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log('Component was constructed');
    // setTimeout(() => {
    //   throw new Error();
    // }, 5000);
  }

  componentDidMount() {
    console.log('Component was mounted');
  }

  componentDidUpdate(previousProps, previousState) {
    console.log('Component was updated');
    console.log(previousProps, this.props);
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  increment = () => {
   this.props.onCountChange(this.props.value + 1);
 };
  render() {
    console.log('Component was rendered');
    if(this.props.value === 5){
      throw new Error('I crashed!');
    }

    return (
      <div>
        <span>{this.props.value}</span>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default Counter;
