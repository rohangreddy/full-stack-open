import { persons } from '../../../lib/persons'

export async function GET() {
  return Response.json(persons)
}