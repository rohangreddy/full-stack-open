import { Person, persons } from '../../../../lib/persons'
import type { NextRequest } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{id: string}>}
) {
  const { id } = await params
  const person = persons.find(p => p.id === id)
  if (person) {
    return Response.json(person)
  }
  return new Response(null, { status: 404 })
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{id: string}>}
) {
  const { id } = await params
  const index = persons.findIndex(p => p.id === id)
  if (index > -1) {
    persons.splice(index, 1)
    return new Response(null, { status: 204 })
  }
  return new Response(null, { status: 404 })
}