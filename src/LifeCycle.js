import React, { Component } from 'react';

export class LifeCycle extends Component {
  static defaultProps = {}; // делаем если остутствие значений по умолчанию вызвоет ошибку

  state = {
    creditCardInput: this.props.creditCard, // можно использовать значения из пропсов
  };
  constructor(props) {
    super(props);
    console.log('constructor');
    console.log(props);
    this.div = React.createRef()
    console.log(this.div) // проверим есть ли ссылка на этот div
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps); // то что задали в props компоненты
    console.log(prevState); // то что задавалось в объекте state
    console.log('getDerivedStateFromProps');
    return {
      creditCardInput: nextProps.creditCard // меняем props компоненты для отформатированного вида
        .replace(/(\d{0,4})/g, '$1 ')
        .trim(),
    };
  }

  componentDidMount() {
    console.log(this.div.current.getBoundingClientRect())
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  // unsafe / deprecated

  // componentWillReceiveProps(nextProps) {
  //   this.props !== nextProps
  //   console.log('componentWillReceiveProps');
  // }

  // componentWillMount() {
  //   console.log('componentWillMount');
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   this.props !== nextProps
  //   this.state !== nextState
  //   console.log('componentWillUpdate');
  // }

  render() {
    console.log('render');
    const { creditCardInput } = this.state;
    return <div ref={this.div}>{creditCardInput}</div>;
    //ref={this.div} - передаем ссылку на отрендеренный div в componentDidMount + см строка 13.
    // чтобы узнать его размеры
    // можно и так ref ={divReference => this.div = divReference} но могут быть ошибки
    //!!!!!!!!!!!! ref не передается в props !!!!!!!!!!!!!!!!!
  }
}

export default LifeCycle;
