import {useState, useEffect, useCallback, memo} from 'react'
import Store,{Action_Menus} from '../store/Store'
import Style from '../css/Header.module.css';



const Menu_Seach = (setWidth) => {
  //menu 리스트를 불러올 server 통신
  return () => {
    fetch( 'https://jsonplaceholder.typicode.com/todos/1' )
    .then( response => response.json() )
    .then( json => {
      const categorys = json ? getSampleData() : [];
      const menuList = json ? getMenuList() : [];
      const Store_Menus = Store.getState().menus;

      console.log('Store ::',Store_Menus);

      //상태값 변경
      Store.dispatch(Action_Menus.actions.setMenus({categorys,menuList}));
      setWidth(`calc(100% / ${Store_Menus.categorys.length})`);//카테고리 리스트 갯수에 따라 width 변경
    }).finally( () => {
      //로딩 처리있을 경우 finally에서 로딩 회수
    });//then
  };//return
};



//Header 컴포넌트 생성
const Header = memo(
  () => {
    //기본값 셋팅
    //const [categorys,setCategorys] = useState([]);
    const [width, setWidth] = useState(0);
    const {categorys,menuList} = Store.getState().menus;
    
    //조회
    useEffect(useCallback(Menu_Seach(setWidth)),[]);

    return (
      <header className={Style.header}>
        <nav>
          <ul className={Style.menus}>
            {categorys.map( ({COMD_CODE,COMD_CDNM}) => 
              <li key={COMD_CODE+COMD_CDNM} style={{width}}>
                <a href="#">{COMD_CDNM}</a>                
                <SubMenuList data={ menuList.filter( menu => menu.SYST_CODE === COMD_CODE) }/>
              </li>
            )}
          </ul>
        </nav>
      </header>
    )
  }
);



//서브 메뉴 컴포넌트
const SubMenuList = memo(
  ({data = []}) => {
    return (
      <ul className={Style.subMenus}>
        { data.map( ({MENU_IDXX,MENU_NAME}) => <li key={MENU_IDXX} onClick={ () => Store.dispatch(Action_Menus.actions.setOpen({MENU_IDXX,MENU_NAME})) }>{MENU_NAME}</li>) }
      </ul>
    )
  }
)



//export
export default Header;




