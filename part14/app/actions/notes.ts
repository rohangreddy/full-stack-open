"use server"

import { redirect } from "next/navigation"
import { addNote } from "../services/notes"

// When next.js compiles tha pplication, it detects every function marked with
// "useServer" and generates a unique HTTP endpoint for each one
// Client side, action={createNote} prop does not embed server function in client bundle
// Instead, Next.js replaces the function reference with hidden identfier to the internal endpoin,
// When the user submits form, browser makes standard POST request to the endpoint

// On server side, Next.js receives the request, looks up correct Server Action by its identifier, 
// and calls it with the FormData object. Once the action completes and calls redirect, server
// sends back response to tell client to navigate to new URL. Browser never needs to know anything about
// createNote, notes array, etc as that stays entirely on server

export const createNote = async (formData: FormData) => {
  const content = formData.get("content") as string
  const important = formData.get("important") === "on"
  addNote(content, important)
  // In traditional apps, a redirect would involve post-redirect-get
  // (form submitted to server through HTTP POST, server responds with redirect)
  // Next.js: rather than full page re-direct + GET request, server responds with an internal
  // instruction telling next.js client-side router to navigate to /notes
  // router fetches only the new page content (react server componet payload for notes page)
  // and updates view without full page reload

  // Transition is faster and smoother since Next.js handles it as client-side navigation under the hood
  redirect("/notes")
}