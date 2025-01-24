import { useState } from "react";

import Sidemenu from "./sidemenu";
import Sidebarcomponent1 from "./rightsideofmenu/sidebarcomponent/sidebarcomponent-1";
import Sidebarcomponent2 from "./rightsideofmenu/sidebarcomponent/sidebarcomponent-2";
import Sidebarcomponent3 from "./rightsideofmenu/sidebarcomponent/sidebarcomponent-3";
import Sidebarcomponent4 from "./rightsideofmenu/sidebarcomponent/sidebarcomponent-4";
import Sidebarcomponent5 from "./rightsideofmenu/sidebarcomponent/sidebarcomponent-5";
import Sidebarcomponent6 from "./rightsideofmenu/sidebarcomponent/sidebarcomponent-6";


const buttons = [
  <img style={{ width: "30px",  }}src="explorer.png"alt=""/>,
  <img style={{ width: "30px" }} src="search.png" alt="" />,
  <img style={{ width: "30px" }} src="source-control.png" alt="" />,
  <img style={{ width: "30px" }} src="run & debug.png" alt="" />,
  <img style={{ width: "30px" }} src="remote-explorer-icon.png" alt="" />,
  <img style={{ width: "30px" }} src="extantion.png" alt="" />,
];

const Rendercomponent = ({ index }: any) => {
  switch (index) {
    case 0:
      return <Sidebarcomponent1 />;
      break;
    case 1:
      return <Sidebarcomponent2 />;
      break;
    case 2:
      return <Sidebarcomponent3 />;
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

function Menu() {
  const [isSelected, setIsSelected] = useState(0);
  return (
    <div
      style={{ width:"500px",
        display: "flex",
        borderBlock: "none",
        justifyContent: "end",
        backgroundColor: "rgb(7, 8, 9)",
      }}
    >
      <div style={{ width: "50px", borderBlock: "none", margin: "10px",  }}>
        <Sidemenu
          buttons={buttons}
          isSelected={isSelected}
          setIsSelected={setIsSelected}
        />
      </div>
      <div style={{width: "300px",  height: "700px", borderLeft:"1px solid gray",  }}>
        <Rendercomponent index={isSelected} />
      </div>
    </div>
  );
}

export default Menu;
