//adding new chat documents
//setting up a real-time listener to get new chats
//updating the username
//updating the chat room


//manage chatroom data
class Chatroom{
    constructor(room_name,username){
        this.room=room_name;
        this.username=username;
        this.chats=db.collection("chats");
    }

    //需要话时间的，存储数据都用async方法。他返回的是一个promise
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
        this.chats.onSnapshot(snapshot=>{
            snapshot.docChanges().forEach(change=>{
                if(change.type==="added"){
                    //update the ui.这需要ui class里的方法来做。所以我现在要用一个callback function来做。
                    //传递callback function是为了以后用ui class 里的方法时能更方便一点。
                    callback_function(change.doc.data());
                }
            });
        });
    }
}

const chatroom= new Chatroom("game","zhang");
chatroom.addChat("hello zhang")
    .then(()=>{
        console.log("message added");
    }).catch(err=>{
        console.log(err);
    })

//这是一个real time listener。当数据库里的发生改变时触发
chatroom.getChats((data)=>{
    console.log(data);
})