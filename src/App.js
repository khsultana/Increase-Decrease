import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const student = ['Fardin', 'Loop', 'Salman', 'Eid', 'abid']
  return (
    <div className="App">
      <Counter></Counter>
      {/* {student.map(name => <Cenema>{student}</Cenema>)}
      <Cenema name={student[0]} nayok="Nabb" job="RES"></Cenema>
      <Cenema name="Bapparaz" job="Cheka"></Cenema>
      <Cenema name="Sultana" job="Private Service"></Cenema>
      <Cenema name="Sultana" job="Private Service"></Cenema>
      <Cenema name="Sultana" job="Private Service"></Cenema> */}

    </div>
  );
}
// function Cenema(props) {
//   console.log(props);
//   return (
//     <div className='Container'>
//       <h1>{props.name} {props.nayok}</h1>
//       <p>{props.job}</p>
//     </div>
//   );
// }


function Counter() {

  const [count, setCount] = useState(55)
  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount)
  }

  const deCrease = () => setCount(count - 1)
  return (
    <div className='Container'>
      <h3>Count:{count}</h3>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={deCrease}>Decrease</button>

    </div>
  )
}
export default App;
