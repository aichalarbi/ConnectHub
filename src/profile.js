
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


function Profile() {
  const [user, setUser] = useState();
 const {userId}=useParams()
  useEffect(() => {
    console.log(userId)
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => setUser(response.data))
        .catch(error => console.error('Error fetching user:', error));
    }
  , []);
  console.log(user)

  

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <Link to={`/posts/${user.id}`}>
        Go to User's Posts
      </Link>
    </div>
  );
}

export default Profile;
