import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';


function App() {

  const number = useSelector ((state)=>state.number)
  const dispatch = useDispatch()

  const {increase, decrease} = bindActionCreators(actionCreators, dispatch)
  

  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={()=>increase(1)}>+</button>
      <button onClick={()=>decrease(1)}>-</button>
    </div>
  );
}

export default App;
