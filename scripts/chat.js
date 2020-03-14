
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

