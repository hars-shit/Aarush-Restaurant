import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { persistStore } from 'redux-persist'
import store from './store/slice/main.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

let persistor=persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
<PersistGate persistor={persistor}>
    <App />
</PersistGate>
</Provider> 

)
