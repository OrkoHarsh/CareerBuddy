import React from 'react'
import {useLocation} from 'react-router-dom'
import {useLayoutEffect} from 'react'
export default function ScrollTop() {
  const {pathname} = useLocation()
  useLayoutEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [pathname])
  return null
}
