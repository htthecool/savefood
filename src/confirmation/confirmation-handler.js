import globalState from '../globalState'
import { withGlobalState } from 'react-storefront/router'
import fetch from 'fetch'

export default async function confirmationHandler(params, request, response) {
  // Use jsonplaceholder.typicode.com to simulate a fetch to an upstream API
  const confirmation = await fetch('https://jsonplaceholder.typicode.com/posts', {
    body: {
      siteName: 'My Store',
      description: 'My Store proudly offers the best products at the lowest prices!'
    },
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())

  // return the confirmation data and the rest of the global state needed to render the app
  return withGlobalState(request, globalState, { confirmation })
}
