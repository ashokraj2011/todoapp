import { expect, test } from '@playwright/test'

// @ac:GOOGLE-CAL:AC-001 The screenshot shows the month grid, event, and add/delete controls.
test('calendar displays a month grid and supports adding and deleting an event', async ({ page }) => {
  await page.clock.install({ time: new Date('2026-11-04T12:00:00Z') })
  await page.setViewportSize({ width: 1440, height: 1080 })
  await page.goto('/')

  await expect(page.getByRole('heading', { name: 'November 2026' })).toBeVisible()
  await expect(page.getByRole('grid', { name: 'November 2026' })).toBeVisible()

  await page.getByLabel('Event title').fill('Planning session')
  await page.getByLabel('Date').fill('2026-11-01')
  await page.getByRole('button', { name: 'Add to calendar' }).click()

  const event = page.getByText('Planning session')
  await expect(event).toBeVisible()
  await expect(page.getByText('1 event this month')).toBeVisible()
  await expect(page.getByRole('gridcell', { name: 'Nov 1' }).getByText('Planning session')).toBeVisible()

  await page.screenshot({ path: '.sflow/results/playwright/calendar-month-grid.png', fullPage: true })

  let confirmationRequested = false
  page.on('dialog', async (dialog) => {
    confirmationRequested = true
    await dialog.dismiss()
  })
  await page.getByRole('button', { name: 'Delete Planning session' }).click()
  await expect(event).toHaveCount(0)
  await expect(page.getByText('0 events this month')).toBeVisible()
  expect(confirmationRequested).toBe(false)
})
