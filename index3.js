
    document.querySelector('.login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn gửi form đi

        // Lấy thông tin từ form
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Lấy thông tin người dùng từ Local Storage
        const user = JSON.parse(localStorage.getItem(email));

        if (user && user.password === password) {
            alert('ログイン成功しました！');
            // Chuyển hướng đến trang chính hoặc dashboard
            window.location.href = "index.html";
        } else {
            alert('メールアドレスまたはパスワードが正しくありません。');
        }
    });
