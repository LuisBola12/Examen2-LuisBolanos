import React from 'react';
import "./TopBar.scss"

export const TopBar = ({text}) => {
  return (
    <div className='top-bar'>
      {text}
    </div>
  )
}
