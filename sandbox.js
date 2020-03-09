const list=document.querySelector("ul");
const form=document.querySelector("form");


//获取数据。
const getRecipe=(recipe,id)=>{

    //firestore timeStamp.it is a special object
    let time=recipe.created_at.toDate();
    let html=`
        <li data-id="${id}">
            <div>${recipe.title}</div>
            <div>${time}</div>
            <button class="btn btn-danger btn-sm my-2">delete</button>
        </li>
    `;
    list.innerHTML+=html;
}



db.collection("recipes").get().then((resp)=>{
    // console.log(resp);

    //这样在firestore里面取数据是不行的。
    //console.log(resp.docs[0]);

    //只能这样取数据
    //console.log(resp.docs[0].data());

    resp.docs.forEach(doc=>{
        // console.log(doc.data());
        getRecipe(doc.data(),doc.id);
        
    })
}).catch((error)=>{
    console.log(error);
    
})


//add data(document)
form.addEventListener("submit",e=>{
    e.preventDefault();
    const now=new Date();
    const recipe={
        //recipe is input id
        title:form.recipe.value,
        //load in index.html use the firebase-app.js
        created_at:firebase.firestore.Timestamp.fromDate(now),
    }

    //add methods to add new document to a collection
    db.collection("recipes").add(recipe).then(()=>{
        console.log("recipe added");
    }).catch(err=>{
        console.log(err);
        
    })
})


//deleting data
list.addEventListener("click",e=>{
    // console.log(e); 点击哪里target就会显示那个元素。
    if(e.target.tagName==="BUTTON"){
        const id=e.target.parentElement.getAttribute("data-id");
        db.collection("recipes").doc(id).delete().then(()=>{
            console.log("deleted");
            
        })
    }

})