const data = [
  {
  name:"sunset",
  image:"https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name:"Mountain",
    image: "https://plus.unsplash.com/premium_photo-1669839774770-df5a3d2da257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name:"Nature",
    image: "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name:"Flower",
    image: "https://images.unsplash.com/photo-1553589656-66c9c6b8f285?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZyZWV8ZW58MHx8MHx8fDA%3D"
  },
  {
    name:"women",
    image: "https://images.unsplash.com/photo-1594583388647-364ea6532257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGZyZWV8ZW58MHx8MHx8fDA%3D"
   },
  {
    name:"cat",
    image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name:"Picnic",
    image:"https://images.unsplash.com/photo-1593034509785-5b17ba49f683?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGljbmljfGVufDB8fDB8fHww"
  },
  {
    name:"rabbit",
    image:"https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    name:"Professional women",
    image:"https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww"
  },
  {
    name:"pink flowers",
    image:"https://images.unsplash.com/photo-1508808703020-ef18109db02f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name:"river",
    image:"https://images.unsplash.com/photo-1600972051891-82c2d7db699c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMG5hdHVyZSUyMHJpdmVyfGVufDB8fDB8fHww"
  },
  {
    name:"panda",
    image:"https://images.unsplash.com/photo-1597953601374-1ff2d5640c85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHxhbmltYWxzfGVufDB8fDB8fHww"
  },
  {
    name:"cartoon girl",
    image:"https://plus.unsplash.com/premium_vector-1724592407176-47153c09ef92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJpbmNlc3N8ZW58MHx8MHx8fDA%3D"
  },
  {
    name:"sketch nature",
image:"https://plus.unsplash.com/premium_vector-1697729804286-7dd6c1a04597?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww"                  
  }
];
let contentContainer=document.querySelector("#contentContainer");
let searchInput=document.querySelector("#searchInput");
function showCards(filterData){
let clutter="";
filterData.forEach((obj)=>{
  clutter+=`  <div class="card">
                <img src=${obj.image}  alt=${obj.name}>
            </div>`
});
contentContainer.innerHTML=clutter;
}
showCards(data);
searchInput.addEventListener("input",function(){
  const searchValue=searchInput.value.toLowerCase();
  const filterdArray=data.filter((obj)=>{
    return obj.name.toLowerCase().includes(searchValue);
  });
  showCards(filterdArray)
})
