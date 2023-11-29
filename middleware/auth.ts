// middleware/auth.ts
import { defineNuxtRouteMiddleware, navigateTo } from '#app'

export default defineNuxtRouteMiddleware(async ({ app }) => {
  try {
    const response = await fetch('https://your-backend-api.com/valid', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
       
      })
    })

    if (!response.ok) {
      return navigateTo('/login')
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    console.log(data.message)
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error)
    return navigateTo('/login') // Redirect to the login page
  }

  if (!token) {
    return navigateTo('/login')
  }
})
