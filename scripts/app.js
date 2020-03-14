//dom queries
const chatList=document.querySelector(".chat-list");
const newChatForm= document.querySelector(".new-chat");

//class instances
const chatUI = new ChatUI(chatList);
const chatroom= new Chatroom("game","zhang");

//get chats and render
chatroom.getChats((data)=>{chatUI.render(data);});

// add a new chat
//'submit',e  为什么不能打上括号？
//当 数据没加入到数据库，因为我设置了real time listener。
//chatroom.getChats 会自动触发callback function。所以加入的数据会实时的显示出来。
newChatForm.addEventListener('submit',e=>{
    e.preventDefault();
    const message=newChatForm.message.value.trim();

    //addChat返回promise
    chatroom.addChat(message).then(()=>{
        //清空输入栏
        newChatForm.reset();
    }).catch((err)=>{
        console.log(err);
    })
})