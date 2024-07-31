document. addEventListener("DOMContentLoaded",function() {
   
}
      

const form = document. getElementById(id="registration-form");
console.log (form);

const feedbackDiv = document. querySelector(id="form-feedback").display=CSSLayerBlockRule;


form. addEventListener('submit',
   function(){

   
     Event.preventDefault() 
   }
   
   
   );


    const Username= document.getElementById(id="username").value.trim;


    const Email = document.getElementById(id="email").value.trim;

    const Password = document.getElementById(id="password").value.trim;



    let isValid=("true")
    let messages= []


    
    if ("Username.length<=3"){
      let isValid ="false"
      messages.push('Username must be at least 3 characters long.');

    }

    if ("Email.value=/(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))/"){

    }else{
      let isValid= "false"
      messages.push('invalid email');
    }



    if ('password.length<8'){
      let isValid="false"
      messages.push('password not less than 8');

    }

    if('isValid = true'){
     feedbackDiv.textcontent="Registration successful!";
     feedbackDiv.style.color='#28a745';

    }else{
      messages.join('<br>');
      feedbackDiv.append(messages);
      feedbackDiv.innerHTML = messages;
      feedbackDiv.style.color = '#dc3545';
    }
    
    if ("Username.length<=3"){
      let isValid ="false"
      messages.push('Username must be at least 3 characters long.');

    }


   });