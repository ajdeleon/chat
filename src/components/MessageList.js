import React from 'react'
import PropTypes from 'prop-types'

import Message from './Message'

const MessageList = ({ messages }) => (
  <section id="messages-list">
    <ul>
      {messages.map(message => {
        <Message
          key={message.id}
          {...message}
        />
      })}
    </ul>
  </section>
)

MessageList.PropTypes = {
  messages: PropTypes.arraOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequire
  ).isRequired
}

export default MessageList