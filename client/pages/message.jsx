import React from 'react';

const MessagePage = ({ title, body='' }) => (
  <div>
    <h2>{title}</h2>
    <p>{body}</p>
  </div>
);

export default MessagePage;
