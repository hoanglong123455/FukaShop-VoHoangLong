
    document.querySelector('.login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn gửi form đi

        // Lấy thông tin từ form
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Lấy thông tin người dùng từ Local Storage
        const user = JSON.parse(localStorage.getItem("user"));

        if (user.email === email && user.password === password) {
            alert('Đăng nhập thành công!');
            // Chuyển hướng đến trang chính hoặc dashboard
            localStorage.setItem("userCheck", JSON.stringify(user.username));
            window.location.href = "index.html";
        } else {
            alert('Địa chỉ email hoặc mật khẩu không đúng.');
        }
    });
