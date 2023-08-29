import TaskContext from '../../context/TaskContext'
import * as S from './style'
import { useContext, useState } from 'react'

export function ListForm() {
  const { setTasks } = useContext(TaskContext)
  const [inputValue, setInputValue] = useState('')

  const handleAddTask = () => {
    setTasks(inputValue)
    setInputValue('')
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
