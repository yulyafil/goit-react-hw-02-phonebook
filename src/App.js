
import React, { Component } from 'react';

import Form from './Components/Form';
import Lesson from './Components/Lesson';

class App extends Component {
  state = {};

  formSubmitHandle = data => {
    console.log(data);
  };

  render() {

    return (
    <div>
      <h1>Phonebook</h1>
        <Form onSubmit={ this.formSubmitHandle }/>
        
      <h2>Contacts</h2>
      
      
      <Lesson onSubmit={this.formSubmitHandle }/>
      
      
    </div>
  )
  }
}
 
  
 
export default App;
