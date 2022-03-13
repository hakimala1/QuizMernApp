import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const token =localStorage.getItem('token')
    const {auth,loading}=useSelector(state=>state.authReducer)
  return <div>

      {loading ? <h1>Wait...</h1> :token&&auth?children : <Navigate to='/SignUpIn'></Navigate>}
  </div>;
}

export default PrivateRoute;
