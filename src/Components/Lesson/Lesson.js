import React, { Component } from 'react';


class Lesson extends Component {
  state = {
    name: '',
    deposit: ''
  };

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        })
    };
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state)
    };
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
          <label>
            Имя <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Депозит <input type="text" name="deposit" value={this.state.deposit} onChange={this.handleChange} />
                </label>
                <button type="submit" >Add deposit </button>
            </form>
      </div>
      // <div>
      //   <Phonebook title="Phonebook"/>
      // </div>
    );
  }
}
export default Lesson;
