import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired,
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }

    clearQuery = () => {
        this.updateQuery('')
    }

    render() {
        const { query } = this.state
        const { contacts, onDeleteContact, onNavigate } = this.props

        const showingContacts = query === ''
            ? contacts
            : contacts.filter((c) => (
                c.name.toLowerCase().includes(query.toLowerCase())
            ))

        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search Contacts'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />

                    <Link
                        to='/create'
                        className='add-contact'
                    >Add Contact</Link>
                </div>

                {showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>Now showing {showingContacts.length} of {
                            contacts.length}</span>
                        <button onClick={this.clearQuery}>Show All</button>
                    </div>
                )}

                <ol className='contact-list'>
                    {showingContacts.map((contacts) => (
                        <li key={contacts.id} className='contact-list-item'>
                            <div className='contact-avatar'
                                style={{ backgroundImage: `url(${contacts.avatarURL})` }}
                            ></div>
                            <div className='contact-details'>
                                <p>{contacts.name}</p>
                                <p>{contacts.handle}</p>
                            </div>
                            <button
                                onClick={() => onDeleteContact(contacts)}
                                className='contact-remove'>
                                Remove
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}



export default ListContacts