import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// ReactDOM.render(<App/>, document.querySelector("#root"))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
)