//test용 코드
const getSampleData = () => {
  return [
    {
      "COMM_CODE" : "SYST_CODE",
      "COMD_CODE" : "BMF",
      "COMD_CDNM" : "기준관리",
      "COMD_ENNM" : null,
      "CRTE_DATE" : "20210607",
      "REF1_FILD" : "기준",
      "REF3_FILD" : null,
      "SORT_ORDR" : 110,
      "USEX_YSNO" : "1"
    },
    {
      "COMM_CODE" : "SYST_CODE",
      "COMD_CODE" : "COM",
      "COMD_CDNM" : "공통관리",
      "COMD_ENNM" : null,
      "CRTE_DATE" : "19000101",
      "REF1_FILD" : "공통",
      "REF3_FILD" : "1",
      "SORT_ORDR" : 11,
      "USEX_YSNO" : "1"
    },
    {
      "COMM_CODE" : "SYST_CODE",
      "COMD_CODE" : "CUR",
      "COMD_CDNM" : "교과관리",
      "COMD_ENNM" : null,
      "CRTE_DATE" : "19000101",
      "REF1_FILD" : "교과",
      "REF3_FILD" : "1",
      "SORT_ORDR" : 60,
      "USEX_YSNO" : "1"
    },
    {
      "COMM_CODE" : "SYST_CODE",
      "COMD_CODE" : "ENR",
      "COMD_CDNM" : "수강관리",
      "COMD_ENNM" : null,
      "CRTE_DATE" : "19000101",
      "REF1_FILD" : "수강",
      "REF3_FILD" : "1",
      "SORT_ORDR" : 80,
      "USEX_YSNO" : "1"
    },
    {
      "COMM_CODE" : "SYST_CODE",
      "COMD_CODE" : "ENT",
      "COMD_CDNM" : "입학관리",
      "COMD_ENNM" : null,
      "CRTE_DATE" : "19000101",
      "REF1_FILD" : "입학",
      "REF3_FILD" : "1",
      "SORT_ORDR" : 20,
      "USEX_YSNO" : "1"
    },
    {
      "COMM_CODE" : "SYST_CODE",
      "COMD_CODE" : "GDU",
      "COMD_CDNM" : "졸업관리",
      "COMD_ENNM" : null,
      "CRTE_DATE" : "19000101",
      "REF1_FILD" : "졸업",
      "REF3_FILD" : "1",
      "SORT_ORDR" : 100,
      "USEX_YSNO" : "1"
    },
    {
      "COMM_CODE" : "SYST_CODE",
      "COMD_CODE" : "GRD",
      "COMD_CDNM" : "성적관리",
      "COMD_ENNM" : null,
      "CRTE_DATE" : "19000101",
      "REF1_FILD" : "성적",
      "REF3_FILD" : "1",
      "SORT_ORDR" : 90,
      "USEX_YSNO" : "1"
    },
    {
      "COMM_CODE" : "SYST_CODE",
      "COMD_CODE" : "HAK",
      "COMD_CDNM" : "학사정보",
      "COMD_ENNM" : null,
      "CRTE_DATE" : "19000101",
      "REF1_FILD" : "학사",
      "REF3_FILD" : "1",
      "SORT_ORDR" : 30,
      "USEX_YSNO" : "1"
    },
    {
      "COMM_CODE" : "SYST_CODE",
      "COMD_CODE" : "LEC",
      "COMD_CDNM" : "수업관리",
      "COMD_ENNM" : null,
      "CRTE_DATE" : "19000101",
      "REF1_FILD" : "수업",
      "REF3_FILD" : "1",
      "SORT_ORDR" : 70,
      "USEX_YSNO" : "1"
    },
    {
      "COMM_CODE" : "SYST_CODE",
      "COMD_CODE" : "PSF",
      "COMD_CDNM" : "실적요약관리",
      "COMD_ENNM" : null,
      "CRTE_DATE" : "20210607",
      "REF1_FILD" : "실적",
      "REF3_FILD" : "1",
      "SORT_ORDR" : 120,
      "USEX_YSNO" : "1"
    },
    {
      "COMM_CODE" : "SYST_CODE",
      "COMD_CODE" : "REG",
      "COMD_CDNM" : "등록관리",
      "COMD_ENNM" : null,
      "CRTE_DATE" : "19000101",
      "REF1_FILD" : "등록",
      "REF3_FILD" : "1",
      "SORT_ORDR" : 50,
      "USEX_YSNO" : "1"
    },
    {
      "COMM_CODE" : "SYST_CODE",
      "COMD_CODE" : "SCA",
      "COMD_CDNM" : "SCA",
      "COMD_ENNM" : null,
      "CRTE_DATE" : "20180101",
      "REF1_FILD" : "SCA",
      "REF3_FILD" : "0",
      "SORT_ORDR" : 0,
      "USEX_YSNO" : "1"
    },
    {
      "COMM_CODE" : "SYST_CODE",
      "COMD_CODE" : "SOF",
      "COMD_CDNM" : "명세서출력",
      "COMD_ENNM" : null,
      "CRTE_DATE" : "20210607",
      "REF1_FILD" : "명세서",
      "REF3_FILD" : "1",
      "REMK_100X" : "Specification Ouput FRS",
      "SORT_ORDR" : 130,
      "USEX_YSNO" : "1"
    },
    {
      "COMM_CODE" : "SYST_CODE",
      "COMD_CODE" : "SRG",
      "COMD_CDNM" : "학적관리",
      "COMD_ENNM" : null,
      "CRTE_DATE" : "19000101",
      "REF1_FILD" : "학적",
      "REF3_FILD" : "1",
      "SORT_ORDR" : 40,
      "USEX_YSNO" : "1"
    },
    {
      "COMM_CODE" : "SYST_CODE",
      "COMD_CODE" : "SYS",
      "COMD_CDNM" : "시스템관리",
      "COMD_ENNM" : null,
      "CRTE_DATE" : "19000101",
      "REF1_FILD" : "시스템",
      "REF3_FILD" : "1",
      "SORT_ORDR" : 10,
      "USEX_YSNO" : "1"
    }
  ].slice(0,7);
}

