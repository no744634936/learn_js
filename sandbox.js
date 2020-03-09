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

const deleteRecipe=(id)=>{
    //querySelectorALL  注意是All
    const recipes = document.querySelectorAll('li');
    console.log(recipes);
    recipes.forEach(recipe=>{
        if(recipe.getAttribute("data-id")===id){
            recipe.remove();
        }
    })
}


//onSnapshot 查看数据库的跟新情况
db.collection("recipes").onSnapshot(snapshot=>{
    // console.log(snapshot);
    console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change=>{
        const doc=change.doc;
        if(change.type==="added"){
            getRecipe(doc.data(),doc.id);
        }else if(change.type==="removed"){
            deleteRecipe(doc.id);
        }
    })
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