import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import style
import '../assets/style/panel.scss';
// import rest
import { setFillColour, setStrokeColour, setTool } from '../store';
import Brush from '../tools/Brush';
import Circle from '../tools/Circle';
import Eraser from '../tools/Eraser';
import Line from '../tools/Line';
import Square from '../tools/Square';

export default function Panel() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.stateRed);

  const changeHandel = (e) => {
    dispatch(setStrokeColour(e.target.value));
    dispatch(setFillColour(e.target.value));
  }

  return (
    <div className='panel'>
      <div className="panel__leftSide">
        <img src="./img/brush.svg" alt='image of toolbar' className="panel__button" onClick={() => dispatch(setTool(new Brush(state.canvas)))}></img>
        <img src="./img/square.svg" alt='image of toolbar' className="panel__button" onClick={() => dispatch(setTool(new Square(state.canvas)))}></img>
        <img src="./img/circle.svg" alt='image of toolbar' className="panel__button" onClick={() => dispatch(setTool(new Circle(state.canvas)))}></img>
        <img src="./img/eraser.svg" alt='image of toolbar' className="panel__button" onClick={() => dispatch(setTool(new Eraser(state.canvas)))}></img>
        <img src="./img/remove.svg" alt='image of toolbar' className="panel__button" onClick={() => dispatch(setTool(new Line(state.canvas)))}></img>

        <img src="./img/color-wheel.svg" alt='image of toolbar' className="panel__button" onClick={() => inputRef.current.click()} ></img>
      </div>
      <div className="panel__rightSide">
        <img src="./img/undo.svg" alt="image of toolbar" className="panel__button" />
        <img src="./img/redo.svg" alt="image of toolbar" className="panel__button" />
        <img src="./img/save.svg" alt="image of toolbar" className="panel__button" />
      </div>
      <input type="color" ref={inputRef} hidden onChange={(e) => changeHandel(e)} />
    </div>
  )
}
