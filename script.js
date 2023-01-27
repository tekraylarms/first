var courses=[
    {
        name:"anodebx",price:"600"
    },
    {
        name:"jquery",
        price:"500"
    },
    {
          name:"angular",
          price:"400"
    }
];

function genrateList(){
    const ul=document.querySelector(".list-group");
    ul.innerHTML="";
    courses.forEach((course) => {
           const li=document.createElement("li");
           li.classList.add("list-group-item");
        const name1=document.createTextNode(course.name);
           li.appendChild(name1);
           const span=document.createElement("span");
           const price=document.createTextNode(course.price+" Rs");
           span.appendChild(price);
           li.appendChild(span);
           ul.appendChild(li);
    });
}

genrateList();
// window.addEventListener("load",generateList);
const btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
    courses.sort((a,b)=>a.price-b.price);
    genrateList();   
});
