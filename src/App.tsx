import './App.css'
import { useState } from 'react'
import { ListForm } from './components/ListForm'
import taskContext from './context/TaskContext'

function App() {
  const [tasks, setTasks] = useState('Sem task')

  return (
    <>
      <header>
        <h1>To do List</h1>
      </header>
      <taskContext.Provider value={{ tasks, setTasks }}>
        {' '}
        <ListForm />
      </taskContext.Provider>

      <ul>
        <li>{tasks}</li>
      </ul>
    </>
  )
}

export default App
