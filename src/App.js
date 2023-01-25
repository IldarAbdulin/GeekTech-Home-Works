import React, { useState, useEffect } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  plus() {
    this.setState({
      count: this.state.count + 1 
    });
  }
  minus() {
    this.setState({
      count: this.state.count - 1 
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.plus()}>+</button>
        <button onClick={() => this.minus()}>-</button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}

// function App() {
//   const [visibleText, setVisibleText] = useState(true);
//   const showText = () => {
//     setVisibleText(!visibleText);
//   };
//   return (
//     <div>
//       <button onClick={showText}>
//         {visibleText ? 'Скрыть текст' : 'Показать текст'}
//       </button>
//       <h2>{visibleText && <h1>Hello world!</h1>}</h2>
//     </div>
//   );
// }

export default App;
