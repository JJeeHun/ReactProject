import { configureStore } from "@reduxjs/toolkit";
import {Action_Menus} from './reducer';

/**
 * 글로벌 Property
 * menus : 메뉴리스트를 담고있다가 메인에 화면 출력용으로 사용 할 목적.
 * user_info : session의 유저 정보를 담고있는 용도.(미추가.)
 */
const Store = configureStore({
  reducer : {
      menus: Action_Menus.reducer
  }
});
  

/**
 * Export
 * @desc 상태와 Action을 같이 Export 처리함.
 */
export default Store;
export {Action_Menus};//Menu Reducer를 담고있는 Action