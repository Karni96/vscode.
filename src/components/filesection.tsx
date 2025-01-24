
import styled from '@emotion/styled'

const Filesection = () => {

let Portfolio = styled.div`

display:flex;
flex-direction:column;
width: 265px;
justify: center;
align-item:center;
margin-top: 5px;
gap:15px;
list-style-type:none;
`

let Inside = styled.div`

display:flex;
flex-direction:column;
width: 200px;
justify: center;
align-item:center;
margin-left:20px;

gap:15px;
list-style-type:none;
`
  return (        
            <div style={{ height:"200", width:"280px", backgroundColor:"#252525"}}>
               <Portfolio> 
                 <div style={{borderBottom:"1px solid gray", backgroundColor:"#211F1F"}}>
                    <li style={{}} ><img style={{width:"20px", height:"15px"}} src="downarrow.png" alt="" /> <b>PORTFOLIO</b> 
                        <li style={{ marginLeft: "30px" , color: "yellow" ,display: "flex" }}> 
                            <img style={{width:"20px", height:"15px"}} src="downarrow.png" alt="" />App.tsx portfolio\src
                        </li>
                        <li style={{ marginLeft: "40px" , marginTop:"8px", color: "yellow" ,display: "flex" }}> 
                        <img style={{width:"20px", height:"15px"}} src="downarrow.png" alt="" /> src
                        </li>
                    </li>
                 </div>                   
                </Portfolio>

                <div style={{backgroundColor:"#1F1E1E"    }}>
                    <Inside>
                    <li style={{ borderLeft:"1px solid gray", backgroundColor:"#211F1F", scrollBehavior:"smooth"}} >
                        <li style={{ paddingLeft: "50px" , color: "white" ,display: "flex" }}> 
                            <img style={{width:"14px"}} src="download.svg" alt="" />App.css
                        </li>
                        <li style={{ marginLeft: "50px" , color: "yellow" ,display: "flex" }}> 
                            <img style={{width:"14px"}} src="download.svg" alt="" />App.tsx 
                        </li>
                        <li style={{ marginLeft: "50px" , color: "white" ,display: "flex" }}> 
                            <img style={{width:"14px"}} src="download.svg" alt="" />firststepform.tsx 
                        </li>
                        <li style={{ marginLeft: "50px" , color: "white" ,display: "flex" }}> 
                            <img style={{width:"14px"}} src="download.svg" alt="" />Fourthstepform.tsx 
                        </li>
                        <li style={{ marginLeft: "50px" , color: "white" ,display: "flex" }}> 
                            <img style={{width:"14px"}} src="download.svg" alt="" />index.css 
                        </li>
                        <li style={{ marginLeft: "50px" , color: "red" ,display: "flex" }}> 
                            <img style={{width:"14px"}} src="download.svg" alt="" />main.tsx 
                        </li>
                        <li style={{ marginLeft: "50px" , color: "yellow" ,display: "flex" }}> 
                            <img style={{width:"14px"}} src="download.svg" alt="" />multistepform.tsx 
                        </li>
                        <li style={{ marginLeft: "50px" , color: "white" ,display: "flex" }}> 
                            <img style={{width:"14px"}} src="download.svg" alt="" />secondstepform.tsx 
                        </li>
                        <li style={{ marginLeft: "50px" , color: "yellow" ,display: "flex" }}> 
                            <img style={{width:"14px"}} src="download.svg" alt="" />StepContext.tsx 
                        </li>
                        <li style={{ marginLeft: "50px" , color: "white" ,display: "flex" }}> 
                            <img style={{width:"14px"}} src="download.svg" alt="" />thirdstepform.tsx 
                        </li>
                        <li style={{ marginLeft: "50px" , color: "white" ,display: "flex" }}> 
                            <img style={{width:"14px"}} src="download.svg" alt="" />vite-end.d.ts 
                        </li>
                        
                    </li>
                    </Inside>
                        <li style={{ marginLeft: "40px" , color: "white" ,display: "flex" }}> 
                            <img style={{width:"20px"}} src="gitignore.png" alt="" />.gitignore 
                        </li>
                        <li style={{ marginLeft: "40px" , color: "white" ,display: "flex" }}> 
                            <img style={{width:"20px"}} src="eslint.png" alt="" />eslint.congfig.js 
                        </li>
                        <li style={{ marginLeft: "40px" , color: "white" ,display: "flex" }}> 
                            <img style={{width:"20px"}} src="htmlindex.png" alt="" />index.html 
                        </li>
                        <li style={{ marginLeft: "40px" , color: "white" ,display: "flex" }}> 
                            <img style={{width:"20px"}} src="package.json.png" alt="" />package-lock.json 
                        </li>
                </div>
            </div>      
  )
}

export default Filesection