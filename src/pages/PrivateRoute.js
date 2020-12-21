import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ children, ...rest }) => {
  const myUser = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null
  return (
    <Route
      {...rest}
      render={() => {
        return myUser ? children : <Redirect to='/'></Redirect>
      }}
    ></Route>
  )
}
export default PrivateRoute
