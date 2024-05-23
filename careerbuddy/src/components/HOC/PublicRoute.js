import React, {useContext} from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import authContext from 'context/auth/authContext'
import Loader from 'components/Loader'

const PublicRoute = ({component: Component, ...rest}) => {
  const {isAuthenticated, loading} = useContext(authContext)
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        isAuthenticated !== null &&
        (isAuthenticated === false ? <Outlet /> : <Navigate to={'/dashboard'} />)
      )}
    </>
  )
}

export default PublicRoute
