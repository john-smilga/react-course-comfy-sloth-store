import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useUserContext } from '../context/user_context'

const PrivateRoute = ({ children, ...rest }) => {
  const { myUser } = useUserContext()
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
