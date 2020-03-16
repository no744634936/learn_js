console.log("dom file");
const body=document.querySelector("body");

export const styleBody=()=>{
     body.style.background="peachpuff";
};

export const addTitle=(text)=>{
    const title=document.createElement("h1");
    title.textContent=text;
    body.appendChild(title);
};

export const contact="zhanghaifeng1123@gmail.com";

styleBody();
addTitle("hello world from dom file");

//这种export 更简洁 不用在每一个方法前加上export
// export {styleBody,addTitle,contact}