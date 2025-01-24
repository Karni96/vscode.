
import styled from '@emotion/styled'


let Div = styled.div`
background: #252525;
display: flex;
`

let Li = styled.div`
display:flex; 
text-align:center;
justify: center;
align-item:center;
gap:20px;
list-style-type:none;

`


const Header = () => {
  return (
    <div>
        
        <Div>
            <header >
                
                    <ul style={{all: "unset"}}>
                    <Li>
                        <div style={{ width: "full" , display:"flex",  marginTop:"2px",justifyContent:"space-between" , alignItems : 'center', flexDirection:"row" }}>

                            <div style={{ width:"400px" , border: "1px  ", display:"flex", textAlign:"center", alignItems:"start", gap:"20px", borderBlockColor: "grey"  }}>
                                <li><img className='img' style={{ width: "20px",  }} src="OIP.jpg"  alt="" /> </li>
                                <li>File</li>
                                <li>Edit</li>
                                <li>Selection</li>
                                <li>View</li>
                                <li>Go</li>
                                <li>Run</li>
                                <li>...</li>
                            </div>
                        

                            <div style={{ width:"500px", padding:"5px", display:"flex",   }}>
                                <li><img src="side errow.png" style={{ width: "50px",marginTop:"5px", backgroundColor: "white", alignItems:"center" }}  alt="" /> </li>
                                {/* <li><img src="arrow.png" style={{ width: "20px", paddingLeft: "4px" ,backgroundColor: "white" }}  alt="" /> </li>
                                <li><img src="arrow.left.png" style={{ width: "20px", paddingLeft: "2px", backgroundColor: "white"  }}  alt="" /> </li> */}
                                {/* <li><img src="arrow.png" style={{ width: "20px", paddingLeft: "4px" ,backgroundColor: "white" }}  alt="" /> </li> */}
                                <div style={{ paddingLeft: "10px" }}>
                                    <li><input type="search" style={{ width: "350px", textAlign:'center', borderRadius:"6px", height:"25px"}} placeholder='vsc' /> </li>
                                </div>
                                <li><img src="copilot.png" style={{ width: "40px", paddingLeft: "10px", backgroundColor: "", borderRadius:"20px"  }}  alt="" /></li>
                                {/* <li><img src="54785.png" style={{ width: "10px", borderRadius:"20px", backgroundColor: "white"  }}  alt="" /></li> */}
                            </div>

                            <div style={{width:"200px", padding:"5px", display:"flex",   }}>
                                {/* <li><img src="toggleimg2.png" style={{ backgroundColor: "WHITE", width: "25px", paddingLeft: "20px"  }}  alt="" /> </li>
                                <li><img src="toggleimg1.png" style={{backgroundColor: "WHITE",  width: "25px", paddingLeft: "20px"  }}  alt="" /> </li> */}
                                <li><img src="icons.png" style={{backgroundColor: "white",  width: "100px",  }}  alt="" /> </li>
                                <li><img src="minimize.png" style={{  width: "25px",   }}  alt="" /> </li>
                                <li><img src="restore.png" style={{  width: "25px",  }}  alt="" /> </li>
                                <li><img src="close.png" style={{ width: "25px"  }}  alt="" /> </li>
                            </div>
                            </div>
                        </Li>
                    </ul>
            </header> 
        </Div>

        
        
    </div>
  )
}

export default Header