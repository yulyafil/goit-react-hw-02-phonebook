import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';


class Lesson extends Component {
  state = {
    name: '',
    deposit: '',
    experience: 'Трейдер',
    data: false
  };
  nameInputId = uuidv4();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    })
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleDataChange = e => {
    console.log(e.currentTarget.checked);
    this.setState({data: e.currentTarget.checked})
  }
  reset = () => {
    this.setState({
      name: '',
      deposit: ''
    });
  }
  // handelNameChange = evt => {
  //   console.log(evt.currentTarget.value);

  //   this.setState({ name: evt.currentTarget.value });
  // };
  // handelDepositChange = evt => {
  //   this.setState({ deposit: evt.currentTarget.value });
  // }


  render() {

 
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Имя <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameInputId}
            />
          </label>
          <label htmlFor={this.nameInputId}>
            Депозит <input type="text" name="deposit" value={this.state.deposit} onChange={this.handleChange} id={this.nameInputId} />
          </label>
          <button type="submit" >Add deposit </button>
        </form>
        <p>Ваш Уровень: </p>
        <label>
          <input type="radio" name="experience" value="Хомяк" onChange={this.handleChange} checked={ this.state.experience === 'Хомяк'}/> Хомяк
        </label>
        <label>
          <input type="radio" name="experience" value="Трейдер" onChange={this.handleChange} checked={ this.state.experience === 'Трейдер'}/> Трейдер
        </label>
        <label>
          <input type="radio" name="experience" value="Кит" onChange={this.handleChange} checked={ this.state.experience === 'Кит'}/> Кит
        </label>

        <br />

        <label>
          <input type="checkbox" name="data" checked={this.state.data } onChange={this.handleDataChange}/> Согласен на депозит
        </label>

        <br/>
        
        <button type="submit" disabled={!this.state.data}>Отправить </button>
      </div>
      // <div>
      //   <Phonebook title="Phonebook"/>
      // </div>
     
    );
  }
} 
export default Lesson;
