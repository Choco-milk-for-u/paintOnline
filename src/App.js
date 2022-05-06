import Panel from './components/Panel';
import Setting from './components/Setting';
import Canvas from './components/Canvas';
// redux
import { Provider } from 'react-redux';
import { store } from './store/reducers';
// stlye
import './assets/style/global.scss';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Panel />
        <Setting />
        <Canvas />
      </Provider>
    </div>
  );
}

export default App;
