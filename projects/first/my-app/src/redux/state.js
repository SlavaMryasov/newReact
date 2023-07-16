
  
 
  

  let state = {
    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'Вася Пупкин' },
            { id: 2, name: 'Петя Кошкин' },
            { id: 3, name: 'Лена Полено' },
            { id: 4, name: 'Оля Икота' },
            { id: 5, name: 'Игорь Иванов' },
            { id: 6, name: 'Жанна Дарк' },
          ],
         messagesData :[
            { id: 1, message: 'Иван на цыпочках подошел к цыпленку и цыцнул цыц'},
            { id: 2, message: 'Мама мыла раму' , messageOwner:'me'},
            { id: 3, message: 'Бык тупогуб тупогубенький бычек' },
            { id: 4, message: 'Картошка домашняя свежая очень вкусная' , messageOwner:'me'},
            { id: 5, message: 'Иван на цыпочках подошел к цыпленку и цыцнул цыц'},
            { id: 6, message: 'Мама мыла раму' , messageOwner:'me'},
            { id: 7, message: 'Бык тупогуб тупогубенький бычек' },
            { id: 8, message: 'Картошка домашняя свежая очень вкусная' , messageOwner:'me'},
          ]
    }
    

  }

  export let addMessage = (message) => {
    let newMessage = {
      id: 9,
      message: message,
      messageOwner: 'me',
    }
    state.dialogsPage.messagesData.push(newMessage)
  }

  export default state;