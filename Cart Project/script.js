const data = [
    {
        name: "Shoes",
        Headline: "Comfortable running shoes",
        price: 2999,
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "face mist",
        Headline: "Aloe&rose water",
        price: 1000,
        image: "https://images.unsplash.com/photo-1601065873952-f999b9a62da7?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Face cleanser",
        Headline: "Gel Facial Cleanser",
        price: 800,
        image: "https://images.unsplash.com/photo-1748639320154-6ba118bccc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNraW5jYXJlJTIwZmFjZXdhc2h8ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Neutrogena Sunscreen",
        Headline: "SPF 50+ PA+++",
        price: 1500,
        image: "https://images.unsplash.com/photo-1654973552952-d0c98a3e3388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bnNjcmVlbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Lip gloss",
        Headline: "Fenty beauty",
        price: 3500,
        image: "https://images.unsplash.com/photo-1687195821497-fed0346cdc34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxpcGdsb3NzfGVufDB8fDB8fHww"
    },
    {
        name: "Handbag",
        Headline: "Italian made",
        price: 5000,
        image: "https://images.unsplash.com/photo-1683921590274-a83862cb11c3?q=80&w=419&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Miss Dior",
        Headline: "EAU DE Perfume",
        price: 10000,
        image: "https://images.unsplash.com/photo-1612813033813-d360b1cc5187?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Becca Lipstick",
        Headline: "Shade 087",
        price: 500,
        image: "https://images.unsplash.com/photo-1555050455-f96634b5cba6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
];

const Popular = [
    {
        name: "Neutrogena Sunscreen",
        Headline: "SPF 50+ PA+++",
        price: 1500,
        image: "https://images.unsplash.com/photo-1654973552952-d0c98a3e3388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bnNjcmVlbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "Miss Dior",
        Headline: "EAU DE Perfume",
        price: 10000,
        image: "https://images.unsplash.com/photo-1612813033813-d360b1cc5187?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Handbag",
        Headline: "Italian made",
        price: 5000,
        image: "https://images.unsplash.com/photo-1683921590274-a83862cb11c3?q=80&w=419&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Lip gloss",
        Headline: "Fenty beauty",
        price: 3500,
        image: "https://images.unsplash.com/photo-1687195821497-fed0346cdc34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxpcGdsb3NzfGVufDB8fDB8fHww"
    },
    {
        name: "Face cleanser",
        Headline: "Gel Facial Cleanser",
        price: 800,
        image: "https://images.unsplash.com/photo-1748639320154-6ba118bccc74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNraW5jYXJlJTIwZmFjZXdhc2h8ZW58MHx8MHx8fDA%3D"
    },
]

function addProducts() {
    var clutter = "";
    data.forEach(function (product) {
        clutter += `<div class="product">
            <div class="imgContainer">
                 <img src="${product.image}" alt="">
            </div>
             <div class="subContainer">
                <div class="titleContainer">
                     <p class="titleName">${product.name}</p>
             <p class="headline">${product.Headline}</p>
            <p class="price">&#8377; ${product.price}</p>
                </div>
            <div class="iconContainer">
                 <i class="ri-add-fill"></i>
            </div>
           </div>
        </div>`;
    }
    )
    document.querySelector("#productContainer").innerHTML = clutter;
}
addProducts();
function addPopularProducts(){
    let clutter="";
    Popular.forEach(function(popularproduct){
        clutter+=` <div class="popularMain">
      <div class="popularImage">
        <img src="${popularproduct.image}" alt="">
      </div>  
      <div class="popularDescription">
        <p class="popularProuctTitle">${popularproduct.name}</p>
        <p class="popularProductHeadline">${popularproduct.Headline}</p>
        <p class="popularProductPrice">&#8377; ${popularproduct.price}</p>
      </div>
    </div>`
    })
    document.querySelector("#popularContainer").innerHTML=clutter;
}
addPopularProducts();