import React from 'react';

function ListContacts(props) {
    return (
        <ol className='contact-list'>
            {props.contacts.map((contacts) => (
                <li key={contacts.id} className='contact-list-item'>
                    <div className='contact-avatar'
                        style={{ backgroundImage: `url(${contacts.avatarURL})` }}
                    ></div>
                    <div className='contact-details'>
                        <p>{contacts.name}</p>
                        <p>@{contacts.handle}</p>
                    </div>
                    <button
                        onClick={() => props.onDeleteContact(contacts)}
                        className='contact-remove'>
                        Remove
                        </button>
                </li>
            ))}
        </ol>
    )
}
export default ListContacts