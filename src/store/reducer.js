import { createSlice } from "@reduxjs/toolkit";

const Action_Menus = createSlice({
    name : 'Menus'
     //명칭 통일
   ,initialState : {
     open : 'HOME'//보여지는 open
    ,opens : []//열려있는 창의 수
    ,menuList : []//메뉴 목록
    ,categorys : []//카테고리
   }
   ,reducers : {
        setMenus : (state,action) => {
            const {categorys,menuList} = action.payload;
            state.categorys = categorys;
            state.menuList = menuList;
        }
   }
 });

//값을 return 시키기 위한 reducer들을 등록
const Reducers = {
    Action_Menus
};

export default Reducers;
export {Action_Menus};
 