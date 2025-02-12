let productData = JSON.parse(localStorage.getItem('productData'));
console.log(productData);
//상품갯수만큼 반복생성
productData.slice(0,3).forEach(function(product){
  let str=`
  <div class="col-md-4">
  <div class="cream_box">
     <div class="cream_img"><img src="${product.image}"></div>
     <div class="price_text">${product.price}won</div>
     <h6 class="strawberry_text">${product.prodName}</h6>
     <div class="cart_bt"><a href="#">Add To Cart</a></div>
  </div>`;

  let target = document.querySelector('div.cream_section_2');
  target.insertAdjacentHTML('beforeend', str);
});