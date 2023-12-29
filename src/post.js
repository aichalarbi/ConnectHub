import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Post({ title, body }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Post;


