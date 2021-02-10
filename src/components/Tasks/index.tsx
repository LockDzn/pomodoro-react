import React, { useState, useEffect } from 'react'

import { Container, Card, AddTask, ModalOverlay } from './styles'

type TaskProps = {
  name: string
  concluded: boolean
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [modalActivated, setModalActivated] = useState(false)
  const [taskName, setTaskName] = useState('')

  useEffect(() => {
    const localTasks = JSON.parse(
      localStorage.getItem('pomodoro:tasks') || '[]'
    )
    setTasks(localTasks)
  }, [])

  const handleAtiveModal = () => {
    if (modalActivated) {
      setModalActivated(false)
    } else {
      setModalActivated(true)
    }
  }

  const handleSubmitNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    setTasks([...tasks, { name: taskName, concluded: false }])
    localStorage.setItem(
      'pomodoro:tasks',
      JSON.stringify([...tasks, { name: taskName, concluded: false }])
    )

    handleAtiveModal()
    setTaskName('')
    e.preventDefault()
  }

  const handleChangeTaskCheckbox = (TaskIndex: number) => {
    const newTasks = tasks.map((task, index) => {
      if (index === TaskIndex) {
        if (task.concluded) {
          return { name: task.name, concluded: false }
        } else {
          return { name: task.name, concluded: true }
        }
      }
      return task
    })

    setTasks(newTasks)
    localStorage.setItem('pomodoro:tasks', JSON.stringify(newTasks))
  }

  const handleDeleteTask = (TaskIndex: number) => {
    const newTasks: TaskProps[] = []

    if (tasks.length != 0) {
      tasks.map((task, index) => {
        if (index != TaskIndex) {
          newTasks.push(task)
        }
      })
    }

    setTasks(newTasks)
    localStorage.setItem('pomodoro:tasks', JSON.stringify(newTasks))
  }

  return (
    <>
      <Container>
        <header>
          <h2>Tasks</h2>
          <h2>⋮</h2>
        </header>
        {tasks.map((task, index) => (
          <Card
            key={index}
            checked={task.concluded}
            htmlFor={`task_${index}_${task.name}`}
          >
            <input
              type="checkbox"
              onChange={() => handleChangeTaskCheckbox(index)}
              checked={task.concluded}
              name={`task_${index}_${task.name}`}
              id={`task_${index}_${task.name}`}
            />
            <label className="taskname" htmlFor={`task_${index}_${task.name}`}>
              {task.name}
            </label>
            <span title="Delete Task" onClick={() => handleDeleteTask(index)}>
              ✘
            </span>
          </Card>
        ))}
        <AddTask onClick={handleAtiveModal}>
          <p>✚ Add Task</p>
        </AddTask>
      </Container>

      <ModalOverlay activated={modalActivated}>
        <div className="modal">
          <h2>Add new task</h2>
          <form onSubmit={handleSubmitNewTask}>
            <div className="input-group">
              <label className="sr-only" htmlFor="name">
                Task Name
              </label>
              <input
                placeholder="What are you working on?"
                type="text"
                name="name"
                id="name"
                value={taskName}
                onChange={event => setTaskName(event.target.value)}
              />
            </div>
            <div className="input-group buttons">
              <a className="cancel" onClick={handleAtiveModal}>
                Cancel
              </a>
              <button className="save" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </ModalOverlay>
    </>
  )
}

export default Tasks
