import { Person, persons } from '../../../lib/persons'
import { NextRequest } from 'next/server'

export async function GET() {
  return Response.json(persons)
}

export async function POST(
  request: NextRequest
) {
  const person: Person = await request.json()
  if (!('name' in persons) || !('number' in persons)) {
    return new Response('Name and number must be present', { status: 403 })
  }
  const p = persons.find(per => per.name === person.name)
  if (p) {
    return new Response('person exists', { status: 403 })
  }
  persons.push(person)
  return new Response(null, { status: 201 })
}