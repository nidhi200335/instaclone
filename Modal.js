import React from 'react'
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import {useNavigate} from "react-router-dom";
export default function Modal({setShowComponent}) {
const navigate = useNavigate()
  return (
    <div className="darkBg" onClick ={()=>setShowComponent(false)}>
    <div className="centered">
    <div className="modal">
       <div className="modalHeader">
      <h5 className="heading">Confirm</h5>
      </div>
      <button className="closeBtn" onClick ={()=>setShowComponent(false)}>
            <RiCloseLine></RiCloseLine>
          </button>
          <div className="modalContent">Are you really want to log Out ?</div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button
                className="logOutBtn" 
                onClick={() => {
                  setShowComponent(false);
                  localStorage.clear();
                  navigate("./signin");
                }}
              >
                Log Out
              </button>

              <button className="cancelBtn" onClick ={()=>setShowComponent(false)} >
                cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}
