import React from "react"
import { useNavigate } from "react-router-dom";
import ImageComponent from "../ImageComponent/ImageComponent"
import "./styles.css"

export default function HomePage({account}) {
  const navigate = useNavigate();
  return (
    <div className="home flex-col-hstart-vstart clip-contents">
      <div className="rectangle-1" />
      <div className="group-9510 flex-row-vend">
        <div className="frame-30 flex-row-vcenter-hcenter">
          <p className="txt-1069">HirePlus</p>
          <div className="frame-1 flex-row-vcenter-hcenter">
            
            <p className="txt-186">Home</p>
            <p className="txt-496">Freelance</p>
            <p className="txt-448">Post a job</p>
          </div>
        </div>
        {/* <ImageComponent url="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/gmwi0r3wxef-6%3A75?alt=media&token=b237ea41-9214-4aec-a8fb-424c9f11bfc0"/> */}
        {/* <ImageComponent url="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/gmwi0r3wxef-6%3A29?alt=media&token=06880d3d-bc62-4de5-b084-7b7421c621b1"/> */}
        {/* <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/gmwi0r3wxef-6%3A75?alt=media&token=b237ea41-9214-4aec-a8fb-424c9f11bfc0"
          alt="Not Found"
          className="flakes-1"
        /> */}
        </div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/gmwi0r3wxef-6%3A29?alt=media&token=06880d3d-bc62-4de5-b084-7b7421c621b1"
        alt="Not Found"
        className="frame-38"
      />
      {/* </div> */}
      <div className="frame-6 flex-col-hstart-vcenter">
        <p className="txt-562">There’s a New Way to Work and get ......</p>
        <p className="txt-517">
          Your account is {account}
        </p>
        <div className="frame-5 flex-row-vcenter-hcenter" >
          <div className="frame-3 flex-row-vcenter-hcenter" onClick={()=>navigate("/signin")}>
            <p className="txt-673">Log In</p>
          </div>
          <div className="frame-4 flex-row-vcenter-hcenter">
            <p className="txt-673">Sign Up</p>
          </div>
        </div>
      </div>
      {/* <ImageComponent url="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/gmwi0r3wxef-6%3A29?alt=media&token=06880d3d-bc62-4de5-b084-7b7421c621b1"/> */}
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/gmwi0r3wxef-6%3A22?alt=media&token=d46b8363-9d35-48b0-8852-73272628b92a"
        alt="Not Found"
        className="flakes-2"
      />
    </div>
  )
}
