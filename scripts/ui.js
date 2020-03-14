//render chats to dom
//clear the list of chats (when the room changes)
//class  名首字母要大写
class ChatUI{
    constructor(list){
        this.list=list;
    }

    //render 的data是 getChats(callback_function) 里面callback_function的参数。
    render(data){
        const html=`
            <li class="list-group-item">
                <span class="username" style="font-weight:bold;">${data.username}</span>
                <span>${data.message}</span>
                <div class="time">${data.created_at.toDate()}</div>
                </li>
        `;
        this.list.innerHTML+=html;
    }
}