export let store = {
  _state: {
    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'Вася Пупкин' },
        { id: 2, name: 'Петя Кошкин' },
        { id: 3, name: 'Лена Полено' },
        { id: 4, name: 'Оля Икота' },
        { id: 5, name: 'Игорь Иванов' },
        { id: 6, name: 'Жанна Дарк' },
      ],
      sayNames() {
        for (let i = 0; i < this.dialogsData.length; i++) {
          console.log(this.dialogsData[i].name)
        }
      },
      messagesData: [
        { id: 1, message: 'Иван на цыпочках подошел к цыпленку и цыцнул цыц' },
        { id: 2, message: 'Мама мыла раму', messageOwner: 'me' },
        { id: 3, message: 'Бык тупогуб тупогубенький бычек' },
        { id: 4, message: 'Картошка домашняя свежая очень вкусная', messageOwner: 'me' },
        { id: 5, message: 'Иван на цыпочках подошел к цыпленку и цыцнул цыц' },
        { id: 6, message: 'Мама мыла раму', messageOwner: 'me' },
        { id: 7, message: 'Бык тупогуб тупогубенький бычек' },
        { id: 8, message: 'Картошка домашняя свежая очень вкусная', messageOwner: 'me' },
      ],
      newMessageText: '',
    }


  },
  getState() {
    return (this._state)
  },
  rerender() {
    console.log('blabla')
  },
  // addMessage(message) {
  //   let newMessage = {
  //     id: 9,
  //     message: message,
  //     messageOwner: 'me',
  //   }
  //   this._state.dialogsPage.messagesData.push(newMessage)
  //   this.rerender(this._state)
  // },
  // updateNewMessageText(messageSymbol) {
  //   this._state.dialogsPage.newMessageText = messageSymbol;
  //   this.rerender(this._state);
  // },
  subscribe(observer) {
    this.rerender = observer
  },

  dispatch(action){
    if (action.type === 'ADD_MESSAGE'){
      let newMessage = {
      id: 9,
      message: action.message,
      messageOwner: 'me',
    }
    this._state.dialogsPage.messagesData.push(newMessage)
    this.rerender(this._state)
    } else if(action.type === 'UPDATE_NEW_MESSAGE_TEXT'){
      this._state.dialogsPage.newMessageText = action.messageSymbol;
    this.rerender(this._state);
    }
  }


}


store._state.dialogsPage.sayNames()

export default store;
