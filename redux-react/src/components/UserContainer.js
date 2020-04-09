import React, { useEffect } from 'react';
import fetchUsers  from '../store/actions/userActions';
import { useSelector, useDispatch } from 'react-redux';

function UserContainer() {
  const userData = useSelector(state => state.user)
  const dispatch = useDispatch(fetchUsers());

  useEffect(() => {
    fetchUsers()
  }, [])
  return userData.loading ? (
    <h2>loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
        <div>
          <button onClick={() => dispatch(fetchUsers())}>Show Users</button>
          <div>
            {
              userData && userData.users && userData.users.map(user => <p> {user.name} </p>)
            }
          </div> 
        </div>
      )
}

export default UserContainer;