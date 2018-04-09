import React, {
  Fragment, // когда нужно вернуть несколько элементов
  Component,
  PureComponent,
} from 'react';

class Simple extends Component {
  shouldComponentUpdate(nextProps, nextState) { // этот метод
    // в обычном компоненте (Simple) всегда возращает true
    return false; // принудительно делаем чтобы компонент не обновлялся
  }
  render() {
    console.log('render simple');
    return <div>Simple</div>;
  }
}

class Pure extends PureComponent { // PureComponent имеет встроенный метод shouldComponentUpdate,
  // который проверяет надо ли рендерить заново. Но он использует только поверхностное сравнение
  // так как объекты в purе передаются по ссылке и объект counter передается неизменный,
  // меняется только value которое передается неизменным.
  render() {
    console.log('render pure');
    console.log(this.props);
    return <div>Pure</div>;
  }
}

/**
 * Рендерися как и Pure (без изменения props). Используется просто как быстрый синтаксис для задания компоненты
 */
const StatelessComponent = (props) => { // пропсы передаем аргументами функции
  console.log('render StatelessComponent')
  console.log(props)
  return <div />;
};

StatelessComponent.defaultProps = { // в отличие от static defaultProps для Simple
  someProp: 1
}

export default class extends Component {

  state = {
    counter: { value: 0 },
  };
  componentDidMount() { // здесь мы учеличиваем счечик, но при этом pure
    // компонента не рендерится так как value внутри state во вложенном уровне!!!
    //
    setInterval(() => {
      const { counter } = this.state;
      counter.value += 1;
      this.setState({ counter });
    }, 1000);
  }
  render() {
    const { counter } = this.state;
    console.log(counter);
    return (
      <Fragment>
        {/* <Simple counter={counter} /> */}
        {/* { <StatelessComponent /> */}
        <Pure
          key={'asdadsa'} // не передаётся в props!
          ref={c => (this.pure = c)} // не передаётся в props!
          counter={counter}
        />
      </Fragment>
    );
  }
}
