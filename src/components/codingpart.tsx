
import styled from '@emotion/styled'

const Codingpart = () => {

let Portfolio = styled.div`

display:flex;
flex-direction:column;

justify: center;
align-item:center;
margin-top: 5px;

list-style-type:none;
`

  return (        
            <div style={{ width:"400px", }}>
               <Portfolio> 
                 <div style={{borderBottom:"1px solid black", backgroundColor:"#211F1F"}}>
                    <li style={{}} ><img style={{width:"400px", height:"350px"}} src="codingpartclip.png" alt="" /> </li>
                 </div>                   
                </Portfolio>

                
            </div>      
  )
}

export default Codingpart