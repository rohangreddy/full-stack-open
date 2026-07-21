import { Note, notes } from '../../lib/notes'
import { NextRequest } from 'next/server'

export async function GET() {
  return Response.json(notes)
}

export async function POST(
  request: NextRequest
) {
  const note: Note = await request.json()
  const existing = notes.find(oldNote => oldNote.id === note.id)
  if (existing) {
    return new Response(null, {status: 404})
  }
  notes.push(note)
  return new Response(null, {status: 201 })
}