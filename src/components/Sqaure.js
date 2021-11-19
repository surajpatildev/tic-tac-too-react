import React from 'react';
import { DIRECTION } from '../config'

export default function Square(props) {
    let directionClass = ''
    switch (props.direction) {
      case DIRECTION.VERTICAL:
        directionClass = 'rotate-90';
        break;
  
      case DIRECTION.RIGHT_45:
        directionClass = 'rotate-135';
        break;
  
      case DIRECTION.LEFT_45:
        directionClass = 'rotate-45';
        break;
  
      default:
        directionClass = '';
        break;
    }
  
    return (
      <div className='sqaure-wrapper'>
        <div className={`square ${props.hightlight ? 'square-highlight1' : ''} ${props.winingIndex ? 'square-winning' : ''} `} onClick={props.onClick} >
          {props.value}
        </div>
        {props.winingIndex && <div className={`line ${directionClass}`}></div>}
  
      </div>
    )
  }