class product {
  // title="DEFAULT"
  // imageUrl;
  // price;
  // description;
  constructor(title, image, price, desc) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.discription = desc;
  }
}
class shopingcart{
  items = [];
  render() {
    const cartEl = document.createElement("section");
    cartEl.innerHTML = `
      <h3>Totle: \$${0}</h3>
      <button>AddToCart</button>
      `;
    cartEl.className = "cart";
    return cartEl;
  }
}
class productItem {
  constructor(product) {
    this.product = product;
  }

  addtoCart() {
    //console.log("adding to cart......");
    let cost = this.product.price;
    console.log(price)
  }

  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "produce-Item";
    prodEl.innerHTML = `
        <div class="prod-container">
        <img  src='${this.product.imageUrl}'' alt='${this.product.title}'>
        <div class="product_Items_content">
        <h2>${this.product.title}</h2>
        <h3>${this.product.price}</h3>
        <p>${this.product.discription}</p>
        <button id="addToCartBtn">Add To Cart</button>
        </div>
        </div>
        `;
    const addCartBtn = prodEl.querySelector("button");
    addCartBtn.addEventListener("click", this.addtoCart.bind(this));
    return prodEl;
  }
}
// console.log(new product())
class ProductList {
  products = [
    new product(
      "Crpet",
      "https://m.media-amazon.com/images/I/81W6An71HSL._AC_UF894,1000_QL80_.jpg",
      250,
      "The best Carpet you get a this price"
    ),
    new product(
      "Pillow",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkIuo5XkVrgMI367RuyIfd2g3-id0CJ3c0w",
      199,
      "A comfertable pillow"
    ),
    new product(
      "Bed",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-2rZrseBmQQb3d5CNMm4kWXUdu3BB1zTiHMd7sFUAqB6sl7ZNJDBPCOAsJzg5cpNB-I",
      199,
      "A comfertable Bed"
    ),
    new product(
      "Mattress",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1P5wqh1Wj43OR-WJwTGjpXUaTk-N9sKv0pA",
      199,
      "comfertable Enought to make you sleep"
    ),
    new product(
      "Table Lamp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeQkepThlcE5srgKECikhaag55hLRJpx1o9w",
      199,
      "Perfect Light For you"
    ),
    new product(
      "Table",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8TP1luvS23rX-1EEW5iQOQmJsNxzLEvrog",
      199,
      "A table"
    ),
  ];
  constructor() {}
  render() {
    let prodList = document.createElement("ul");
    prodList.className = "product-List";
    for (let prods of this.products) {
      const productitem = new productItem(prods);
      const prodEl = productitem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class shop {
  render() {
    const renderHook = document.getElementById("app");

    const shopCart = new shopingcart();
    const ShopEl = shopCart.render();
    const productlist = new ProductList();
    const productEl = productlist.render();

    renderHook.append(ShopEl);
    renderHook.append(productEl);
  }
}

const Shop = new shop();
Shop.render();

const search = () => {
    const searchBox = document.getElementById("searchtext").value.trim().toUpperCase();
    const productItems = document.querySelectorAll(".produce-Item");
  
    for (let i = 0; i < productItems.length; i++) {
      let match = productItems[i].querySelector("h2");
  
      if (match) {
        let textValue = match.textContent || match.innerText;
        textValue = textValue.trim().toUpperCase();
  
        if (textValue.indexOf(searchBox) > -1) {
          productItems[i].style.display = "";
        } else {
          productItems[i].style.display = "none";
        }
      }
    }
  };