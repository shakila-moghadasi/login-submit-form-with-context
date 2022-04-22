import './App.css';
import Tabs from './Tabs';
import { name , handleLogOut } from './Hoc';

function App({name, handleLogOut}) {
  return (
    <div className="App">
      <Tabs/>
      <h1>سلام {name}</h1>
      <button onClick={handleLogOut}>خروج از حساب</button>
    </div>
  );
}

export default App;
