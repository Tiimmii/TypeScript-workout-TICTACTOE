import React from 'react'
import '../style/style.css'
import { ComponentPropsTypes } from './types'

const Component = ({setBox, changeTitle, reset, resetBoxes}:ComponentPropsTypes) => {
  return (
    <div className='container'>
        <h1 className="title" ref={changeTitle}>TIC TAC TOE <span>REACT</span></h1>
      <div className='box-wrapper'>
        <div className='row'>
            <div className='box' ref={resetBoxes[0]} onClick={(e)=>{setBox(e, 0)}}></div>
            <div className='box' ref={resetBoxes[1]} onClick={(e)=>{setBox(e, 1)}}></div>
            <div className='box' ref={resetBoxes[2]} onClick={(e)=>{setBox(e, 2)}}></div>
        </div>
        <div className='row'>
            <div className='box' ref={resetBoxes[3]} onClick={(e)=>{setBox(e, 3)}}></div>
            <div className='box' ref={resetBoxes[4]} onClick={(e)=>{setBox(e, 4)}}></div>
            <div className='box' ref={resetBoxes[5]} onClick={(e)=>{setBox(e, 5)}}></div>
        </div>
        <div className='row'>
            <div className='box' ref={resetBoxes[6]} onClick={(e)=>{setBox(e, 6)}}></div>
            <div className='box' ref={resetBoxes[7]} onClick={(e)=>{setBox(e, 7)}}></div>
            <div className='box' ref={resetBoxes[8]} onClick={(e)=>{setBox(e, 8)}}></div>
        </div>
      </div>
      <button className='reset' onClick={reset}>RESET</button>
    </div>
  )
}

export default Component
