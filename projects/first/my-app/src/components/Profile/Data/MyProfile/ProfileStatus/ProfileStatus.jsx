import React from "react";


class ProfileStatus extends React.Component {
  state = {
    modify: false,
    status: this.props.status
  }

  changeModifyStatus = (status) => {
    this.setState({ // АСИНХРОНЩИНА
      modify: status
    })
  }
  
  render() {
    return (
      <div>
        {!this.state.modify
          ? <div>
            <span onDoubleClick={()=>this.changeModifyStatus(true)}>{this.props.status}</span>
          </div>
          : <div>
            <input  autoFocus={true} onBlur={()=>this.changeModifyStatus(false)} value={this.state.status}></input>
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;