import TaskContext from '../../context/TaskContext'
import * as S from './style'
import { useContext, useState } from 'react'
import { TasksProps } from '../../App'

export function ListForm() {
  const { tasks, setTasks } = useContext(TaskContext)
  const [inputValue, setInputValue] = useState('')

  const handleAddTask = () => {
    const newTask: TasksProps = {
      task: inputValue,
      finished: false
    }

    const updatedTasks = [...tasks, newTask]
    setTasks(updatedTasks)
    setInputValue('')

    console.log(updatedTasks)
  }

  return (
    <S.StyledFormList>
      <h2>Adicionar Tarefa</h2>
      <label htmlFor="">
        Afazer:
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </label>
      <button onClick={handleAddTask}>Adicionar</button>
    </S.StyledFormList>
  )
}
