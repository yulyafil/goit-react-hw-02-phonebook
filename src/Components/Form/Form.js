import React, { Component } from 'react';
import './Form.css';


class Phonebook extends Component {
    state = {
        contacts: [],
        name: '',
    };
    

    handleChange = e => {
        // const { name } = e.currentTarget;
        this.setState({ name: e.currentTarget.value })
    };
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    };

    render() {

        return (
    <div>
        <form className="FormContact" onSubmit={this.handleSubmit}>
          <label>
           Name <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          {/* <label>
            Депозит <input type="text" name="deposit" value={this.state.deposit} onChange={this.handleChange} />
          </label> */}
        <button type="submit" >Add contact </button>
        </form>
    </div>
        )
    }

}

export default Phonebook;