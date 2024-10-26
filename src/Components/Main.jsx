import React from 'react'
import Navbar from './Navbar'
import "../Styles/style.css"
import Top from './Top'
import Songs from './Songs'
import Home from './Home'

const Main = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <Top />
      <Songs />
    </>
  )
}

export default Main
