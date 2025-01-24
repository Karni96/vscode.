import { useState } from "react";

function Sidebarcomponent1() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  return (
    <div style={{ width: "190px", height: "200px", borderLeft: "none" }}>
      <p style={{ borderBottom: "1px  " }}>Explorer</p>
      <div style={{ fontSize: "15px", paddingLeft: "0px" }}>
        <div
          style={{
            marginTop: "20px",
            borderBottom: "1px solid gray",
            paddingBottom: "10px",
          }}
        >
          <button
            style={{ borderBlock: "none", border: "0" }}
            onClick={() => setShow((old) => !old)}
          >
            <li style={{ listStyle: "", display: "flex" }}>
              <img
                style={{ width: "20px", position: "fixed", marginLeft: "5px" }}
                className="downarrow.png"
                src="downarrow.png"
                alt=""
              />
            </li>
            <div style={{ backgroundColor: "black", color: "white" }}>
              <div
                style={{
                  listStyle: "none",
                  width: "140px",
                  borderLeft: "1px solid gray",
                  marginLeft: "15px",
                }}
              >
                OPEN EDITORS{" "}
                {show && (
                  <div style={{ width: "190px" }}>
                    <li>
                      <div style={{ display: "flex", border: "0", width: "180px" }}>{" "}
                        <img style={{ width: "10px", marginLeft: "50px" }} src="download.svg" alt="" />{" "}
                        sidebar-1.tsx 
                        {/* <File1 /> */}
                      </div>
                    </li>
                    <li>
                      <div style={{ display: "flex", border: "0", width: "180px" }}> {" "}
                        <img  style={{ width: "10px", marginLeft: "50px" }}src="download.svg"  alt=""  />{" "}
                        sidebar-2.tsx
                      </div>
                    </li>
                    <li>
                      <div
                        style={{ display: "flex", border: "0", width: "180px" }}
                      >
                        {" "}
                        <img style={{ width: "10px", marginLeft: "50px" }} src="download.svg"alt="" />{" "}
                        sidebar-3.tsx
                      </div>
                    </li>
                    <li>
                      <div
                        style={{ display: "flex", border: "0", width: "180px" }}
                      >
                        {" "}
                        <img style={{ width: "10px", marginLeft: "50px" }} src="download.svg" alt="" />{" "}    
                        sidebar-4s.tsx
                      </div>
                    </li>
                  </div>
                )}
              </div>
            </div>
          </button>
        </div>
      </div>

      <div
        style={{
          fontSize: "20px",
          paddingTop: "5px",
          paddingLeft: "0px",
          borderBlockColor: "yellow",
          border: "none",
        }}
      >
        <p> {/* YOUR CAN RIGHT HERE  */} </p>

        <div
          style={{
            marginBlock: "none",
            borderBottom: "1px solid gray",
            paddingBottom: "10px",
          }}
        >
          <button
            style={{ borderBlock: "none", border: "0" }}
            onClick={() => setShow2((old) => !old)}
          >
            <li style={{ listStyle: "none", display: "flex" }}>
              <img
                style={{ marginLeft: "5px", width: "20px", position: "fixed" }}
                className="downarrow.png"
                src="downarrow.png"
                alt=""
              />
            </li>
            <div style={{ backgroundColor: "black", color: "white" }}>
              <div
                style={{
                  listStyle: "none",
                  width: "50px",
                  borderLeft: "1px solid gray",
                  marginLeft: "15px",
                }}
              >
                VSC{" "}
                {show2 && (
                  <div style={{ backgroundColor: "", width: "190px" }}>
                    <li>number1</li>
                    <li>number2</li>
                    <li>number3</li>
                    <li>number4</li>
                  </div>
                )}
              </div>
            </div>
          </button>
        </div>
      </div>

      <div style={{ fontSize: "20px", paddingTop: "5px", paddingLeft: "0px" }}>
        <p> {/* YOUR CAN RIGHT HERE  */} </p>
        <div style={{ borderBottom: "1px solid gray", paddingBottom: "10px" }}>
          <button
            style={{ borderBlock: "none", border: "0" }}
            onClick={() => setShow3((older) => !older)}
          >
            <li style={{ listStyle: "none", display: "flex" }}>
              <img
                style={{ marginLeft: "5px", width: "20px", position: "fixed" }}
                className="downarrow.png"
                src="downarrow.png"
                alt=""
              />
            </li>
            <div style={{ backgroundColor: "black", color: "white" }}>
              <div
                style={{
                  listStyle: "none",
                  width: "90px",
                  borderLeft: "1px solid gray",
                  marginLeft: "15px",
                }}
              >
                OUTLINE{" "}
                {show3 && (
                  <div style={{ backgroundColor: "", width: "190px" }}>
                    <li>number1</li>
                    <li>number2</li>
                    <li>number3</li>
                    <li>number4</li>
                  </div>
                )}
              </div>
            </div>
          </button>
        </div>
      </div>

      <div style={{ fontSize: "20px", paddingTop: "5px", paddingLeft: "0px" }}>
        <p> {/* YOUR CAN RIGHT HERE  */} </p>
        <div style={{ borderBottom: "1px solid gray", paddingBottom: "10px" }}>
          <button
            style={{ borderBlock: "none", border: "0" }}
            onClick={() => setShow4((older) => !older)}
          >
            <li
              style={{ listStyle: "none", marginLeft: "5px", display: "flex" }}
            >
              <img
                style={{ width: "20px", position: "fixed" }}
                className="downarrow.png"
                src="downarrow.png"
                alt=""
              />
            </li>
            <div style={{ backgroundColor: "black", color: "white" }}>
              <div
                style={{
                  listStyle: "none",
                  marginLeft: "15px",
                  borderLeft: "1px solid gray",
                  width: "90px",
                }}
              >
                TIMELINE{" "}
                {show4 && (
                  <div style={{ backgroundColor: "", width: "100px" , marginLeft:"20px"}}>
                    <div style={{ display: "flex", justifyContent:"right",width: "100px", border: "1px solid red", }}>
                      <li> <img  style={{ width: "10px",border:"1px solid red",  marginLeft:"30px"}} src="download.svg" alt=""/></li>
                      <li> <img style={{ width: "10px",border:"1px solid red" }} src="download.svg"alt="" />  </li>
                      <li>   <img style={{ width: "10px",border:"1px solid red"  }} src="download.svg" alt=""  /></li>
                      <li> <img  style={{ width: "10px",border:"1px solid red"  }} src="download.svg" alt=""  /> </li>
                    </div>
                    <p style={{width:"170px"}}> The active editor cannot provide timeline information.</p> 
                  </div>
                )}
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebarcomponent1;
