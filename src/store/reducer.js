import { createSlice } from "@reduxjs/toolkit";

/**
 * 글로벌에 담는 Actions
 */
const Action_Menus = createSlice({
  name : 'Menus'
  //init data -> 명칭 통일
  ,initialState : {
     open : 'HOME'//보여지는 open
    ,opens : []//열려있는 창의 수
    ,menuList : []//메뉴 목록
    ,categorys : []//카테고리
    ,max : 10 //tab의 max갯수 랜더링 문제
  }
  ,reducers : {
    setMenus : (state,action) => {
      const {categorys,menuList} = action.payload;
      state.categorys = categorys;
      state.menuList = menuList;
    }

    ,setOpen : (state,action) => {
      const {MENU_IDXX} = action.payload;
      const {opens, max, open} = state;
      const isOpen = opens.some((item) => item.MENU_IDXX === MENU_IDXX);
      
      if(isOpen || max !== opens.length) state.open = MENU_IDXX;
      if(max > opens.length) {
        if(!isOpen) opens.push(action.payload);
      };
    }

    ,setClose : (state,action) => {
      const {MENU_IDXX} = action.payload;
      const {opens,open} = state;
      let index = -1;
      const newData = opens.filter((item,i) => {
                          if(MENU_IDXX === open) { index = (i-1); }
                          if(item.MENU_IDXX !== MENU_IDXX ) { return item; }
                        });
      if(index > -1) {
        state.open = opens[index].MENU_IDXX;
      }

      if(newData.length !== opens.length) {
        state.opens = newData;
      }
    }
  }
 });





/**
 * 한번에 엑션들을 담아서 보낼 Actions
 */
const Reducers = {
  Action_Menus
};

export default Reducers;
export {Action_Menus};
 