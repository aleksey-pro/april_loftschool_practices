import React, { Component } from 'react';

export class ErrorHandling extends Component {
  state = {
    hasError: false,
    error: null,
  };

  // Отлавливается внутри рендера (прямо в документе)

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.log(errorInfo);
    this.setState({ hasError: true, error });
  }
  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <p style={{ backgroundColor: 'red', padding: 20 }}>
          Ошибка
        </p>
      );
    }
    return <Child />;
  }
}


export class Child extends Component {
  componentDidMount() { // но не будет выводиться в асинхронной операции (если например обернуть ее в setInterval)
    throw new Error('Случайная ошибка');
  }
  render() {
    return <div>Child</div>;
  }
}

export default ErrorHandling;
