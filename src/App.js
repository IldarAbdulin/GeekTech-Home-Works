import React, { useState, useEffect } from "react"

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()} PM.</h2>
//       </div>
//     );
//   }
// }

function App() {
  const [date, setDate] = useState(new Date())
  const tick = () => {
    setDate(new Date())
  }
  useEffect(() => {
    const timerId = setInterval(() => {
      tick()
    }, 1000)
    return () => {
      clearInterval(timerId)
    }
  }, [date])
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()} PM.</h2>
    </div>
  )
}

export default App;
