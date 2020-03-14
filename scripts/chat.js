<<<<<<< HEAD

//adding new chat documents
//setting up a real-time listener to get new chats
//updating the username
//updating the chat room
=======
>>>>>>> d022207d85520e7558e2a51f0151901d0cef9527

//第二部将从数据库里获得的数据通过ui显示出来。看app.js 文件

class Chatroom{
    constructor(room_name,username){
        this.room=room_name;
        this.username=username;
        this.chats=db.collection("chats");
        this.unsub
    }


    async addChat(message){
        let now=new Date();
        let chat={
            message:message,
            username:this.username,
            room:this.room,
            created_at:firebase.firestore.Timestamp.fromDate(now),
        }

        let response=await this.chats.add(chat);
        return response;
    }

    getChats(callback_function){
        this.unsub=this.chats
            .where("room","==",this.room)
            .orderBy("created_at")
            .onSnapshot(snapshot=>{
            snapshot.docChanges().forEach(change=>{
                if(change.type==="added"){
                    callback_function(change.doc.data());
                }
            });
        });
    }
    updateName(username){
        this.username=username;
    }

    updateRoom(room){
        this.room=room;
        if(this.unsub){
            this.unsub();
        }
    }
}


/*
//在这里可以改变room跟username
const chatroom= new Chatroom("game","zhang");

//首先获取数据库里的数据
chatroom.getChats((data)=>{
    console.log(data);
});


//10钟之后update chatroom name
setTimeout(()=>{
    chatroom.updateRoom("general");
    chatroom.updateName("huang");

    //跟新了room名了之后再重新获取数据
    chatroom.getChats((data)=>{
        console.log(data);
    });

    chatroom.addChat("hello");
},10000)
*/

