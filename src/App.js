import axios from 'axios';
import React from 'react';

//1 example
function App() {
  const [date, setDate] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(({ data }) => setDate(data));
  }, []);
  return (
    <>
      {!date.length ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1 style={{color:'red'}}>POSTS:</h1>
          {date.map((item) => (
            <div key={item.id}>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

//2 example
// function App() {
//   const [date, setDate] = React.useState(new Date())
//   const tick = () => {
//     setDate(new Date())
//   }
//   React.useEffect(() => {
//     const timerId = setInterval(() => {
//       tick()
//     }, 1000)
//     return () => {
//       clearInterval(timerId)
//     }
//   }, [date])
//   return (
//     <div>
//       <h2>Сейчас: {date.toLocaleTimeString()}</h2>
//     </div>
//   )
// }

export default App;
