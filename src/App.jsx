import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  function addTodo(e) {
    e.preventDefault()
    if (!text.trim()) return
    setTodos((t) => [...t, { id: Date.now(), text: text.trim(), done: false }])
    setText('')
  }

  function toggle(id) {
    setTodos((t) => t.map((item) => (item.id === id ? { ...item, done: !item.done } : item)))
  }

  function remove(id) {
    setTodos((t) => t.filter((item) => item.id !== id))
  }

  return (
    <div className="App">
      <h1>Todo App</h1>

      <form onSubmit={addTodo} className="todo-form">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button type="submit">Add</button>
      </form>

      <ul className="todo-list">
        {todos.map((t) => (
          <li key={t.id} className={t.done ? 'done' : ''}>
            <label>
              <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
              <span>{t.text}</span>
            </label>
            <button className="remove" onClick={() => remove(t.id)} aria-label={`Remove ${t.text}`}>
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
