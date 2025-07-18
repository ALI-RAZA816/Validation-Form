let submitBtn = document.getElementById('submit-btn');
let names = document.getElementById('name');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let message = document.getElementById('message');

    function validationName(){
        let name_error = document.getElementById('name-error');
        if(names.value.length <= 0){
            name_error.textContent = 'field is required';
            return false;
        }
        if(!names.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
            name_error.textContent = 'Write full name';
            return false;
        }
        name_error.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
    names.addEventListener('keyup',validationName);
    


    function validationPhone(){
        let phone_error = document.getElementById('phone-error');
        if(phone.value.length <= 0){
            phone_error.textContent = 'field is required';
            return false;
        }
    
        if(phone.value.length !== 10){
            phone_error.textContent = 'phone no should be 10 digits';
            return false;
        }
        
        if(!phone.value.match(/^[0-9]{10}$/)){
            phone_error.textContent = 'only digits please';
            return false;
        }
        phone_error.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
    phone.addEventListener('keyup',validationPhone);



    function validationEmail(){
        let email_error = document.getElementById('email-error');
        if(email.value.length <= 0){
            email_error.innerHTML = 'Email is required';
            return false;
        }
        
        if(!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
            email_error.innerHTML = 'invalid email';
            return false;
        }
        email_error.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
    email.addEventListener('keyup',validationEmail);
   


    function validationMessage(){
        let message_error = document.getElementById('message-error');
        if(message.value.length <= 30){
            message_error.innerHTML = '30 character reqired';
            return false;
        }
        message_error.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
    message.addEventListener('keyup',validationMessage);
    
  
        submitBtn.addEventListener('click',(event)=>{
            event.preventDefault();
            let error = document.getElementById('error');
            if(!validationName() || !validationPhone() || !validationEmail() || !validationMessage()){
                error.style.display = 'block';
                setTimeout(()=>{
                    error.style.display = 'none';
                },2000);
                return false;
            }
        });