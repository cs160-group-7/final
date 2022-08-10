import React from 'react'

class MessageList extends React.Component {
  render() {
    if (!this.props.messages[0]) return null
    return (
      <ul className="message-list">
        {this.props.messages.map(message => {        
          return (            
            <li key={message.id} className="message">
              <a href={"/message/" + message.id}>
              {message.data().content}              
              </a>
            </li>
          )
        })}
      </ul>
    )
  }
}


export default MessageList