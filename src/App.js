import { Provider } from 'react-redux';
import { store } from './redux/store'
import Layout from './components/Layout'
import React  from 'react';


export const App = () => {
  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  )
};