const getMenuList = () => {
  return [
    {
      "MENU_IDXX" : "BMF",
      "MENU_NAME" : "기준관리",
      "SYST_CODE" : "BMF",
      "SORT_ORDR" : 2,
      "UPME_IDXX" : "MROOT",
      "PROG_IDXX" : null,
      "MNUT_YSNO" : "1",
      "USEX_YSNO" : "1",
      "DEVC_YSNO" : "1"
    },
    {
      "MENU_IDXX" : "BMFA",
      "MENU_NAME" : "기준관리",
      "SYST_CODE" : "BMF",
      "SORT_ORDR" : 1,
      "UPME_IDXX" : "BMF",
      "PROG_IDXX" : null,
      "MNUT_YSNO" : "1",
      "USEX_YSNO" : "1",
      "DEVC_YSNO" : "1"
    },
    {
      "MENU_IDXX" : "BMFA0010",
      "MENU_NAME" : "표준COA관리",
      "SYST_CODE" : "BMF",
      "SORT_ORDR" : 1,
      "UPME_IDXX" : "BMFA",
      "PROG_IDXX" : "FRS0001",
      "MNUT_YSNO" : "0",
      "USEX_YSNO" : "1",
      "DEVC_YSNO" : "1"
    },
    {
      "MENU_IDXX" : "BMFA0020",
      "MENU_NAME" : "COA 매핑",
      "SYST_CODE" : "BMF",
      "SORT_ORDR" : 2,
      "UPME_IDXX" : "BMFA",
      "PROG_IDXX" : "FRS0002",
      "MNUT_YSNO" : "0",
      "USEX_YSNO" : "1",
      "DEVC_YSNO" : "1"
    },
    {
      "MENU_IDXX" : "BMFA0030",
      "MENU_NAME" : "엑셀양식관리",
      "SYST_CODE" : "BMF",
      "SORT_ORDR" : 3,
      "UPME_IDXX" : "BMFA",
      "PROG_IDXX" : "FRS0003",
      "MNUT_YSNO" : "0",
      "USEX_YSNO" : "1",
      "DEVC_YSNO" : "1"
    },
    {
      "MENU_IDXX" : "BMFA0040",
      "MENU_NAME" : "스케줄(SSIS)관리-(미개발)",
      "SYST_CODE" : "BMF",
      "SORT_ORDR" : 4,
      "UPME_IDXX" : "BMFA",
      "PROG_IDXX" : "FRS1234",
      "MNUT_YSNO" : "0",
      "USEX_YSNO" : "1",
      "DEVC_YSNO" : "1"
    },
    {
      "MENU_IDXX" : "BMFA0050",
      "MENU_NAME" : "EXCEL자료 업로드",
      "SYST_CODE" : "BMF",
      "SORT_ORDR" : 5,
      "UPME_IDXX" : "BMFA",
      "PROG_IDXX" : "FRS0005",
      "MNUT_YSNO" : "0",
      "USEX_YSNO" : "1",
      "DEVC_YSNO" : "1"
    },
    {
      "MENU_IDXX" : "BMFA0060",
      "MENU_NAME" : "결산확인체크리스트",
      "SYST_CODE" : "BMF",
      "SORT_ORDR" : 6,
      "UPME_IDXX" : "BMFA",
      "PROG_IDXX" : "FRS0006",
      "MNUT_YSNO" : "0",
      "USEX_YSNO" : "1",
      "DEVC_YSNO" : "1"
    },
    {
      "MENU_IDXX" : "BMFA0070",
      "MENU_NAME" : "마감관리",
      "SYST_CODE" : "BMF",
      "SORT_ORDR" : 7,
      "UPME_IDXX" : "BMFA",
      "PROG_IDXX" : "FRS0004",
      "MNUT_YSNO" : "0",
      "USEX_YSNO" : "1",
      "DEVC_YSNO" : "1"
    },
    {
      "MENU_IDXX" : "MCUR",
      "MENU_NAME" : "교과관리",
      "SYST_CODE" : "CUR",
      "SORT_ORDR" : 3,
      "UPME_IDXX" : "MHK",
      "PROG_IDXX" : null,
      "MNUT_YSNO" : "1",
      "USEX_YSNO" : "1",
      "DEVC_YSNO" : "1"
    },
    {
      "MENU_IDXX" : "MCURA",
      "MENU_NAME" : "교과목관리",
      "SYST_CODE" : "CUR",
      "SORT_ORDR" : 1,
      "UPME_IDXX" : "MCUR",
      "PROG_IDXX" : null,
      "MNUT_YSNO" : "1",
      "USEX_YSNO" : "1",
      "DEVC_YSNO" : "1"
    },
    {
      "MENU_IDXX" : "MCURA0010",
      "MENU_NAME" : "교과목등록\/승인",
      "SYST_CODE" : "CUR",
      "SORT_ORDR" : 10,
      "UPME_IDXX" : "MCURA",
      "PROG_IDXX" : "CURA0010",
      "MNUT_YSNO" : "0",
      "USEX_YSNO" : "1",
      "DEVC_YSNO" : "1"
    },
    {
      "MENU_IDXX" : "MCURA0020",
      "MENU_NAME" : "학과별교양과목배정관리",
      "SYST_CODE" : "CUR",
      "SORT_ORDR" : 20,
      "UPME_IDXX" : "MCURA",
      "PROG_IDXX" : "CURA0020",
      "MNUT_YSNO" : "0",
      "USEX_YSNO" : "0",
      "DEVC_YSNO" : "1"
    },
    {
      "MENU_IDXX" : "MCURA0030",
      "MENU_NAME" : "교과목조회",
      "SYST_CODE" : "CUR",
      "SORT_ORDR" : 30,
      "UPME_IDXX" : "MCURA",
      "PROG_IDXX" : "CURA0030",
      "MNUT_YSNO" : "0",
      "USEX_YSNO" : "1",
      "DEVC_YSNO" : "1"
    },
    {
      "MENU_IDXX" : "MCURA0040",
      "MENU_NAME" : "대체\/동일과목관리",
      "SYST_CODE" : "CUR",
      "SORT_ORDR" : 40,
      "UPME_IDXX" : "MCURA",
      "PROG_IDXX" : "CURA0040",
      "MNUT_YSNO" : "0",
      "USEX_YSNO" : "1",
      "DEVC_YSNO" : "1"
    },
    {
      "MENU_IDXX" : "MCURA0050",
      "MENU_NAME" : "개인별대체\/동일과목조회",
      "SYST_CODE" : "CUR",
      "SORT_ORDR" : 50,
      "UPME_IDXX" : "MCURA",
      "PROG_IDXX" : "CURA0050",
      "MNUT_YSNO" : "0",
      "USEX_YSNO" : "1",
      "DEVC_YSNO" : "1"
    },
    {
      "MENU_IDXX" : "MCURB",
      "MENU_NAME" : "교육과정관리",
      "SYST_CODE" : "CUR",
      "SORT_ORDR" : 2,
      "UPME_IDXX" : "MCUR",
      "PROG_IDXX" : null,
      "MNUT_YSNO" : "1",
      "USEX_YSNO" : "1",
      "DEVC_YSNO" : "1"
    },
    {
      "MENU_IDXX" : "MCURB0010",
      "MENU_NAME" : "수강이수구분관리",
      "SYST_CODE" : "CUR",
      "SORT_ORDR" : 10,
      "UPME_IDXX" : "MCURB",
      "PROG_IDXX" : "CURB0010",
      "MNUT_YSNO" : "0",
      "USEX_YSNO" : "1",
      "DEVC_YSNO" : "1"
    },
    {
      "MENU_IDXX" : "MCURB0020",
      "MENU_NAME" : "학과별이수구분학점관리",
      "SYST_CODE" : "CUR",
      "SORT_ORDR" : 20,
      "UPME_IDXX" : "MCURB",
      "PROG_IDXX" : "CURB0020",
      "MNUT_YSNO" : "0",
      "USEX_YSNO" : "1",
      "DEVC_YSNO" : "1"
    },
    {
      "MENU_IDXX" : "MCURB0030",
      "MENU_NAME" : "교육과정등록",
      "SYST_CODE" : "CUR",
      "SORT_ORDR" : 30,
      "UPME_IDXX" : "MCURB",
      "PROG_IDXX" : "CURB0030",
      "MNUT_YSNO" : "0",
      "USEX_YSNO" : "1",
      "DEVC_YSNO" : "1"
    },
    {
      "MENU_IDXX" : "MCURB0040",
      "MENU_NAME" : "년도별교육과정표",
      "SYST_CODE" : "CUR",
      "SORT_ORDR" : 40,
      "UPME_IDXX" : "MCURB",
      "PROG_IDXX" : "CURB0040",
      "MNUT_YSNO" : "0",
      "USEX_YSNO" : "1",
      "DEVC_YSNO" : "1"
    }
  ]
}