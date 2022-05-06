import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import style
import '../assets/style/canvas.scss';
// import rest
import { setCanvas,setTool } from '../store';
import Brush from '../tools/Brush';

export default function Canvas() {
  // @ts-ignore
  const state = useSelector((state) => state.stateRed);
  const dispatch = useDispatch();

  const canvasRef = useRef(null);

  useEffect(() => {
    dispatch(setCanvas(canvasRef.current));
    dispatch(setTool(new Brush(canvasRef.current)));
  }, [])

  return (
    <div className='canvas'>
      <canvas ref={canvasRef} width={window.innerWidth - 100} height={window.innerHeight - 100} ></canvas>
    </div>
  )
}
