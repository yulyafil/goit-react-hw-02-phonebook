import  { Component } from 'react';
import './Form.css';
import { v4 as uuidv4 } from 'uuid';

const INIITAL_STATE = {
    name: '',
    number: ''
}

class ContactForm extends Component {
    state = INIITAL_STATE;

    nameInputId = uuidv4();

    handleChange = ({target}) => {
        const { name, value } = target;
        this.setState({ [name]: value})
    };
    handleSubmit = e => {
        e.preventDefault();
        const { name, number } = this.state;
        const { onAdd } = this.props;

        const isValidatedForm = this.validateForm();

        if (!isValidatedForm)
            return
        
        onAdd({id: this.nameInputId, name, number})
        
        this.reset();
    };
    validateForm = () => {
       const { name, number } = this.state;
        const { onCheckUnique } = this.props; 
        if (!name || !number) {
            alert('Some filed is empty');
            return false
        }
        return onCheckUnique(name);
    }
    reset = () => {
        this.setState({
            contacts: [],
            name: '', 
            number: ''
        });
    };


    render() {

        return (
    <form className="FormContact" onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
                    Name
            <br/>
            <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                id={this.nameInputId}
            />
            </label>
                     
                    
            <label htmlFor={this.nameInputId}> 
                    <br/>
                    Number
                    <br/>
            <input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                id={this.nameInputId}            
                
            />
        </label>
        
           <br/>         
         <br/>
        <button type="submit" >Add contact </button>
    </form>
    
        )
    }

}

export default ContactForm;