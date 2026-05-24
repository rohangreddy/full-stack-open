// import ReactDOM from 'react-dom/client'

// import App from './App'

// let counter = 1

// const root = ReactDOM.createRoot(document.getElementById('root'))

// const refresh = () => {
//   root.render(
//     <App counter={counter} />
//   )
// }


// Manually re-render the page to see the counter increment
// refresh()
// counter += 1
// refresh()
// counter += 1
// refresh()

// Use set interval to programmatically re-render every second 
// setInterval(() => {
//   refresh()
//   counter += 1
// }, 1000)

import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)