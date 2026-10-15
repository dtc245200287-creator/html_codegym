/* Xem trước sản phẩm: minh họa tương tác không yêu cầu máy chủ. */
const products = {
  headphones: { name: 'Tai nghe Airwave', detail: 'Tai nghe không dây thiết kế tối giản, trải nghiệm âm thanh hiện đại.', price: '890.000đ', image: 'assets/headphones.svg' },
  watch: { name: 'Đồng hồ Orbit', detail: 'Đồng hồ thông minh với màn hình sắc nét và phong cách năng động.', price: '1.290.000đ', image: 'assets/watch.svg' },
  speaker: { name: 'Loa Mini Beat', detail: 'Loa bluetooth nhỏ gọn, tiện lợi trong mọi hành trình.', price: '590.000đ', image: 'assets/speaker.svg' },
  camera: { name: 'Máy ảnh Snap', detail: 'Máy ảnh compact cho những khoảnh khắc đáng nhớ.', price: '2.490.000đ', image: 'assets/camera.svg' }
};
const dialog = document.querySelector('#productDialog');
for (const button of document.querySelectorAll('[data-modal-product]')) {
  button.addEventListener('click', () => {
    const product = products[button.dataset.modalProduct];
    if (!product || !dialog) return;
    document.querySelector('#dialogName').textContent = product.name;
    document.querySelector('#dialogDesc').textContent = product.detail;
    document.querySelector('#dialogPrice').textContent = product.price;
    const img = document.querySelector('#dialogImage');
    img.src = product.image;
    img.alt = product.name;
    dialog.showModal();
  });
}
for (const button of document.querySelectorAll('[data-close-dialog]')) {
  button.addEventListener('click', () => dialog.close());
}
if (dialog) dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
