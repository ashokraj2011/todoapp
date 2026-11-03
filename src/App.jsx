import { useMemo, useState } from 'react'
import './App.css'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const VIEWS = ['Month', 'Week', 'Day']
const today = new Date()

function toDateKey(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function fromDateKey(value) {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function sameDay(left, right) {
  return toDateKey(left) === toDateKey(right)
}

function startOfWeek(date) {
  const start = new Date(date)
  start.setDate(date.getDate() - date.getDay())
  return start
}

function makeCalendarDays(date, view) {
  if (view === 'Day') return [new Date(date)]
  if (view === 'Week') {
    const start = startOfWeek(date)
    return Array.from({ length: 7 }, (_, index) => {
      const day = new Date(start)
      day.setDate(start.getDate() + index)
      return day
    })
  }

  const first = new Date(date.getFullYear(), date.getMonth(), 1)
  const start = startOfWeek(first)
  return Array.from({ length: 42 }, (_, index) => {
    const day = new Date(start)
    day.setDate(start.getDate() + index)
    return day
  })
}

function formatMonth(date) {
  return new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(date)
}

function formatLongDate(date) {
  return new Intl.DateTimeFormat('en', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date)
}

function App() {
  const [items, setItems] = useState([])
  const [view, setView] = useState('Month')
  const [selectedDate, setSelectedDate] = useState(() => new Date(today))
  const [editor, setEditor] = useState(null)
  const [title, setTitle] = useState('')
  const [date, setDate] = useState(toDateKey(today))
  const [kind, setKind] = useState('task')

  // @clause:TEST-101:REQ-001 Render both item types over the active month, week, or day range.
  const calendarDays = useMemo(() => makeCalendarDays(selectedDate, view), [selectedDate, view])
  const visibleRangeStart = calendarDays[0]
  const visibleRangeEnd = calendarDays[calendarDays.length - 1]
  const heading =
    view === 'Day'
      ? formatLongDate(selectedDate)
      : view === 'Week'
        ? `${new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(visibleRangeStart)} – ${new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(visibleRangeEnd)}`
        : formatMonth(selectedDate)

  function openNewItem(initialKind = 'task') {
    setEditor({ id: null })
    setTitle('')
    setDate(toDateKey(selectedDate))
    setKind(initialKind)
  }

  function openEditItem(item) {
    setEditor({ id: item.id })
    setTitle(item.title)
    setDate(item.date)
    setKind(item.kind)
  }

  // @clause:TEST-101:REQ-002 Create Todo tasks and general events from the calendar.
  // @clause:TEST-101:REQ-003 Update either item type and its calendar date.
  function saveItem(event) {
    event.preventDefault()
    const cleanTitle = title.trim()
    if (!cleanTitle || !date) return

    if (editor.id === null) {
      setItems((current) => [
        ...current,
        { id: crypto.randomUUID(), title: cleanTitle, date, kind, completed: false },
      ])
    } else {
      setItems((current) =>
        current.map((item) =>
          item.id === editor.id ? { ...item, title: cleanTitle, date, kind } : item,
        ),
      )
    }
    setEditor(null)
  }

  function movePeriod(amount) {
    setSelectedDate((current) => {
      const next = new Date(current)
      if (view === 'Month') {
        next.setDate(1)
        next.setMonth(next.getMonth() + amount)
      } else {
        next.setDate(next.getDate() + amount * (view === 'Week' ? 7 : 1))
      }
      return next
    })
  }

  function changeView(nextView) {
    setView(nextView)
  }

  function toggleCompleted(id) {
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)),
    )
  }

  // @clause:TEST-101:REQ-004 Remove either item type from the calendar.
  function removeItem(id) {
    setItems((current) => current.filter((item) => item.id !== id))
  }

  const selectedItems = items.filter((item) => sameDay(fromDateKey(item.date), selectedDate))

  return (
    <main className="calendar-app">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Daylight Calendar home">
          <span className="brand-mark" aria-hidden="true">✦</span>
          <span>daylight</span>
        </a>
        <div className="topbar-actions">
          <button className="today-button" onClick={() => setSelectedDate(new Date(today))}>
            Today
          </button>
          <div className="view-switcher" aria-label="Calendar view">
            {VIEWS.map((option) => (
              <button
                key={option}
                aria-pressed={view === option}
                className={view === option ? 'view-option active' : 'view-option'}
                onClick={() => changeView(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button className="profile-button" aria-label="Account">A</button>
        </div>
      </header>

      <div className="workspace">
        <aside className="sidebar">
          <button className="create-button" onClick={() => openNewItem()}>
            <span aria-hidden="true">＋</span> Create
          </button>

          <section className="mini-calendar" aria-label="Mini calendar">
            <div className="mini-calendar-heading">
              <strong>{formatMonth(selectedDate)}</strong>
              <div>
                <button aria-label="Previous month" onClick={() => movePeriod(-1)}>‹</button>
                <button aria-label="Next month" onClick={() => movePeriod(1)}>›</button>
              </div>
            </div>
            <div className="mini-grid mini-weekdays">
              {WEEKDAYS.map((day) => <span key={day}>{day[0]}</span>)}
            </div>
            <div className="mini-grid">
              {makeCalendarDays(selectedDate, 'Month').map((day) => (
                <button
                  key={toDateKey(day)}
                  aria-label={formatLongDate(day)}
                  aria-pressed={sameDay(day, selectedDate)}
                  className={`${day.getMonth() === selectedDate.getMonth() ? '' : 'outside-month'} ${sameDay(day, selectedDate) ? 'selected' : ''}`}
                  onClick={() => setSelectedDate(day)}
                >
                  {day.getDate()}
                </button>
              ))}
            </div>
          </section>

          <section className="sidebar-section">
            <h2>My calendars</h2>
            <p><span className="legend-dot task-dot" /> Tasks</p>
            <p><span className="legend-dot event-dot" /> Events</p>
          </section>

          <section className="sidebar-section selected-day">
            <h2>{formatLongDate(selectedDate)}</h2>
            {selectedItems.length === 0 ? (
              <p className="quiet-text">Nothing planned yet</p>
            ) : (
              selectedItems.map((item) => (
                <div className={`agenda-item ${item.kind}`} key={item.id}>
                  <span className="legend-dot" />
                  <span>{item.title}</span>
                </div>
              ))
            )}
          </section>
        </aside>

        <section className="calendar-panel" aria-label="Calendar">
          <div className="calendar-heading">
            <div className="period-navigation">
              <button aria-label="Previous period" onClick={() => movePeriod(-1)}>‹</button>
              <button aria-label="Next period" onClick={() => movePeriod(1)}>›</button>
              <h1>{heading}</h1>
            </div>
            <button className="add-event-button" onClick={() => openNewItem('event')}>
              <span aria-hidden="true">＋</span> Add event
            </button>
          </div>

          <div className={`calendar-grid ${view.toLowerCase()}-view`}>
            {view !== 'Day' && WEEKDAYS.map((day) => (
              <div className="weekday-heading" key={day}>{day}</div>
            ))}
            {calendarDays.map((day) => {
              const dayItems = items.filter((item) => sameDay(fromDateKey(item.date), day))
              return (
                <section
                  className={`day-cell ${day.getMonth() === selectedDate.getMonth() ? '' : 'outside-month'} ${sameDay(day, today) ? 'today-cell' : ''} ${sameDay(day, selectedDate) ? 'selected-cell' : ''}`}
                  key={toDateKey(day)}
                  aria-label={formatLongDate(day)}
                  onClick={() => setSelectedDate(day)}
                >
                  <button
                    className="day-number"
                    aria-label={`Select ${formatLongDate(day)}`}
                    onClick={() => setSelectedDate(day)}
                  >
                    {view === 'Day' ? formatLongDate(day) : day.getDate()}
                  </button>
                  <div className="day-items">
                    {dayItems.map((item) => (
                      <article
                        key={item.id}
                        className={`calendar-item ${item.kind} ${item.completed ? 'completed' : ''}`}
                        onClick={(event) => event.stopPropagation()}
                      >
                        {item.kind === 'task' && (
                          <input
                            type="checkbox"
                            aria-label={`Mark ${item.title} complete`}
                            checked={item.completed}
                            onChange={() => toggleCompleted(item.id)}
                          />
                        )}
                        <span className="item-title">{item.title}</span>
                        <div className="item-actions">
                          <button aria-label={`Edit ${item.title}`} onClick={() => openEditItem(item)}>Edit</button>
                          <button
                            aria-label={`Delete ${item.title}`}
                            onClick={() => removeItem(item.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </section>
      </div>

      {editor && (
        <div className="dialog-backdrop">
          <section className="item-dialog" role="dialog" aria-modal="true" aria-labelledby="editor-heading">
            <div className="dialog-heading">
              <h2 id="editor-heading">{editor.id === null ? 'Create calendar item' : 'Edit calendar item'}</h2>
              <button aria-label="Close" onClick={() => setEditor(null)}>×</button>
            </div>
            <form onSubmit={saveItem}>
              <label>
                Type
                <select value={kind} onChange={(event) => setKind(event.target.value)}>
                  <option value="task">Todo task</option>
                  <option value="event">Event</option>
                </select>
              </label>
              <label>
                Title
                <input
                  autoFocus
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder={kind === 'task' ? 'Add a task' : 'Add an event'}
                  required
                />
              </label>
              <label>
                Date
                <input type="date" value={date} onChange={(event) => setDate(event.target.value)} required />
              </label>
              <div className="dialog-actions">
                <button type="button" className="cancel-button" onClick={() => setEditor(null)}>Cancel</button>
                <button type="submit" className="save-button">{editor.id === null ? 'Create' : 'Save changes'}</button>
              </div>
            </form>
          </section>
        </div>
      )}
    </main>
  )
}

export default App
