// import style
import '../assets/style/panel.scss';
// import rest
import { useDispatch } from 'react-redux';
import { setLineWidth, setStrokeColour } from '../store';

export default function Setting() {
  const dispatch = useDispatch();
  return (
    <div className='settings'>
      <label htmlFor="width">Width</label>
      <input id='width' type="number" defaultValue={1} min={1} max={50} style={{ marginLeft: '5px' }} onChange={(e) => dispatch(setLineWidth(e.target.value))} />
      <label htmlFor="stroke">Stroke Colour</label>
      <input id='stroke' type="color" onChange={(e) => dispatch(setStrokeColour(e.target.value))} />
    </div>
  )
}
