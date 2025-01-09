
    document.querySelector('.registration-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn gửi form đi

        // Lấy thông tin từ form
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Lưu thông tin vào Local Storage
        const user = { username, email, password };
        localStorage.setItem(email, JSON.stringify(user));

        // Hiển thị thông báo thành công
        alert('登録が完了しました！ログインしてください。');
        window.location.href = "index2.html"; // Chuyển hướng đến trang đăng nhập
    });