import React, {Component} from 'react'

class ListComponents extends Component{
    render(){
        return (
            <ol className='contact-list'>
                {this.props.contacts.map((contacts)=>(
                    <li key={contacts.id} className='contact-list-item'>
                        <div className='contact-avatar'
                            style={{backgroundImage:`url(${contacts.avatarURL})`}}
                            ></div>
                        <div className='contact-details'>
                            <p>{contacts.name}</p>
                            <p>@{contacts.handle}</p>
                        </div>
                        <button className='contact-remove'>
                            Remove
                        </button>
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListComponents