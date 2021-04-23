import { useState } from 'react'

import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState([])

  const onClick = async () => {
    const response = await fetch('/api/users/')
    const users = await response.json()
    setUsers(users)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={onClick}>Get user</button>
        <ul>
          { users.map((user) => (
            <li key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
