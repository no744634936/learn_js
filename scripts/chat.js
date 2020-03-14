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
        this.unsub
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
        //只监视room等于特定的room的数据。
        //第一次用orderBy("created_at")的时候会报告错误说，需要建立index，点击错误后面跟的link，建立index即可
        this.unsub=this.chats
            .where("room","==",this.room)
            .orderBy("created_at")
            .onSnapshot(snapshot=>{
            snapshot.docChanges().forEach(change=>{
                if(change.type==="added"){
                    //update the ui.这需要ui class里的方法来做。所以我现在要用一个callback function来做。
                    //传递callback function是为了以后用ui class 里的方法时能更方便一点。
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

        //更改了room但是并没更改 realtime listener里的 room名称
        //要做的就是unsubscribe the real time listener.先关闭然后再开启。
        //if(this.unsub) 的意思是如果this.unsub有值，
        //因为必须在real time listener有值之后才能 unsubcribe real time listener

        if(this.unsub){
            this.unsub();
        }
    }
}

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