import React, { useRef, useState } from 'react'
import Component from './component'
import cross_img from '../assets/cross.png'
import circle_img from '../assets/circle.png'

var arr = ["","","","","","","","",""]
const TicTacToe = () => {
    const [count, setCount] = useState(0)
    const [lock, setLock] = useState(false)
    const changeTextRef = useRef<HTMLDivElement>(null!)
    const resetRef = useRef<HTMLDivElement>(null!)

    const setBox = (e:React.MouseEvent<HTMLDivElement>, num:number)=>{
        if(lock){
           return; 
        }
        else{
            if(count%2==0){
                (e.target as HTMLDivElement).innerHTML  = `<img src=${cross_img}>`
                setCount(prevCount=>prevCount+1)
                arr[num] = "x"
                checkWin(cross_img)
            }
            else{
                (e.target as HTMLDivElement).innerHTML  = `<img src=${circle_img}>`
                setCount(prevCount=>prevCount+1)
                arr[num] = "o"
                checkWin(circle_img) 
            }
        }
    }

    const checkWin = (text:string)=>{
        for(let i=0; i<arr.length; i+=3){
            if(arr[i]===arr[i+1]&&arr[i+1]===arr[i+2]&&arr[i+2]!==""){
                winner(text)
            }
        }
        for(let i=0; i<arr.length; i++){
            if(arr[i]===arr[i+3]&&arr[i+3]===arr[i+6]&&arr[i+6]!==""){
                winner(text)
            }
        }
        for(let i=0; i<arr.length; i+=2){
            if(arr[i]===arr[i+4]&&arr[i+4]===arr[i+8]&&arr[i+8]!==""){
                winner(text)
            }
        }         
    }
    const winner = (text:string)=>{
        changeTextRef.current.innerHTML = `CONGRATULATIONS <img src=${text}> WINS`
        setLock(true)
    }

    const reset = ()=>{
        resetRef.current.innerHTML = ""
        arr = ["","","","","","","","",""]
        setLock(false)
        setCount(0)
    }

  return (
    <div>
      <Component setBox = {setBox} changeTitle={changeTextRef} reset={reset} resetTitle={resetRef}/>
    </div>
  )
}

export default TicTacToe
