import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem', color: 'blue' }}>
        <Link to='/' style={{textDecoration:'none'}}><h1 style={{ margin: 0 }}>Movies App</h1></Link>
        
        <Link to='/favourites' style={{textDecoration:'none'}}><h2 style={{ margin: '0 0 0 2rem' }}>Favourites</h2></Link>
      </div>
    )
  }
}
