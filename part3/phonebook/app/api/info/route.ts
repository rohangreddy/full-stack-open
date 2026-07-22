import { persons } from '../../../lib/persons'

export async function GET() {
  const length = persons.length
  const now = new Date()
  return new Response(
    `<p>Phonebook has info for ${length} people</p><p>${now}</p>`,
    { headers: { 'Content-Type': 'text/html' } }
  )
}