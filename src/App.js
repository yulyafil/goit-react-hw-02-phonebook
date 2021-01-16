
import React, { Component } from 'react'

import ContactForm from './Components/Form'
import ContactList from './Components/ContactList'
import Filter from './Components/Filter'
// import Lesson from './Components/Lesson';

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ], 
    filter: '',
  };

  handleAddContact = newContact => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };
  handleCheckUnique = name => {
    const { contacts } = this.state
    const isExistContact = !!contacts.find((contact) => contact.name === name)
    isExistContact && alert('Contact is already exist');

    return !isExistContact;
  }
  handleRemoveContact = (id) => this.setState(({ contacts }) => ({ contacts: contacts.filter((contact) => contact.id !== id) }));

  handleFilterChange = (filter) => this.setState({ filter });

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
    <div>
      <h1>Phonebook</h1>
        <ContactForm onAdd={this.handleAddContact} onCheckUnique={ this.handleCheckUnique}/>
        
        <h2>Contacts</h2>
        
        <Filter filter={filter} onChange={this.handleFilterChange} />
        
        <ContactList contacts={visibleContacts} onRemove={ this.handleRemoveContact}/>
        
      {/* <Lesson onSubmit={this.formSubmitHandle }/> */}
      
      
    </div>
  )
  } 
}
 
  
 
export default App;
