import React, { useState, useEffect } from "react"

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { seconds: 0 }
//   }
//   tick() {
//     this.setState((state) => ({
//       seconds: state.seconds + 1
//     }))
//   }
//   componentDidMount() {
//     this.interval = setInterval(() => this.tick(), 1000)
//   }
//   componentWillUnmount() {
//     clearInterval(this.interval)
//   }
//   render() {
//     return <div>Seconds: {this.state.seconds}</div>
//   }
// }

function App() {
  const [seconds, setSeconds] = useState(0);
  let tick;
  useEffect(() => {
    tick = 
      setInterval(() => {
        setSeconds(seconds + 1)
      }, 1000) 
    return () => {
      clearInterval(tick)
    }
  }, [seconds]);
  return (
    <div>
      Секунды: {seconds}
    </div>
  );
}

export default App;
