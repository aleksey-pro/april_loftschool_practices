import React, { Component } from 'react';

class LiftStateExample extends Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value, // здесь мы сохраняем то что вводися в input
      // через чтение полей с уникальными name
    });
  };

  render() {
    return (
      <div>
        {Object.keys(this.state).map(
          (fieldName, index) => (
            <input
              key={fieldName} // индефикатор при создании одинковых элементов компоненты
              // напрмер при сортировке данных элементов их порядок изменится и index тоже именится
              // и тогда key != index
              name={fieldName}
              value={this.state[fieldName]}
              placeholder={fieldName.toUpperCase()}
              onChange={this.handleChange}
            />
          ),
        )}
      </div>
    );
  }
}

export default LiftStateExample;
