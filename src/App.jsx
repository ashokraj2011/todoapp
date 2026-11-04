import { useMemo, useState } from 'react'
import './App.css'

const DAY_MS = 24 * 60 * 60 * 1000
const pad = (value) => String(value).padStart(2, '0')
const toDateKey = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
const startOfWeek = (date) => {
  const result = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  result.setDate(result.getDate() - result.getDay())
  return result
}
const formatLongDate = (date) =>
  new Intl.DateTimeFormat('en', { weekday: 'long', month: 'long', day: 'numeric' }).format(date)

// @clause:RAJ-CAL:REQ-001 Keep the three period choices bound to the calendar grid.
function App() {
  const [view, setView] = useState('Month')
  const [date, setDate] = useState(() => new Date())
  const [events, setEvents] = useState([])
  const [dialog, setDialog] = useState(null)
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('09:00')

  const days = useMemo(() => {
    if (view === 'Day') return [new Date(date.getFullYear(), date.getMonth(), date.getDate())]
    if (view === 'Week') {
      const first = startOfWeek(date)
      return Array.from({ length: 7 }, (_, index) => new Date(first.getTime() + index * DAY_MS))
    }
    const first = new Date(date.getFullYear(), date.getMonth(), 1)
    const gridStart = startOfWeek(first)
    return Array.from({ length: 42 }, (_, index) => new Date(gridStart.getTime() + index * DAY_MS))
  }, [date, view])

  const heading = view === 'Day'
    ? formatLongDate(date)
    : new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(date)
  const todayKey = toDateKey(new Date())

  // @clause:RAJ-CAL:REQ-002 Move the displayed period and preserve safe month boundaries.
  function navigate(direction) {
    setDate((current) => {
      const next = new Date(current.getFullYear(), current.getMonth(), current.getDate())
      if (view === 'Month') next.setMonth(next.getMonth() + direction, 1)
      else next.setDate(next.getDate() + direction * (view === 'Week' ? 7 : 1))
      return next
    })
  }

  // @clause:RAJ-CAL:REQ-003 Events are created for the selected calendar date.
  function openNewEvent(day) {
    setTitle('')
    setTime('09:00')
    setDialog({ date: toDateKey(day), eventId: null })
  }

  // @clause:RAJ-CAL:REQ-004 Stable event IDs keep edits scoped to one event.
  function openEditEvent(event) {
    setTitle(event.title)
    setTime(event.time)
    setDialog({ date: event.date, eventId: event.id })
  }

  function saveEvent(event) {
    event.preventDefault()
    const cleanTitle = title.trim()
    if (!cleanTitle) return
    if (dialog.eventId) {
      setEvents((current) => current.map((item) =>
        item.id === dialog.eventId ? { ...item, title: cleanTitle, time, date: dialog.date } : item,
      ))
    } else {
      setEvents((current) => [...current, {
        id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`,
        date: dialog.date,
        title: cleanTitle,
        time,
      }])
    }
    setDialog(null)
  }

  // @clause:RAJ-CAL:REQ-005 Deletion removes only the selected event.
  function deleteEvent(id) {
    setEvents((current) => current.filter((event) => event.id !== id))
    setDialog(null)
  }

  const monthNames = new Intl.DateTimeFormat('en', { month: 'long' })
  const weekdayNames = Array.from({ length: 7 }, (_, index) =>
    new Intl.DateTimeFormat('en', { weekday: 'short' }).format(new Date(2024, 0, index + 7)),
  )

  return (
    <main className="calendar-app">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Daymark calendar home">
          <span className="brand-mark" aria-hidden="true">d</span>
          <span>daymark</span>
        </a>
        <div className="toolbar">
          <button className="today-button" onClick={() => setDate(new Date())}>Today</button>
          <div className="stepper" aria-label="Change period">
            <button aria-label="Previous period" onClick={() => navigate(-1)}>‹</button>
            <button aria-label="Next period" onClick={() => navigate(1)}>›</button>
          </div>
          <h1 aria-live="polite">{heading}</h1>
          <div className="view-switch" aria-label="Calendar view">
            {['Month', 'Week', 'Day'].map((option) => (
              <button
                key={option}
                aria-pressed={view === option}
                className={view === option ? 'selected' : ''}
                onClick={() => setView(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button className="new-event-button" onClick={() => openNewEvent(date)}>＋ <span>New event</span></button>
        </div>
      </header>

      <section className={`calendar-panel ${view.toLowerCase()}-view`} aria-label={`${view} calendar`}>
        {view === 'Month' && (
          <div className="month-label">{monthNames.format(date)}</div>
        )}
        <div className="weekday-row" aria-hidden="true">
          {(view === 'Day' ? [weekdayNames[date.getDay()]] : weekdayNames).map((name, index) => (
            <div key={`${name}-${index}`}>{name}</div>
          ))}
        </div>
        <div className="calendar-grid">
          {days.map((day) => {
            const key = toDateKey(day)
            const dayEvents = events.filter((event) => event.date === key).sort((a, b) => a.time.localeCompare(b.time))
            return (
              <section
                key={key}
                className={`day-cell ${view === 'Month' && day.getMonth() !== date.getMonth() ? 'outside-month' : ''} ${key === todayKey ? 'is-today' : ''}`}
                aria-label={formatLongDate(day)}
              >
                <button className="day-number" onClick={() => openNewEvent(day)} aria-label={`Add event on ${formatLongDate(day)}`}>
                  {view === 'Month' ? day.getDate() : formatLongDate(day)}
                </button>
                <div className="day-events">
                  {dayEvents.map((event) => (
                    <button className="event-chip" key={event.id} onClick={() => openEditEvent(event)}>
                      {view !== 'Month' && <time>{event.time}</time>}
                      <span>{event.title}</span>
                    </button>
                  ))}
                </div>
                <button className="add-day-event" onClick={() => openNewEvent(day)} aria-label={`Add event on ${formatLongDate(day)}`}>＋</button>
              </section>
            )
          })}
        </div>
      </section>
      <footer className="calendar-footer">
        <span><i className="status-dot" /> Your calendar, your rhythm</span>
        <span>{events.length} {events.length === 1 ? 'event' : 'events'} · saved for this session</span>
      </footer>

      {dialog && (
        <div className="dialog-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setDialog(null)
        }}>
          <section className="event-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
            <div className="dialog-heading">
              <div>
                <p>{dialog.eventId ? 'UPDATE YOUR PLANS' : 'MAKE A LITTLE SPACE'}</p>
                <h2 id="dialog-title">{dialog.eventId ? 'Edit event' : 'New event'}</h2>
              </div>
              <button className="close-dialog" aria-label="Close" onClick={() => setDialog(null)}>×</button>
            </div>
            <form onSubmit={saveEvent}>
              <label htmlFor="event-title">Event name</label>
              <input id="event-title" autoFocus value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Give it a name" required />
              <label htmlFor="event-date">Date</label>
              <input id="event-date" type="date" value={dialog.date} onChange={(event) => setDialog((current) => ({ ...current, date: event.target.value }))} required />
              <label htmlFor="event-time">Starts at</label>
              <input id="event-time" type="time" value={time} onChange={(event) => setTime(event.target.value)} required />
              <div className="dialog-actions">
                {dialog.eventId && (
                  <button type="button" className="delete-event" onClick={() => deleteEvent(dialog.eventId)}>Delete</button>
                )}
                <button type="button" className="cancel-event" onClick={() => setDialog(null)}>Cancel</button>
                <button type="submit" className="save-event">{dialog.eventId ? 'Save changes' : 'Add event'}</button>
              </div>
            </form>
          </section>
        </div>
      )}
    </main>
  )
}

export default App
