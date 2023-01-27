import React, { useState, useEffect } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state =  {text: ''}
  }
  updatedText = (newText) => {
      this.setState(() => ({
        text: newText
      }));
  }
  render() {
      return (
          <div>
              <div>
                  <input type="text" placeholder="Your message here.." onChange={(e) => this.updatedText(e.target.value)} />
                  <p>the message is: {this.state.text}</p>
              </div>
          </div>
      );
  }
}

// function App() {
//   const [text, setText] = useState('');
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
//   const handleChange = (e) => setText(e.target.value);
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input placeholder="Введите текст" onChange={handleChange} />
//       </form>
//       <h2>{text === '' ? 'Ваш текст будет тут' : text}</h2>
//     </div>
//   );
// }

export default App;
