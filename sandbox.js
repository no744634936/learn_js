const list=document.querySelector("ul");




db.collection("recipes").get().then((resp)=>{
    // console.log(resp);

    //这样在firestore里面取数据是不行的。
    //console.log(resp.docs[0]);

    //只能这样取数据
    //console.log(resp.docs[0].data());

    resp.docs.forEach(doc=>{
        console.log(doc.data());
        
    })
}).catch((error)=>{
    console.log(error);
    
})