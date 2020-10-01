import React from 'react';
import './App.css';

import Counter from './components/Counter';

class App extends React.Component {
  state = {
    count: 0,
    counterIsActive: false,
    isErrorActive: false
  };

  handleCountChange = value => {
    this.setState({
      count: value
    });
  };

  toggleCounter = () => {
    this.setState(previousState => ({
      counterIsActive: !previousState.counterIsActive
    }));
  };

  componentDidCatch(error) {
    console.log('There was an uncaught error thrown in the component');
    console.log('Error! ', error);
    this.setState({
      isErrorActive: true
    })
  }

  render() {
    return (
      <div className='App'>
        {this.state.isErrorActive ? <h1>An error happened</h1>
          :
          <>
            <button onClick={this.toggleCounter}>Toggle</button>
            {[].map(() => console.log("Hello"))}
            {this.state.counterIsActive && <Counter value={this.state.count} onCountChange={this.handleCountChange} />}
          </>
        }
      </div>
    );
  }
}

export default App;
