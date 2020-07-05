
let emails =[];

const ADD_EMAIL = (event) =>{
    event.preventDefault(); // to stop the form submitting
    const $form = document.querySelector("#form");
    const $msg = document.getElementById('msg');
    const email = $form.email.value; 
    
    if (validateEmail(email)) {
        let email = {
            id: Date.now(), // to generate id n°
            address: document.getElementById('address').value
        }
    
        emails.push(email);        
        $msg.innerHTML = 'E-mail válido';
        $msg.style.color = '#3dad48';
        console.warn('added' , {emails} );
    
        // saving to local storage    
        localStorage.setItem('ClientsEmailAddresses', JSON.stringify(emails));
        document.forms[0].reset(); // to clear the form
        pageRedirect();        
    } else {        
        $msg.innerHTML = 'El e-mail ingresado no es válido';
        $msg.style.color = '#ff0000';
        document.forms[0].reset(); // to clear the form
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', ADD_EMAIL);
});


/* VALIDATION CLIENT SIDE */

function validateEmail(email){
    const $msg = document.getElementById('msg');
    if(email.length === 0){
        return false;
    }
    if(email.length >= 50) {
        return false;
    }

    if(!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)){    // if not RegEx
        return false;
    }
    
    return true;
    
}

/* REDIRECT FUNCTION */

function pageRedirect(){
        const delay = 5000; // time in milliseconds
       
        // Display message to EDIT
        document.querySelector("#redirect-msg").innerHTML = "Por favor espere, esta siendo redirigido a una nueva página.";
        
        setTimeout(function(){
         window.location = "success.html"; // to do better
        },delay);
}


/* to do UNIT TEST OF VALIDATION FUNCTION */
