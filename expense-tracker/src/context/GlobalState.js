import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
//Initial state
const initialState = {
    transactions: []
}

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
      transaction: state.transactions
    }}>
            {children}
        </ GlobalContext.Provider>
    );

}
