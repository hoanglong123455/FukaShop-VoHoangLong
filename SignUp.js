
    document.querySelector('.registration-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn gửi form đi

        // Lấy thông tin từ form
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Lưu thông tin vào Local Storage
        const user = { username, email, password };
        localStorage.setItem("user", JSON.stringify(user));

        // Hiển thị thông báo thành công
        alert('Đăng ký thành công! Vui lòng đăng nhập.');
        window.location.href = "LogIN.html"; // Chuyển hướng đến trang đăng nhập
    });