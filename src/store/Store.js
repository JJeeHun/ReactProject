import { configureStore } from "@reduxjs/toolkit";
import {Action_Menus} from './reducer';

const Store = configureStore({
    reducer : {
        menus: Action_Menus.reducer
    }
  });
  
export default Store;