const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img: "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/09/Tteokbokki-yemekcom.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
        id: 2,
        title: "Kimchi",
        category: "Korea",
        price: 13.99,
        img: "https://i.lezzet.com.tr/images-xxlarge-recipe/kimchi-kore-tursusu-09a35f4e-8cb9-46a3-afa0-27209ac817b5.jpg",
        desc: `Korea is known for its fermenting and pickling of foods, and kimchi is at the top of the list.`,
    },    
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWbpg7cuXw7eTMGF8qtQNTErEeGlpN_m8qQ&usqp=CAU",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
    {
        id: 10,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoTzXPulSLzn0shpZMycIA5uPuwkSjU5DpIQ&usqp=CAU",
        desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
];

function createFilterButtons () {
    //Get Categories
    let categories = [];
    categories.push("All");
    menu.forEach(function (item) {
        if (!categories.includes(item.category)) {
            categories.push(item.category);
        }
    });

    //Create Filter Buttons
    let divFilterButtons = document.querySelector(".btn-container");
    categories.forEach(function (item) {
        let filterButton = document.createElement("button");
        filterButton.setAttribute("class", "btn btn-outline-dark btn-item");
        filterButton.setAttribute("onclick", `createProducts('${item}')`);
        filterButton.innerHTML = item;
        divFilterButtons.append(filterButton);
    });
}

function createProducts (category = "All") {
    let divProducts = document.querySelector(".section-center");
    divProducts.innerHTML = "";

    let filteredMenu = {};
    if (category != "All") {
        filteredMenu = menu.filter(function (item) {
            return item.category == category;
        });
    }
    else
        filteredMenu = menu;

    filteredMenu.forEach(function (item) {
        let divProduct = document.createElement("div");
        divProduct.setAttribute("class", "menu-items col-lg-6 col-sm-12");
        divProducts.append(divProduct);

        //Create Images
        let imgProduct = document.createElement("img");
        imgProduct.setAttribute("src", item.img);
        imgProduct.setAttribute("alt", item.title);
        imgProduct.setAttribute("class", "photo");
        divProduct.append(imgProduct);            

        let divDescription = document.createElement("div");
        divDescription.setAttribute("class", "menu-info");
        divProduct.append(divDescription);
    
        let divTitle = document.createElement("div");
        divTitle.setAttribute("class", "menu-title");
        divDescription.append(divTitle);            

        //Create Titles
        let title = document.createElement("h4");
        title.innerHTML = item.title;
        divTitle.append(title);
            
        //Create Prices
        let price = document.createElement("h4");
        price.setAttribute("class", "price");
        price.innerHTML = item.price;
        divTitle.append(price);            

        //Create Description
        let divText = document.createElement("div");
        divText.setAttribute("class", "menu-text");
        divText.innerHTML = item.desc;
        divDescription.append(divText);                   
    });
}

createFilterButtons();
createProducts();