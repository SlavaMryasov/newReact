import React from "react";


class ProfileStatus extends React.Component {
  state = {
    modify: false
  }

  changeModifyStatusOnTrue() {
    //console.log(this.state.modify)
    this.setState({ // АСИНХРОНЩИНА
      modify: true
    })
    // console.log(this.state.modify)
  }

  changeModifyStatusOnFalse() { // контекст потеряется, надо байндить
    this.setState({
      modify: false
    })
  }
  render() {
    return (
      <div>
        {!this.state.modify
          ? <div>
            <span onDoubleClick={this.changeModifyStatusOnTrue.bind(this)}>{this.props.status}</span>
          </div>
          : <div>
            <input autoFocus={true} onBlur={this.changeModifyStatusOnFalse.bind(this)} value={this.props.status}></input>
          </div>
        }
      </div>
    )
  }
}

export default ProfileStatus;