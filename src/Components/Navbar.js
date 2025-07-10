import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem' }}>
        <h1 style={{ margin: 0 }}>Movies App</h1>
        <h2 style={{ margin: '0 0 0 2rem' }}>Favourites</h2>
      </div>
    )
  }
}
