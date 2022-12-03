

let searchBtn = document.querySelector('#search-btn');
let arrow =  document.querySelector('.arrow2');
let searchBar = document.querySelector('.search-bar-container1');
let menuOpenBtn =  document.querySelector('.navbar1 .bx-menu');
let menuCloseBtn =  document.querySelector('.nav-links .bx-x');
let navLinks =  document.querySelector('.nav-links');
let bookArrow =  document.querySelector('.book-arrow');
let aboutArrow =  document.querySelector('.about-arrow');
let aboutusArrow =  document.querySelector('.aboutus-arrow');
let container1 = document.querySelector('.container1');
let formBtn = document.querySelector('#login-btn');
let formClose = document.querySelector('#form-close');
let formClose2 = document.querySelector('#formm-close');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    navLinks.classList.remove('active');
    navLinks.classList.remove('fa-time');
    container1.style.display="none";

}
formBtn.addEventListener("click", function(){
   container1.style.display="flex";
});
formClose.addEventListener("click", function(){
    container1.style.display="none";
});
formClose2.addEventListener("click", function(){
    container1.style.display="none";
});
searchBtn.addEventListener('click', () => {
    arrow.classList.toggle('active');
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

menuOpenBtn.addEventListener('click', () => {
    navLinks.style.left = "0";
    navLinks.classList.toggle('active');
    navLinks.classList.toggle('fa-time');
});
menuCloseBtn.addEventListener('click', () => {
    navLinks.classList.toggle('fa-time');
    navLinks.classList.toggle('active');

});

bookArrow.addEventListener('click', () => {
    navLinks.classList.toggle('show1');
});

aboutArrow.addEventListener('click', () => {
    navLinks.classList.toggle('show2');
});

aboutusArrow.addEventListener('click', () => {
    navLinks.classList.toggle('show3');
});



//transition des formulaires de l'inscription
container1.classList.remove('right-panel-active');   


//show and hide password 
const pass = document.querySelector("#password-si");
const passI = document.querySelector(".controle #pass");
passI.addEventListener('click', ()=>{
    if(pass.type === "password"){
        pass.type = "text";
        passI.add.className("hide");
    }else{
        pass.type = "password";
        passI.add.className("show");
    }
})
//controle de saisie

//formulaire d'inscription
const form = document.querySelector('#form');
const username = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    checkInputs();
   
});

function checkInputs(){
    //get the values from inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    //controle du usernameValue
   if(verif_username(usernameValue) != ''){
       //add error class
       setErrorFor(username, verif_username(usernameValue));}
       else{
       //add succes class
       setSuccessFor(username);   }
   //controle du emailValue
   if(verif_email(emailValue) != ''){
    //add error class
    setErrorFor(email, verif_email(emailValue));}
    else{
        //add succes class
        setSuccessFor(email);}
    if(verif_password(passwordValue) != ''){
        //add error class
        setErrorFor(password, verif_password(passwordValue));}
        else{
        //add succes class
        setSuccessFor(password);   }
        if(password2Value === ''){
            //add error class
            setErrorFor(password2, '* Please Confirm Your Password');}
            else if(password2Value !== passwordValue){
                //add error class
                setErrorFor(password2, "* Password don't match");}
            else{
            //add succes class
            setSuccessFor(password2);   }
}

//formulaire de connexion
const sutt = document.querySelector('.si');
const email_si = document.querySelector('#email-si');
const password_si = document.querySelector('#password-si');
sutt.addEventListener('click' , (e) => {
    e.preventDefault();
    checkInputss();
   
});


function checkInputss(){
    //get the values from inputs
    const emailValue = email_si.value.trim();
    const passwordValue = password_si.value.trim();
    //controle du usernameValue
  
   if(verif_email(emailValue) != ''){
    //add error class
    setErrorFor(email_si, verif_email(emailValue));}
    else{
        //add succes class
        setSuccessFor(email_si);}
    if(verif_password(passwordValue) != ''){
        //add error class
        setErrorFor(password_si, verif_password(passwordValue));}
        else{
        //add succes class
        setSuccessFor(password_si);   }
        }

//Dans le cas ou les données sont invalide
function setErrorFor(input,message){
    const controleForm = input.parentElement;  //  .controle
    const small = controleForm.querySelector('.small');

    //add error message inside small
    small.innerText = message;
    controleForm.className = 'controle error';
}
//Dans le cas ou les données sont valide
function  setSuccessFor(input){    
    const controleForm = input.parentElement;
    controleForm.className = 'controle success';
}

///fonction verif du username
function verif_username(usernameValue){
    var resultat = '';
    if(usernameValue === ''){
        resultat = 'username cannot be blank';
    }else if(usernameValue.length <= 4){
        resultat = '* Username must be at least 5 characters';
     }else if (usernameValue.length> 20){
    resultat = '* Username shoud not exceds 14 characters';}
    else if(usernameValue.charAt(0) === ' ') {      
        resultat = '* Please enter valid Username';  
    }
    else if(alpha(usernameValue) === 0) {      
                resultat = '* Please enter valid Username';  
    }
    return resultat;
}
//tester si une chaine est alphabétique ou non
function alpha(ch){
    ch = ch.toUpperCase();
        for(i=0;i<ch.length;i++){
            if (ch.charAt(i) <'A' || ch.charAt(i) >'Z'){
              i = 0; break;}
        }
    return i;
}
///fonction verif du email
function verif_email(emailValue){
    var resultat = '';
    if(emailValue === ''){
        resultat = '* Email cannot be blank';
    }else if(emailValue.length <= 4){
        resultat = '* email must be at least 5 characters';
     }else if (emailValue.length > 40){
        resultat = '* email shoud not exceds 40 characters';}
    else if (emailValue.indexOf('@')< 1){
        resultat = "* Email Invalid    exemple:'abc@gamil.com'";}
    else if (emailValue.indexOf('.')< 1){
        resultat = "* Email Invalid    exemple:'abc@gamil.com'";}  
     return resultat;
}
///fonction verif du password
function verif_password(passwordValue){
    var resultat = '';
    if(passwordValue === ''){
        resultat = '* Please Provide a Password';
    }else if(passwordValue.length <= 4){
        resultat = '* Password must be at least 5 characters';
     }else if (passwordValue.length > 10){
    resultat = '* Password shoud not exceds 10 characters';}
     return resultat;
}
//formulaire de connexion
const btn = document.querySelector('.btn');
const email_contact = document.querySelector('#email-contact');
sutt.addEventListener('click' , (d) => {
    d.preventDefault();
    checkInputss();
   
});


function checkInputs_contact(){
    //get the values from inputs
    const email_contactValue = email_contact.value.trim();
    //const passwordValue = email_contacti.value.trim();
    //controle du usernameValue
  
   if(verif_email(email_contactValue) != ''){
    //add error class
    setErrorFor(email_contact, verif_email(email_contactValue));}
    else{
        //add succes class
        setSuccessFor(email_si);}
    if(verif_password(passwordValue) != ''){
        //add error class
        setErrorFor(email_contact, verif_password(passwordValue));}
        else{
        //add succes class
        setSuccessFor(email_contact);   }
        }

        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        signUpButton.addEventListener('click', ()=>{
            container1.classList.add('right-panel-active');
        } );
        signInButton.addEventListener('click', ()=>{container1.classList.remove('left-panel-active');
        } );


  