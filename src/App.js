import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const student = ['Fardin', 'Loop', 'Salman', 'Eid', 'abid']
  return (
    <div className="App">
      <Counter></Counter>
      <IncreaseCounterValue></IncreaseCounterValue>
      <Comment></Comment>
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



function IncreaseCounterValue() {
  const [counterValue, setValue] = useState(200)
  const increase = () => setValue(counterValue + 1)
  return (
    <div>
      <h2>Counter :{counterValue} </h2>
      <button onClick={increase} >Increase Value </button>
    </div>
  )
}



//Use State

function Comment() {
  const [comment, setComment] = useState([])
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComment(data))

  }, [])
  return (
    <div>
      <h4>Name:</h4>

      <p>{comment.length}</p>
      {
        comment.map(allcomment => <li>{allcomment.name}</li>)
      }
    </div>
  )
}
export default App;
