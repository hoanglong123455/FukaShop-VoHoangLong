const product = document.querySelector(".product-page");
const id = new URLSearchParams(window.location.search).get("id");
const url = `https://6777b1fe80a79bf919029e20.mockapi.io/KitchenItems/${id}`;

async function getKitchenItem(url) {
  const response = await fetch(url);
  const data = await response.json();
  product.innerHTML = `
    <!-- Phần hình ảnh sản phẩm -->
    <div class="product-images">
      <!-- Đường dẫn ảnh cần được thay đổi theo ảnh thật của bạn -->
      <img src="${data.Img}" alt="Tất Thể Thao Dày Dặn Ấm Áp">
    </div>
    <!-- Phần thông tin sản phẩm -->
    <div class="product-info">
      <h1 class="product-title">${data.NameItem}</h1>
      <div class="product-price">${data.Price}$</div>
      <div class="product-description"> 
        <p>
        ${data.Des}
        </p>
      </div>
      <button class="buy-now">Mua Ngay</button>
    </div>
            `;
}

getKitchenItem(url);