//dom queries
const chatList=document.querySelector(".chat-list");
const newChatForm= document.querySelector(".new-chat");
const newUsernameForm=document.querySelector(".new-name");
const updateMessage=document.querySelector(".update-mssg");
const rooms=document.querySelector(".chat-rooms");

//check local storage for username.
const username=localStorage.chatroom_username ? localStorage.chatroom_username : "no name";

//class instances
const chatUI = new ChatUI(chatList);
const chatroom= new Chatroom("game",username);

//get chats and render
chatroom.getChats((data)=>{chatUI.render(data);});

// add a new chat
newChatForm.addEventListener('submit',e=>{
    e.preventDefault();
    const message=newChatForm.message.value.trim();
    chatroom.addChat(message).then(()=>{
        newChatForm.reset();
    }).catch((err)=>{
        console.log(err);
    })
})


//update username.
newUsernameForm.addEventListener("submit",e=>{
    e.preventDefault();
    const newUsername=newUsernameForm.name.value.trim();
    chatroom.updateName(newUsername);

    //reset input 
    newUsernameForm.reset();

    //show and hide update message.
    updateMessage.innerHTML=`your name is update to ${newUsername}`;
    setTimeout(()=>{
        updateMessage.innerHTML="";
    },3000);
})

//update chatroom
rooms.addEventListener("click",e=>{
    // console.log(e);
    if(e.target.tagName==="BUTTON"){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute("id"));
        chatroom.getChats((data)=>{chatUI.render(data);});
    }
    
})