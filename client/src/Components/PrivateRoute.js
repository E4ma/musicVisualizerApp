//to make route to user's account is private

import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
    //PrivateRoute = wrapper around current route
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
          //if we have a current user
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
        //if not, redirect to login page
      }}
    ></Route>
  )
}