import { useState } from 'react'
import './App.css'

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const monthFormatter = new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' })
const dayFormatter = new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' })

function dateValue(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// @clause:GOOGLE-CAL:REQ-001 Render events in the visible month-grid calendar.
function App() {
  const [visibleMonth, setVisibleMonth] = useState(() => {
    const today = new Date()
    return new Date(today.getFullYear(), today.getMonth(), 1)
  })
  const [events, setEvents] = useState([])
  const [title, setTitle] = useState('')
  const [eventDate, setEventDate] = useState(() => dateValue(new Date()))

  const firstDay = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1)
  const gridStart = new Date(
    firstDay.getFullYear(),
    firstDay.getMonth(),
    firstDay.getDate() - firstDay.getDay(),
  )
  const days = Array.from({ length: 42 }, (_, index) => {
    const day = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + index)
    return { date: day, value: dateValue(day) }
  })

  // @clause:GOOGLE-CAL:REQ-002 Store title and date as a local date-only value.
  function addEvent(event) {
    event.preventDefault()
    const trimmedTitle = title.trim()
    if (!trimmedTitle || !eventDate) return

    setEvents((current) => [...current, { id: crypto.randomUUID(), title: trimmedTitle, date: eventDate }])
    setTitle('')
  }

  function changeMonth(offset) {
    setVisibleMonth((current) => new Date(current.getFullYear(), current.getMonth() + offset, 1))
  }

  // @clause:GOOGLE-CAL:REQ-003 Remove the event immediately without confirmation.
  function deleteEvent(id) {
    setEvents((current) => current.filter((item) => item.id !== id))
  }

  return (
    <main className="calendar-app">
      <header className="calendar-header">
        <div>
          <p className="eyebrow">YOUR TIME, WELL SPENT</p>
          <h1>Calendar</h1>
        </div>
        <div className="month-controls" aria-label="Calendar month controls">
          <button type="button" className="icon-button" aria-label="Previous month" onClick={() => changeMonth(-1)}>
            ‹
          </button>
          <h2 aria-live="polite">{monthFormatter.format(visibleMonth)}</h2>
          <button type="button" className="icon-button" aria-label="Next month" onClick={() => changeMonth(1)}>
            ›
          </button>
        </div>
      </header>

      <section className="calendar-layout" aria-label="Calendar and event form">
        <div className="calendar-card">
          <div className="weekdays" aria-hidden="true">
            {weekdays.map((weekday) => <span key={weekday}>{weekday}</span>)}
          </div>
          <div className="calendar-grid" role="grid" aria-label={monthFormatter.format(visibleMonth)}>
            {days.map(({ date, value }) => {
              const isCurrentMonth = date.getMonth() === visibleMonth.getMonth()
              const dayEvents = events.filter((event) => event.date === value)
              return (
                <div
                  className={`calendar-day${isCurrentMonth ? '' : ' outside-month'}`}
                  key={value}
                  role="gridcell"
                  aria-label={dayFormatter.format(date)}
                >
                  <span className="day-number">{date.getDate()}</span>
                  {dayEvents.map((event) => (
                    <div className="event-chip" key={event.id}>
                      <span>{event.title}</span>
                      <button
                        type="button"
                        aria-label={`Delete ${event.title}`}
                        onClick={() => deleteEvent(event.id)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )
            })}
          </div>
        </div>

        <aside className="event-panel">
          <div className="panel-heading">
            <span className="panel-icon" aria-hidden="true">✦</span>
            <div>
              <p className="eyebrow">MAKE A PLAN</p>
              <h2>Add event</h2>
            </div>
          </div>
          <form onSubmit={addEvent}>
            <label htmlFor="event-title">Event title</label>
            <input
              id="event-title"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="e.g. Coffee with Alex"
              required
            />
            <label htmlFor="event-date">Date</label>
            <input
              id="event-date"
              name="date"
              type="date"
              value={eventDate}
              onChange={(event) => setEventDate(event.target.value)}
              required
            />
            <button type="submit" className="add-button">Add to calendar <span aria-hidden="true">→</span></button>
          </form>
          <p className="panel-note">Your plans appear right on the calendar.</p>
        </aside>
      </section>
      <footer className="calendar-footer">
        <span><i aria-hidden="true" /> {events.length} {events.length === 1 ? 'event' : 'events'} this month</span>
        <span>Small moments make a full life.</span>
      </footer>
    </main>
  )
}

export default App
