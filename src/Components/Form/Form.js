import React, { Component } from 'react';
import './Form.css';
import { v4 as uuidv4 } from 'uuid';


class ContactForm extends Component {
    state = {
        contacts: [],
        name: ''
        
    };

    nameInputId = uuidv4();

    handleChange = e => {
        // const { name } = e.currentTarget;
        this.setState({ name: e.currentTarget.value })
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };
    reset = () => {
        this.setState({
            contacts: [],
            name: ''
        });
    };

    render() {

        return (
    <div>
        <form className="FormContact" onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                id={this.nameInputId}
            />
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

export default ContactForm;