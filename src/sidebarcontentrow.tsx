import Sidebarcenterimg from "./sidebarcenter"


const Sidebarcontentleft = () => {
  return (
    <div style={{minWidth:"300px"}}>
        <div style={{display:"flex", maxWidth:"600px", flexDirection:"row", justifyContent:"space-between"  }}>
            <img style={{width:"80px", height:"30px"}} src="sidebarleftimg.png" alt="" />
            <img style={{width:"140px", height:"30px"}} src="Sidebarrightsideimg.png" alt="" />
        </div>
        <Sidebarcenterimg />
    </div>
    
    
  )
}

export default Sidebarcontentleft