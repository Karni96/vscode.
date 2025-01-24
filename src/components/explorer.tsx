
import styled from '@emotion/styled'

const Explorer = () => {
    
let Explorer = styled.div`
display:flex;
flex-direction:column;

justify: center;
align-item:center;
margin-top: 5px;
gap:15px;
font-size:15px;
list-style-type:none;
`
  return (
        
            <div style={{ width:"280px",borderTop:"1px solid gray" ,paddingLeft: "10px", fontSize:"20px"}}>
               Explorer
               <Explorer> 
                    <li style={{ marginTop:"10px" }} >OPEN EDITORS
                        <li style={{ marginLeft: "30px" , color: "yellow" ,display: "flex" }}> 
                            <img style={{width:"14px"}} src="download.svg" alt="" />App.tsx portfolio\src
                        </li>
                        <li style={{ marginLeft: "30px" , color: "yellow" ,display: "flex" }}> 
                            <img style={{width:"14px"}} src="download.svg" alt="" />firststepform.tsx portfolio\src
                        </li>
                        <li style={{ marginLeft: "30px" , color: "white" ,display: "flex" }}> 
                            <img style={{width:"14px"}} src="download.svg" alt="" />Fourthstepform.tsx portfolio\src
                        </li>
                        <li style={{ marginLeft: "30px" , color: "yellow" ,display: "flex" }}> 
                            <img style={{width:"14px"}} src="download.svg" alt="" />StepContext.tsx portfolio\src
                        </li>
                        <li style={{ marginLeft: "30px" , color: "red" ,display: "flex" }}> 
                            <img style={{width:"14px"}} src="download.svg" alt="" />main.tsx portfolio\src
                        </li>
                    </li>
                    
                </Explorer>
            </div>            
  )
}

export default Explorer