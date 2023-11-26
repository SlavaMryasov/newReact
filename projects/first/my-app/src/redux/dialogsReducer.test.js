import dialogsReducer, {sendMessageActionCreator} from "./dialogsReducer"
//import postsReducer from "./postsReducer";



test('text of new messages to be {it kamasutra}', () => {
  let action = sendMessageActionCreator('it kamasutra')
// 1 test data
  let state ={messagesData: [
    { id: 1, message: 'Hi! How are you?', likesCount: 2 },
    { id: 2, message: 'it is my first post!', likesCount: 3 },
    { id: 3, message: 'shikaka!', likesCount: 5 },
  ]}
// 2 action
 let newState = dialogsReducer(state,action)
// 3 expect
expect(newState.messagesData[3].message).toBe('it kamasutra')
})

//let newState