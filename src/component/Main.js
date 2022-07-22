import { useSelector } from 'react-redux';
import Tab from './tab/Tab'
import Style from '../css/Main.module.css';
import ViewTest00 from '../component/view/viewTest00'

const tt = (id) => {
  console.log(id)
  if(id === 'BMF') {
    return <><ViewTest00 /><ViewTest00 /><ViewTest00 /><ViewTest00 /><ViewTest00 /></>
  }
  if(id === 'BMFA') {
    return <><ViewTest00 /><ViewTest00 /><ViewTest00 /><ViewTest00 /></>
  }
  if(id === 'BMFA0010') {
    return <><ViewTest00 /><ViewTest00 /><ViewTest00 /></>
  }
  if(id === 'BMFA0020') {
    return <><ViewTest00 /><ViewTest00 /></>
  }
}
const Main = () => {
  const {opens,open} = useSelector(state => state.menus);
  
  return (
    <main className={Style.mainContainer}>
      <Tab data={opens} openId={open} data_id_column='MENU_IDXX' data_title_column='MENU_NAME' TabViewsFn={tt}/>
    </main>
  )
}

export default Main;