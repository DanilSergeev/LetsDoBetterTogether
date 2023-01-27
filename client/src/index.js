import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RequesteStore from './store/requesteStore';
import UserStore from './store/userStore';



export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),  
        requests: new RequesteStore()
    }}>
        <App />
    </Context.Provider>
);
