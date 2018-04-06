import React, { Component } from 'react';


export class App extends Component {
  state = {
    clicks: 0,
  };

  increment = () => {
    this.setState(({ clicks }) => ({ clicks: clicks + 1 }));
  };

  render() {
    const { clicks } = this.state;
    return (
      <div>
        {Array.from(new Array(10), (_, i) => i).map(i => (
          <p key={i}>{i}</p>
        ))}
        <Counter clicks={clicks} />
        {clicks < 10 ? (
          <button onClick={this.increment}>+</button>
        ) : null}
      </div>
    );
  }
}

class Counter extends Component {
  render() {
    const { clicks } = this.props;
    return <p>{clicks}</p>;
  }
}

export default App;
