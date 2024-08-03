document.addEventListener('DOMContentLoaded', function() {
    // Dữ liệu JSON trực tiếp trong file JavaScript
    const data = {
        "images": [
            "/image/03082024-1141.jpg",
            "/image/03082024-1155.jpg",
            "/image/03082024-1156.jpg"
        ],
        "title": "Bạn sẽ chọn gì?",
        "description": "mình chọn TIM nhé",
        "url": "https://shopee.vn/",
        "redirect_url": "https://s.shopee.vn/8Up3rfR0Az"
    };

    // Chọn ngẫu nhiên một URL ảnh từ danh sách
    const randomImage = data.images[Math.floor(Math.random() * data.images.length)];

    // Cập nhật thẻ meta Open Graph
    document.getElementById('og-title').setAttribute('content', data.title);
    document.getElementById('og-description').setAttribute('content', data.description);
    document.getElementById('og-image').setAttribute('content', randomImage);
    document.getElementById('og-url').setAttribute('content', data.url);

    // Chuyển hướng người dùng sau 2 giây
    setTimeout(() => {
        window.location.href = data.redirect_url;
    }, 100);
});
