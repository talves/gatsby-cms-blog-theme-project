import React from 'react'
import { Link } from 'gatsby'

const Index = (props) => {
  return (
    <>
      <h1>Collection Types</h1>

      <ul>
        {['blog','docs'].map((item, index) => {
          return (<li key={index}><Link to={`/${item}`}><h2>{item}</h2></Link></li>)
        })}
      </ul>
    </>
  )
}

export default Index
