import React from "react";


class ProfileStatus extends React.Component {
  state = {
    modify: false,
    status: this.props.status
  }

  changeModifyStatusOnTrue = () => {
    this.setState({ // АСИНХРОНЩИНА
      modify: true
    })
  }
 
  changeModifyStatusOnFalse = () => {
    this.setState({ // АСИНХРОНЩИНА
      modify: false
    })
    this.props.updateUserStatus(this.state.status)
  }
 
  onStatusChange =(event) =>{
    this.setState({ 
      status : event.currentTarget.value
    })
   
  }
 

  render() {
    return (
      <div>
        {!this.state.modify
          ? <div>
            <span onDoubleClick={()=>this.changeModifyStatusOnTrue(true)}>{this.props.status}</span>
          </div>
          : <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={()=>this.changeModifyStatusOnFalse(false)} value={this.state.status}></input>
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;



