import Header from '../component/Header'


const mappingMenus = () => {

    return {
        '' : <Header/>
    }
}


const connectMenus = (id,option) => {
    switch (id) {
        case 'BMF':
            <Header option={option}/>
            break;
    
        default:
            break;
    }
}

const getMenu = (id,option) => {
    return 
}