import { createContext } from 'react'
import { TasksProps } from '../App'

type Context = {
  tasks: TasksProps[]
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>
}
const TaskContext = createContext({} as Context)

export default TaskContext
