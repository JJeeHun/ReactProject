import {useState} from 'react'
import { Provider } from 'react-redux'
import Store from './store/Store'
import Header from './component/Header'
import Main from './component/Main'
import './App.css';

const App= () => {  
  
  return (
    <Provider store={Store}>
      <div className='container'>
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
