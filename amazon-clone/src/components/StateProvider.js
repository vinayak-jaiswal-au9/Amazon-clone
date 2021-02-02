import React, { createContext, useContext, useReducer } from "react";

// This is DataLayer
export const StateContext = createContext();

// Built a Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This is how we use it inside the Component
export const useStateValue = () => useContext(StateContext);
