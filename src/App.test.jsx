import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'

describe('calendar experience', () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['Date'] })
    vi.setSystemTime(new Date(2026, 9, 15, 12))
  })

  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  async function renderCalendar() {
    const user = userEvent.setup()
    render(<App />)
    return user
  }

  it('switches between month, week, and day periods', async () => {
    const user = await renderCalendar()
    expect(screen.getByRole('region', { name: 'Month calendar' })).not.toBeNull()

    await user.click(screen.getByRole('button', { name: 'Week' }))
    expect(screen.getByRole('region', { name: 'Week calendar' })).not.toBeNull()
    expect(screen.getAllByRole('region')).toHaveLength(8)

    await user.click(screen.getByRole('button', { name: 'Day' }))
    expect(screen.getByRole('region', { name: 'Day calendar' })).not.toBeNull()
    expect(screen.getByRole('region', { name: 'Thursday, October 15' })).not.toBeNull()
  })

  it('navigates periods and returns to today', async () => {
    const user = await renderCalendar()
    expect(screen.getByRole('heading', { name: 'October 2026' })).not.toBeNull()

    await user.click(screen.getByRole('button', { name: 'Previous period' }))
    expect(screen.getByRole('heading', { name: 'September 2026' })).not.toBeNull()
    await user.click(screen.getByRole('button', { name: 'Today' }))
    expect(screen.getByRole('heading', { name: 'October 2026' })).not.toBeNull()
  })

  it('creates an event on its selected date', async () => {
    const user = await renderCalendar()
    await user.click(screen.getByRole('button', { name: /New event/ }))
    await user.type(screen.getByLabelText('Event name'), 'Design review')
    await user.click(screen.getByRole('button', { name: 'Add event' }))

    const today = screen.getByRole('region', { name: 'Thursday, October 15' })
    expect(within(today).getByRole('button', { name: 'Design review' })).not.toBeNull()
    expect(screen.getByText('1 event · saved for this session')).not.toBeNull()
  })

  it('edits an event without changing a different event', async () => {
    const user = await renderCalendar()
    await user.click(screen.getByRole('button', { name: /New event/ }))
    await user.type(screen.getByLabelText('Event name'), 'Planning')
    await user.click(screen.getByRole('button', { name: 'Add event' }))
    await user.click(screen.getAllByRole('button', { name: 'Add event on Friday, October 16' })[0])
    await user.type(screen.getByLabelText('Event name'), 'Review')
    await user.click(screen.getByRole('button', { name: 'Add event' }))

    await user.click(screen.getByRole('button', { name: 'Planning' }))
    await user.clear(screen.getByLabelText('Event name'))
    await user.type(screen.getByLabelText('Event name'), 'Planning updated')
    await user.click(screen.getByRole('button', { name: 'Save changes' }))

    expect(screen.getByRole('button', { name: 'Planning updated' })).not.toBeNull()
    expect(screen.getByRole('button', { name: 'Review' })).not.toBeNull()
  })

  it('deletes only the selected event and retains the empty calendar', async () => {
    const user = await renderCalendar()
    await user.click(screen.getByRole('button', { name: /New event/ }))
    await user.type(screen.getByLabelText('Event name'), 'Remove this')
    await user.click(screen.getByRole('button', { name: 'Add event' }))
    await user.click(screen.getByRole('button', { name: 'Remove this' }))
    await user.click(screen.getByRole('button', { name: 'Delete' }))

    expect(screen.queryByRole('button', { name: 'Remove this' })).toBeNull()
    expect(screen.getByRole('region', { name: 'Thursday, October 15' })).not.toBeNull()
    expect(screen.getByText('0 events · saved for this session')).not.toBeNull()
  })

  // @ac:RAJ-CAL:AC-001
  it('renders a complete calendar view ready for the separate visual review', async () => {
    await renderCalendar()
    expect(screen.getByRole('region', { name: 'Month calendar' })).not.toBeNull()
    expect(screen.getByRole('link', { name: 'Daymark calendar home' })).not.toBeNull()
    expect(screen.getByText('Your calendar, your rhythm')).not.toBeNull()
  })
})
