import { Component } from 'react'

export class ContactList extends Component {
    state = {
    }
  render() {
    console.log(this.props.contacts)
    return (
        <>
        <ul>
            {
                this.props.contacts.map(contact =>(
                    <li key={contact.id}>
                        <p>{contact.name}</p>
                        <p>{contact.number}</p>
                        <button onClick={() => this.props.deleteContact(contact.id)}>Delete</button>
                    </li>
                ))  
            }
        </ul>
    </>
    )
  }
}
// import React from "react";

// export const ContactList = ({contacts, deleteContact}) => {
//     console.log(contacts)
//     return(
//         <>
//             <ul>
//                 {
//                     contacts.map(contact =>(
//                         <li key={contact.id}>
//                             <p>{contact.name}</p>
//                             <p>{contact.number}</p>
//                             <button onChange={deleteContact(contact.id)}>Delete</button>
//                         </li>
//                     ))
//                 }
//             </ul>
//         </>
//     )
// }