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
    console.log(this.props, 'ProfileStatus')
    return (
      <div>
        {!this.state.modify
          ? <div>
            <span onDoubleClick={this.changeModifyStatus.bind(this, true)}>{this.props.status}</span>
          </div>
          : <div>
            <input  autoFocus={true} onBlur={this.changeModifyStatus.bind(this, false)} value={this.state.status}></input>
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;