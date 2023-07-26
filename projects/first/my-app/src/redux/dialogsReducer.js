
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 9,
        message: action.message,
        messageOwner: 'me',
      }
      state.messagesData.push(newMessage);
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.messageSymbol;
      return state;
    default: return state;
  }
}

export const sendMessageAcionCreator = (text) => ({
  type: ADD_MESSAGE,
  message: text,
});

export const characterToStateActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  messageSymbol: text,
})


export default dialogsReducer;