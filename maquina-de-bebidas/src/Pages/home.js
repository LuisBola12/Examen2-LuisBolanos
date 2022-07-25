import React from 'react'
import "../App.css"
import { TopBar } from '../Components/TopBar/TopBar'
import { Machine } from './../Components/Machine/Machine';


export const Home = () => {
  return (
    <>
        <div className='page-content'>
            <TopBar text={"Luis Bolanos Valverde B91145"}/>
            <Machine/>
        </div>
    </>
  )
}
