const user = JSON.parse(localStorage.getItem("userCheck"));
if (user){
    document.getElementById("checkUser").innerHTML = `Welcome ${user} <button onclick="logout()">Logout</button>`;
}
else{
    document.getElementById("checkUser").innerHTML = `
        <li><a href="SignUp.html">Đăng ký</a></li>
        <li><a href="LogIN.html">Đăng nhập</a></li>
    `;
}   

function logout(){
    localStorage.removeItem("userCheck");
    window.location.href = "index.html";
}