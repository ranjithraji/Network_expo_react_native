import React from 'react';
import { reducer } from './StateManagement';
import Loading from '../src/Screens/Loading'

const initialState = {
  Auth: false,
  userType: null,
  isLoading: true,
  token: null,
  user: {},
  isLoading: false
};

export const GlobalContext = React.createContext({});

const Store = ({ children }) => {

  const [state, dispatch] = React.useReducer(reducer, initialState);

  // console.log(state, "globalstate")
  return (
    <>
      <GlobalContext.Provider value={{ State: state, StateDispatch: dispatch }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export default Store;