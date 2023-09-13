import React, { Component } from 'react'
import { ContactForm } from './ContactForm/ContactForm'
import { nanoid } from 'nanoid'
import { ContactList } from './ContactList/ContactList'

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
  }
  createContact = (body) => {
    const isExist = this.state.contacts.find(
      (el) => el.name === body.name
    )
    if (isExist) {
      const allreadyInName = body.name;
      alert(`${allreadyInName} is already in contacts.`);
      return
    }
    this.setState((prev)=>({
      contacts: [...prev.contacts, {
        id: nanoid(),
        ...body,
      }]
    }))
  }
  deleteContact = (id) =>{
    this.setState((prev) => ({
      contacts: prev.contacts.filter((el) => el.id !== id),
    }))
  }
  render() {
    return (
    <>
    <section>
      <h1>Phonebook</h1>
      <ContactForm createContact={this.createContact}/>
      <h2>Contacts</h2>
      <ContactList contacts={this.state.contacts} deleteContact={this.deleteContact}></ContactList>
    </section>
    </>
    )
  }
}
