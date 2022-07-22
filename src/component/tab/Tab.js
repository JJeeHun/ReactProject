import {memo,useRef} from 'react';
import TabBtn from './TabBtn';
import Style from '../../css/tab/Tab.module.css';


const ScrollLeft = ({current},{nativeEvent}) => {
  current.scrollLeft = (-nativeEvent.wheelDelta) + current.scrollLeft;
}

/**
 * @param data{Array} = [{}] ex) 오픈할 데이터 리스트
 * @param data_id_column{string} ex) 컬럼에서 유니크한 id값
 * @param data_title_column{string} ex) tab버튼명
 */
const Tab = memo(
  ({data,data_id_column,data_title_column,TabViewsFn,openId}) => {

    const targetTabs = useRef();
    const tabBtns = [];
    const viewComp = [];
    const viewClasss = [Style.view];

    data.forEach( (item,i) => {
      const openID = openId;
      const ID = item[data_id_column];
      const RESULT = TabViewsFn(ID);//컴포넌트를 반환
      tabBtns.push( <TabBtn key={ID} index={ID} title={item[data_title_column]} on={ID === openID}/> );
      
      if(RESULT) {
        !(ID === openID) || viewClasss.push(Style.on)
        viewComp.push(<article className={viewClasss.join(' ')} key={ID}> {RESULT} </article>);  
      }
    });

    /**
     * close function에 index와 menu id를 넘겨줌으로 menu 리스트의 state를 조작해서 reRendering 처리
     */
    return (
      <>
        <section ref={targetTabs} className={Style.tabs} onWheel={ (e) => {ScrollLeft(targetTabs,e)} } >
          {tabBtns}
          { (targetTabs.current ? targetTabs.current.scrollLeft = (10000+targetTabs.current.scrollLeft) : '') && null }
        </section>

        <section className={Style.tabViews}>
          {/* 여러개의 탭 화면이 존재 할 수 있으므로 tab의 view당 포개서(position: absolute;) 각각에 맞는 화면을 출력 */}
          {viewComp}
        </section>
      </>
    )
  }
)



export default Tab;