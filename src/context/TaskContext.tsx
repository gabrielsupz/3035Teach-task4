import { createContext } from 'react'
type Context = {
  tasks: string
  setTasks: React.Dispatch<React.SetStateAction<string>>
}
const TaskContext = createContext({} as Context)

export default TaskContext
