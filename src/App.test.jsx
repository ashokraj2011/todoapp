// @vitest-environment jsdom

import { cleanup, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import App from './App.jsx'

afterEach(() => cleanup())

async function createItem(user, kind, title) {
  const trigger = kind === 'event' ? 'Add event' : 'Create'
  await user.click(screen.getByRole('button', { name: trigger }))

  const dialog = screen.getByRole('dialog')
  await user.selectOptions(within(dialog).getByLabelText('Type'), kind)
  await user.type(within(dialog).getByLabelText('Title'), title)
  await user.click(within(dialog).getByRole('button', { name: 'Create' }))
}

function getCalendar() {
  return screen.getByRole('region', { name: 'Calendar' })
}

describe('in-app calendar', () => {
  it('shows Todo tasks and events in month, week, and day views', async () => {
    const user = userEvent.setup()
    render(<App />)
    await createItem(user, 'task', 'Review roadmap')
    await createItem(user, 'event', 'Design check-in')

    const calendar = getCalendar()
    for (const view of ['Month', 'Week', 'Day']) {
      await user.click(screen.getByRole('button', { name: view }))
      expect(within(calendar).getByText('Review roadmap')).not.toBeNull()
      expect(within(calendar).getByText('Design check-in')).not.toBeNull()
    }
  })

  it('creates both a Todo task and a general event', async () => {
    const user = userEvent.setup()
    render(<App />)

    await createItem(user, 'task', 'Write project notes')
    await createItem(user, 'event', 'Planning session')

    const calendar = getCalendar()
    expect(within(calendar).getByText('Write project notes')).not.toBeNull()
    expect(within(calendar).getByText('Planning session')).not.toBeNull()
  })

  it('edits Todo tasks and events', async () => {
    const user = userEvent.setup()
    render(<App />)
    await createItem(user, 'task', 'Draft outline')
    await createItem(user, 'event', 'Team sync')
    const calendar = getCalendar()

    await user.click(within(calendar).getByRole('button', { name: 'Edit Draft outline' }))
    let dialog = screen.getByRole('dialog')
    await user.clear(within(dialog).getByLabelText('Title'))
    await user.type(within(dialog).getByLabelText('Title'), 'Publish outline')
    await user.click(within(dialog).getByRole('button', { name: 'Save changes' }))

    await user.click(within(calendar).getByRole('button', { name: 'Edit Team sync' }))
    dialog = screen.getByRole('dialog')
    await user.clear(within(dialog).getByLabelText('Title'))
    await user.type(within(dialog).getByLabelText('Title'), 'Team planning')
    await user.click(within(dialog).getByRole('button', { name: 'Save changes' }))

    expect(within(calendar).getByText('Publish outline')).not.toBeNull()
    expect(within(calendar).getByText('Team planning')).not.toBeNull()
    expect(within(calendar).queryByText('Draft outline')).toBeNull()
    expect(within(calendar).queryByText('Team sync')).toBeNull()
  })

  it('deletes Todo tasks and events', async () => {
    const user = userEvent.setup()
    render(<App />)
    await createItem(user, 'task', 'Archive notes')
    await createItem(user, 'event', 'Old appointment')
    const calendar = getCalendar()

    await user.click(within(calendar).getByRole('button', { name: 'Delete Archive notes' }))
    await user.click(within(calendar).getByRole('button', { name: 'Delete Old appointment' }))

    expect(within(calendar).queryByText('Archive notes')).toBeNull()
    expect(within(calendar).queryByText('Old appointment')).toBeNull()
  })
})
