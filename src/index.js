import React from 'react'
import ReactDOM from 'react-dom'
import './createShadowRoot'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// Get the shadow root
const shadowRoot = document.getElementById('root').shadowRoot

// Create div element for react to render into
const reactRoot = document.createElement('div')
reactRoot.setAttribute('id', 'react-root')

// Append react root to shadow root
shadowRoot.appendChild(reactRoot)

ReactDOM.render(<App />, reactRoot)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
