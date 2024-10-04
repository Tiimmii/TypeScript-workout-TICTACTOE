import React, { useRef, useState } from 'react'
import Component from './component'
import cross_img from '../assets/cross.png'
import circle_img from '../assets/circle.png'

var arr = ["","","","","","","","",""]
const TicTacToe = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const changeTextRef = useRef<HTMLDivElement>(null!);
    const box1 = useRef<HTMLDivElement>(null!);
    const box2 = useRef<HTMLDivElement>(null!);
    const box3 = useRef<HTMLDivElement>(null!);
    const box4 = useRef<HTMLDivElement>(null!);
    const box5 = useRef<HTMLDivElement>(null!);
    const box6 = useRef<HTMLDivElement>(null!);
    const box7 = useRef<HTMLDivElement>(null!);
    const box8 = useRef<HTMLDivElement>(null!);
    const box9 = useRef<HTMLDivElement>(null!);
    const boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

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
       boxes.forEach(box=>{
            if(box){
                box.current.innerHTML = "";
            }
        })
        arr = ["","","","","","","","",""]
        setLock(false)
        setCount(0)
        changeTextRef.current.innerHTML = `<h1>TIC TAC TOE <span>REACT</span></h1>`
    }

  return (
    <div>
      <Component setBox = {setBox} changeTitle={changeTextRef} reset={reset} resetBoxes={boxes}/>
    </div>
  )
}

export default TicTacToe
