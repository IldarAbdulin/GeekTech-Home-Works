import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

// function App() {
//   const [users, setUsers] = useState([]);
//   const [name, setName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const handleSubmit = (e) => e.preventDefault();
//   const addUser = () => {
//     if(name === '' || lastName === '') {
//       return alert('Запоните все поля')
//     }
//     const user = {
//       id: Math.random() * 1000000000,
//       name: name,
//       lastName: lastName,
//     };
//     setUsers([...users, user]);
//     setName('');
//     setLastName('');
//   };
//   return (
//     <div>
//       <form className='form' onSubmit={handleSubmit}>
//         <input
//           placeholder="Введите ваше имя"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           placeholder="Введите вашу фамилию"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <input
//           type={'submit'}
//           onClick={addUser}
//           value={`Добавить пользователя`}
//         />
//       </form>
//       <div className="user-list">
//         {users &&
//           users.map((user) => (
//             <div className="user" key={user.id}>
//               <p>Имя пользователя: {user.name}</p>
//               <p>Фамилия пользователя: {user.lastName}</p>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

function App() {
  const { register, handleSubmit } = useForm();
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const addUser = () => {
    if (name === '' || lastName === '') {
      return alert('Запоните все поля');
    }
    const user = {
      id: Math.random() * 1000000000,
      name: name,
      lastName: lastName,
    };
    setUsers([...users, user]);
    setName('');
    setLastName('');
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit()}>
        <input
          {...register('firstName')}
          placeholder="Имя"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          {...register('lastName')}
          placeholder="Фамилия"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <input
          type="submit"
          value={`Добавить пользователя`}
          onClick={addUser}
        />
      </form>
      <div className="user-list">
        {users &&
          users.map((user) => (
            <div className="user" key={user.id}>
              <p>Имя пользователя: {user.name}</p>
              <p>Фамилия пользователя: {user.lastName}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
