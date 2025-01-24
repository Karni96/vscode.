import styled from "@emotion/styled";

import Codingpart from "./codingpart";
let Div = styled.div`
  background: black;
  display: flex;
`;

let Li = styled.div`
  display: flex;

  justify: center;
  align-item: center;
  list-style-type: none;
  border: 1px solid gray;
`;

const FilenameRow2 = () => {
  return (
    <div style={{  width: "200px", height: "20px" }}>
      <ul style={{ width: "200px" }}>
        <Li>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", borderBlockColor: "grey" }}>
              <li
                style={{ color: "yellow", display: "flex", listStyle: "none" }}
                >
                    <img className="img" style={{ width: "30px", height: "15px" }} src="download.svg" alt="" />{" "} Fourthstepform.tsx2,M <img className="img"style={{ width: "30px", height: "15px" }} src="close.png"alt="" />
                    {" "}
              </li>
              <li></li>
            </div>
          </div>
        </Li>
      </ul>
      {/* <Codingpart /> */}
    </div>
    
  );
};

export default FilenameRow2;
