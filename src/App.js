import {useState} from 'react'
import { Provider } from 'react-redux'
import Store from './store/Store'
import Header from './component/Header'
import './App.css';

const App= () => {  
  
  return (
    <Provider store={Store}>
      <div className='container'>
        <Header />
        <main className='mainContainer'>
          main
        </main>
      </div>
    </Provider>
  );
}

export default App;
