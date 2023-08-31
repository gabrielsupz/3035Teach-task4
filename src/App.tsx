import './App.css'
import { useState } from 'react'
import { ListForm } from './components/ListForm'
import taskContext from './context/TaskContext'
import { RemoveButton } from './components/RemoveButton'

export interface TasksProps {
  task: string
  finished: boolean
}

export function App() {
  const [tasks, setTasks] = useState([] as TasksProps[])

  const handleTaskCheckbox = (index: number) => {
    const updatedTasks = [...tasks]
    updatedTasks[index].finished = !updatedTasks[index].finished
    setTasks(updatedTasks)
  }

  const bringMyTasks = () => {
    return (
      <ul>
        {tasks.map((e, index) => {
          if (e.finished) {
            return (
              <li key={index}>
                <p className="finished">
                  {e.task} - <strong>FINALIZADA</strong>
                </p>
                <div className="buttonAndCheckbox">
                  <div className="content">
                    <label className="checkBox">
                      <input
                        id="ch1"
                        className="checkBox"
                        type="checkbox"
                        checked={e.finished}
                        onChange={() => handleTaskCheckbox(index)}
                      />
                      <div className="transition"></div>
                    </label>
                  </div>

                  <RemoveButton index={index} />
                </div>
              </li>
            )
          }
          return (
            <li key={index}>
              <p>{e.task}</p>
              <div className="buttonAndCheckbox">
                <div className="content">
                  <label className="checkBox">
                    <input
                      id="ch1"
                      className="checkBox"
                      type="checkbox"
                      checked={e.finished}
                      onChange={() => handleTaskCheckbox(index)}
                    />
                    <div className="transition"></div>
                  </label>
                </div>

                <RemoveButton index={index} />
              </div>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <>
      <header>
        <h1>To do List</h1>
      </header>
      <taskContext.Provider value={{ tasks, setTasks }}>
        {' '}
        <ListForm />
        <div className="tasksListed">
          {tasks.length === 0 ? (
            <li className="noTasks">Sem tarefas</li>
          ) : (
            bringMyTasks()
          )}
        </div>
      </taskContext.Provider>
    </>
  )
}
