
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function User({ name, email, userId }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{email}</Card.Text>
        <Link to={`/profile/${userId}`}>
          <Button variant="primary">Go somewhere</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default User;
