document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();

    let fullname = document.getElementById('fullname').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirm = document.getElementById('confirm').value.trim();

    let isValid = true;

    let errName = document.getElementById('err-fullname');
    let inputName = document.getElementById('fullname');
    if(fullname === ""){
        errName.innerText = "X ho ten khong duoc de trong";
        errName.className = "error";
        inputName.className = "error";
        isValid = false;
    } else {
        errName.innerText = "V hop le";
        errName.className ="success";
        inputName.className= "succes";
    }

    let errEmail = document.getElementById('err-email');
    let inputEmail = document.getElementById('email');
    let emailParent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailParent.test(email)){
        errEmail.innerText = "X email khong hop le";
        errEmail.className = "error";
        inputEmail.className = "error";
    } else {
        errEmail.innerText = " V hop le";
        errEmail.className = "success";
        inputEmail.className = "succsess";
    }

    let errPass = document.getElementById('err-password');
    let inputPass = document.getElementById("password");
    if( password.length <6){
        errPass.innerText = "Mat khau co it nhat 6 ki tu";
        errPass.className = "error";
        inputPass = "error";
        isValid = false;
    } else {
        errPass.innerText = 'error';
        errPass.className = 'error';
        inputPass.className = "cuccess";
    }

    let errConfirm = document.getElementById('confirm');
    let inputConfirm = document.getElementById('confirm');
    if(confirm ==='' || confirm != password){
        errConfirm.innerText = 'mat khau khong khop';
        errConfirm.className = 'error';
        inputConfirm.className = 'error';
    } else{
        errConfirm.innerText = 'hop le';
        errConfirm.className = 'cuccsess';
        inputConfirm.className = 'cuccess';
    }

    if(isValid){
        alert('Dang ky thanh cong');
    }
});