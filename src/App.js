import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';


function App() {

  const account = useSelector ((state)=>state.account)
  const dispatch = useDispatch()

  const {increase, decrease} = bindActionCreators(actionCreators, dispatch)
  

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={()=>increase(1)}>+</button>
      <button onClick={()=>decrease(1)}>-</button>
    </div>
  );
}

export default App;
