

interface SidemenuProps {
  buttons: JSX.Element[];
  isSelected: number;
  setIsSelected: (index: number) => void;
}

function Sidemenu({buttons, isSelected, setIsSelected}: SidemenuProps) {
  return (
    <div className="Sidemenu-container">
        {
            buttons.map((text , index)=>{
                return  <div style={{borderLeft:" "}} className={isSelected == index ? "selectedbutton" : "sidebuttons"}
                onClick={()=>(setIsSelected(index))} >{text}</div>
            })
        }
       
    </div>
  )
}

export default Sidemenu