import React from 'react'
import '../style/style.css'

const Component = () => {
  return (
    <div className='container'>
        <h1 className="title">TIC TAC TOE <span>REACT</span></h1>
      <div className='box-wrapper'>
        <div className='row'>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
        </div>
        <div className='row'>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
        </div>
        <div className='row'>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
        </div>
      </div>
      <button className='reset'>RESET</button>
    </div>
  )
}

export default Component
