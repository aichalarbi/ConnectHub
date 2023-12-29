
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'; 
import User from './user';
import axios from 'axios';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <User name={user.name} email={user.email} userId={user.id} />
          <Link to={`/profile/${user.id}`}>
            <Button variant="primary">Go somewhere</Button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
