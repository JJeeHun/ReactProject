import {memo,useCallback} from 'react'
import Store,{Action_Menus} from '../../store/Store'
import Style from '../../css/tab/TabBtn.module.css'

const TabBtn = memo(
  ({index,title,on}) => {
    const ClassList = [Style.tabBtn];
    !on || ClassList.push(Style.on);

    const onBtnClick = useCallback(() => {
      Store.dispatch(Action_Menus.actions.setClose({MENU_IDXX:index}));
    })
    const onSpanClick = useCallback(() => {
      Store.dispatch(Action_Menus.actions.setOpen({MENU_IDXX:index}));
    })
    
    return (
      <article className={ClassList.join(' ')}>
        <span onClick={onSpanClick}>{title}</span>
        <button className={Style.closeBtn} onClick={ onBtnClick }>X</button>
      </article>
    )
  }
)

export default TabBtn;