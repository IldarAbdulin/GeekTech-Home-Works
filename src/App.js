import React from 'react';

const Button = ({onClick, children}) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}
function App() {
  const [count , setCounter] = React.useState(0)
  const handlePlus = () => {
    setCounter(count + 1)
  }
  const handleMinus = () => {
    setCounter(count - 1)
  }
  return (
    <div>
      <Button onClick={handlePlus}>Plus</Button>
      <span>{count}</span>
      <Button onClick={handleMinus}>Minus</Button>
    </div>
  )
}
export default App;
