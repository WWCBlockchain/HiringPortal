import React, { useEffect, useState } from 'react';
import ImageComponent from "../ImageComponent/ImageComponent"
import "./styles.css"
import Axios from 'axios';
import {listOfProjects} from "../../jobs"
import Contract1 from '../../Documents/Contract1.pdf';
export default function JobPosting() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(listOfProjects);
  }, []);

  const showAccept=()=>{
    alert("Agreement executed on 2022 Apr 01");
  }
  return (
    <div className="signin flex-col-hstart-vstart clip-contents">
      <div className="group-274 flex-col">
        <div className="frame-1 flex-row-vcenter-hcenter">
          <p className="txt-270">HirePlus</p>
          <div className="frame-1 flex-row-vcenter-hcenter">
            <p className="txt-052">Home</p>
            <p className="txt-874">Jobs</p>
            <p className="txt-384">Post a job</p>

          </div>
        </div>
        <div className="rectangle-1" />
      </div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/u636rxpujsa-9%3A87?alt=media&token=53708018-fd8d-4a40-b5ba-c86d394bdc24"
        alt="Not Found"
        className="vector"
      />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/u636rxpujsa-9%3A96?alt=media&token=28c44b5d-56a3-4840-a10a-1f3acc5f41cf"
        alt="Not Found"
        className="flakes-1"
      />
      
      <div className="group-44">
      <table border="1">
          <tr>
          <th className="txt-020 th-background"><h1>Id</h1></th>
          <th className="txt-020 th-background"><h1>Title</h1></th>
          <th className="txt-020 th-background"><h1>Budget</h1></th>
          <th className="txt-020 th-background"><h1>Currency</h1></th>
          <th className="txt-020 th-background"><h1>Timeline</h1></th>
          <th className="txt-020 th-background"><h1>Status</h1></th>
          <th className="txt-160 th-background"><h1>Action(s)</h1></th>
          </tr>
        {listOfProjects.map((project) => {
          return <tr>
                    <td className="txt-020">{project.project_id}</td>
                    <td className="txt-020">{project.title}</td>
                    <td className="txt-020">{project.budget}</td>
                    <td className="txt-020">{project.currency}</td>
                    <td className="txt-020">{project.timeline}</td>
                    <td className="txt-020">{project.status}</td>
                    <td className="txt-160">
                      <button className="frame-5 flex-row-vcenter-hcenter"onClick={()=>alert("Agreement executed on 2022 Apr 01")}><p className="txt-040" >Accept</p></button> 
                      <button className="frame-5 flex-row-vcenter-hcenter"><p className="txt-040">Search FL</p></button> 
                      <button className="frame-5 flex-row-vcenter-hcenter"><p className="txt-040" ><a href={Contract1} style={{textDecoration:"none"}}>Contract</a></p></button> 
                      <button className="frame-5 flex-row-vcenter-hcenter"><p className="txt-040">Details</p></button> 
                    </td>
                    </tr>;
        }) }
        </table>
      </div>
      
    </div>
  )
}
