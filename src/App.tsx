import './App.css'
import Header from './components/header'
import Explorer from './components/explorer'
import Filesection from './components/filesection'
import FilenameRow from './components/filenamerow'
import FilenameRow2 from './components/filenameow'
import Sidebarcontentleft from './sidebarcontentrow'
import Menu from './components/menu'
import OutputOfLeftmenu from './components/rightsideofmenu/Output--Of-Left-menu'



function App( ) {
  return (
    <>
      <div style={{ color:"WHITE", backgroundColor: "#1F1E1E"}}>
        <div style={{display:"flex", justifyContent:"space-between" , width:"100%"}}>
            <Header />
        </div>
          <div style={{display:"flex" , flexDirection:"row", justifyContent:"left", border:"1px solid gray  "}}>
            <Menu />
            
            {/* <OutputOfLeftmenu /> */}

              {/* <div style={{display:"flex", flexDirection:"column", border:"1px solid gray" , borderRight:"3px solid #2189FF" }}>
                
                <Explorer />
                <Filesection /> 
              </div>   */}
              {/* <div style={{display:"flex", width:"410px", flexDirection:"row", borderTop:"1px " }}>
                <FilenameRow />    
                <FilenameRow2 />   
              </div>
                <div style={{display:"flex", width:"610px", flexDirection:"row", justifyContent:"space-between"}}>
                   <Sidebarcontentleft />     
                </div> */}
          </div>   
      </div> 
    </>
  )
}
export default App
