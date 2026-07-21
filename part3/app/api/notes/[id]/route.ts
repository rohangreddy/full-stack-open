import type { NextRequest } from 'next/server'
import { Note, notes } from '../../../lib/notes'


export async function GET(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }>}
) {
  const { id } = await params
  const note = notes.find(note => note.id === id)
  if (note) {
    return Response.json(note)
  }
  return new Response(null, { status: 404 })
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string}>}
) {
  const { id } = await params
  const index = notes.findIndex(note => note.id === id)
  if (index > -1) {
    notes.splice(index, 1)
    return new Response(null, { status: 204 })
  }
  return new Response(null, { status: 404 })
}