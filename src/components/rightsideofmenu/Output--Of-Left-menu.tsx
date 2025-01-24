import { useState } from "react";
import Sidebarcomponent1 from "./sidebarcomponent/sidebarcomponent-1";
import Sidebarcomponent2 from "./sidebarcomponent/sidebarcomponent-2";
import Sidebarcomponent3 from "./sidebarcomponent/sidebarcomponent-3";
import Sidebarcomponent4 from "./sidebarcomponent/sidebarcomponent-4";
import Sidebarcomponent5 from "./sidebarcomponent/sidebarcomponent-5";
import Sidebarcomponent6 from "./sidebarcomponent/sidebarcomponent-6";



const Rendercomponent = ({ index }: any) => {
    switch (index) {
      case 0:
        return <Sidebarcomponent1 />;
        break;
      case 1:
        return <Sidebarcomponent2 />;
        break;
      case 2:
        return <Sidebarcomponent3/>;
        break;
      case 3:
        return <Sidebarcomponent4 />;
        break;
      case 4:
        return <Sidebarcomponent5 />;
        break;
      case 5:
        return <Sidebarcomponent6 />;
        break;
  
      default:
        break;
    }
  };

function OutputOfLeftmenu() {
  const [isSelected, setIsSelected] = useState(1);

  return (
    <div>
        <div style={{width: "700px",  height: "500px", borderLeft:"1px solid gray" }}>
        <Rendercomponent index={isSelected} />
      </div>

    </div>
  )
}

export default OutputOfLeftmenu