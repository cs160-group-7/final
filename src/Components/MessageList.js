import React from 'react'

class MessageList extends React.Component {

  render() {
    if (!this.props.messages[0]) return null
    return (
      <ul className="message-list">
        {this.props.messages.map(message => {        
          return (            
            <li key={message.data().id} className="message">
              {message.data().content}              
            </li>
          )
        })}
      </ul>
    )
  }
}


export default MessageList