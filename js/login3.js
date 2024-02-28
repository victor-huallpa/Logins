function viwPass(){
    const input = document.getElementById('pass'),
        eye = document.getElementById('login-eye');
           
            if(input.type === 'password'){
                input.type = 'text';

                eye.classList.add('ri-eye-line');
                eye.classList.remove('ri-eye-off-line');
            }
            else{
                input.type = 'password';
 
                eye.classList.remove('ri-eye-line');
                eye.classList.add('ri-eye-off-line');
            }
        
}


