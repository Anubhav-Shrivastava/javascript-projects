class Product {
  // item = "DEFAULT";
  // imageurl;
  // description;
  // price;

  constructor(item, imgurl, descript, price) {
    this.item = item;
    this.imageurl = imgurl;
    this.description = descript;
    this.price = price;
  }
}

class ProductItem{
  constructor(product){
    this.product = product;
  }

    addToCart(){
    console.log('product is being added to cart');
    console.log(this.product)
    }

  render(){
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
      <div>
      <img src='${this.product.imageurl}' alt="${this.product.title}">
      <div class="product-item__content">
      <h2>${this.product.title}</h2> 
      <h3>/$${this.product.price}</h3>
      <p>${this.product.description}</p>
      <button>Add TO Cart</button>
      </div>
      </div>
      `;
      const addCartBtn=prodEl.querySelector('button')
      addCartBtn.addEventListener('click',this.addTocart)
      return prodEl;
  }
}

class ProductList{
  products=[
    new Product(
      "A Soft  Big pillow",
      "https://www.shutterstock.com/image-photo/soft-colorful-pillows-isolated-on-260nw-765777445.jpg",
      299,
      "A Soft Pillow"
     ),
    new Product(
      "A big Carpet",
      "https://www.shutterstock.com/image-photo/soft-colorful-pillows-isolated-on-260nw-765777445.jpg",
      259,
      "An Expencive carpet"
    )
  ];

  constructor(){}
  render(){
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem=new ProductItem(prod);
      const prodEl =productItem.render()
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

//console.log(new Product()) ---output the product class data.
const productList = new ProductList();
productList.render();
