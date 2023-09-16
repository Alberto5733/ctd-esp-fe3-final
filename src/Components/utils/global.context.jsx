import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  dentists: [], 
  favorites: [], 
};

const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter((dentist) => dentist.id !== action.payload.id),
      };
    case 'SET_DENTISTS':
      return {
        ...state,
        dentists: action.payload,
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
