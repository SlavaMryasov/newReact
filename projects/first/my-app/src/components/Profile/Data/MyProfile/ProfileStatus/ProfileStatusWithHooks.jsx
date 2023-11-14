import React, { useEffect, useState } from "react";


const ProfileStatusWithHooks = (props)=> {
  
  // const stateWithSetState = useState(false);
  // let editMode = stateWithSetState[0];
  // let setEditMode = stateWithSetState[1];

  let [editMode, setEditMode] = useState(false) // false - это editMode
   let [status, setStatus] = useState(props.status)

   useEffect(()=>{
   setStatus(props.status)
   }, [props.status])

  const activateEditMode = () =>{
    setEditMode(true)
  }

  const deactivateEditMode = () => {
   setEditMode(false)
   props.updateUserStatus(status)
  }

  const onStatusChange = (event) => {
    setStatus(event.currentTarget.value)
  }
    return (
      <div>
        {!editMode
          ? <div>
            <span onDoubleClick={ !props.userId || props.userId==29915 ? activateEditMode: false}>{props.status}</span>
          </div>
          : <div>
            <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}></input>
          </div>
        }
      </div>
    )
}

export default ProfileStatusWithHooks;



