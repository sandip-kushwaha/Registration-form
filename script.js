 let pass = document.getElementById('password');
        let flag = 1;  //1 -> no error | 0 -> yes error

           function check(elem){
              if(elem.value.length>0){
                  if(elem.value != pass.value){
                      document.getElementById('alert').innerHTML ="confirm password does not match ";
                      flag = 0;
                  }
                  else{
                      document.getElementById('alert').innerHTML = "";
                      flag=1;
                  }
              }else{
                  document.getElementById('alert').innerHTML = "Please enter confirm password";
                  flag=0;
              }
          }

       function validate(){
        if (flag==1){
            return true;
        }
        else{
            return false;
        }
       }

    // Space  check
    let patten = /\s/g;
    let alert = document.getElementById('alert');

    function white(data){
        let isSpace = patten.test(data);
        if(isSpace){
            alert.innerText="Space is not allow";
            flag=0;
        }else{
            alert.innerText="";
            flag=1;
        }
    }

    // password check using RegExp(Regular Expressions) 
   function passwordcheck(data){
        let passClass = document.getElementsByClassName('password-check');

        const eightChar = new RegExp('(?=.{8,})');
        const loweCase = new RegExp('(?=.*[a-z])');
        const upperCase = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const specialChar = new RegExp('(?=.*[!@#$%^&?\/*])');
        

        if(eightChar.test(data)){
            passClass[0].style.color = "green";
            flag=1;
        }else{
            passClass[0].style.color = "grey";
            flag=0;
        }

        if(loweCase.test(data)){
            passClass[1].style.color="green";
            flag=1;
        }else{
            passClass[1].style.color="grey";
            flag=0;
        }

        if(upperCase.test(data)){
            passClass[2].style.color="green";
             flag=1;
        }else{
            passClass[2].style.color="grey";
            flag=0;
        }

        if(number.test(data)){
            passClass[3].style.color="green";
             flag=1;
        }else{
            passClass[3].style.color="grey";
            flag=0;
        }

        if(specialChar.test(data)){
            passClass[4].style.color="green";
             flag=1;
        }else{
            passClass[4].style.color="grey";
             flag=0;
        }
   
   }
