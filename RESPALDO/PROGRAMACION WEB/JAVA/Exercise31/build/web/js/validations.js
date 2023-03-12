
function idValidation(){
    
    var regexId = /[0-9]+$/;
    var employeeId = document.getElementById('employeeId').value;
    var groupEmployeeId = document.getElementById("groupEmployeeId");
    var iEmployeeId = document.getElementById('iEmployeeId');
    var messageErrorId = document.getElementById('messageErrorId');
    var aux;
    
    if(regexId.test(employeeId)){
        groupEmployeeId.classList.remove('formGroupIncorrect');
        groupEmployeeId.classList.add('formGroupCorrect');
        iEmployeeId.classList.remove('fa-times-circle');
        iEmployeeId.classList.add('fa-check-circle');
        
        aux = true;
        
    }else{
        groupEmployeeId.classList.remove('formGroupCorrect');
        groupEmployeeId.classList.add('formGroupIncorrect');
        iEmployeeId.classList.remove('fa-check-circle');
        iEmployeeId.classList.add('fa-times-circle');
        
        aux = false;
    }
    
    return aux;
    
}

function nameValidation(){
    
    var regexName = /^[a-zA-Z ]+$/;
    var name = document.getElementById('name').value;
    var groupEmployeeName = document.getElementById('groupEmployeeName');
    var iEmployeeName = document.getElementById('iEmployeeName');
    var messageErrorName = document.getElementById('messageErrorName');
    var aux;
    
    if(regexName.test(name)){
        groupEmployeeName.classList.remove('formGroupIncorrect');
        groupEmployeeName.classList.add('formGroupCorrect');
        iEmployeeName.classList.remove('fa-times-circle');
        iEmployeeName.classList.add('fa-check-circle');
        messageErrorName.classList.remove('formInputErrorActive');
        messageErrorName.classList.add('formInputErrorDesactive');
        
        aux = true;
        
    }else{
        groupEmployeeName.classList.remove('formGroupCorrect');
        groupEmployeeName.classList.add('formGroupIncorrect');
        iEmployeeName.classList.remove('fa-check-circle');
        iEmployeeName.classList.add('fa-times-circle');
        messageErrorName.classList.remove('formInputErrorDesactive');
        messageErrorName.classList.add('formInputErrorActive');
        
        aux = false;
    }
    
    return aux;
    
}

/*function bornYearValidation(){
    
    var regexBornYear = /[0-9]+$/;
    var bornYear = document.getElementById('bornYear').value;
    var groupChickenBornYear = document.getElementById("groupChickenBornYear");
    var iChickenBornYear = document.getElementById('iChickenBornYear');
    var messageErrorBornYear = document.getElementById('messageErrorBornYear');
    var aux;
    
    var date = new Date();
    
    if(regexBornYear.test(bornYear) && bornYear <= date.getFullYear()){
        groupChickenBornYear.classList.remove('formGroupIncorrect');
        groupChickenBornYear.classList.add('formGroupCorrect');
        iChickenBornYear.classList.remove('fa-times-circle');
        iChickenBornYear.classList.add('fa-check-circle');
        messageErrorBornYear.classList.remove('formInputErrorActive');
        messageErrorBornYear.classList.add('formInputErrorDesactive');
        
        aux = true;
        
    }else{
        groupChickenBornYear.classList.remove('formGroupCorrect');
        groupChickenBornYear.classList.add('formGroupIncorrect');
        iChickenBornYear.classList.remove('fa-check-circle');
        iChickenBornYear.classList.add('fa-times-circle');
        messageErrorBornYear.classList.remove('formInputErrorDesactive');
        messageErrorBornYear.classList.add('formInputErrorActive');
        
        aux = false;
    }
    
    return aux;
}*/

function emailValidation(){
    
    var regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var email = document.getElementById('email').value;
    var groupEmail = document.getElementById('groupEmail');
    var iEmail = document.getElementById('iEmail');
    var messageErrorEmail = document.getElementById('messageErrorEmail');
    var aux;
    
    if(regexEmail.test(email)){
        groupEmail.classList.remove('formGroupIncorrect');
        groupEmail.classList.add('formGroupCorrect');
        iEmail.classList.remove('fa-times-circle');
        iEmail.classList.add('fa-check-circle');
        messageErrorEmail.classList.remove('formInputErrorActive');
        messageErrorEmail.classList.add('formInputErrorDesactive');
        
        aux = true;
        
    }else{
        groupEmail.classList.remove('formGroupCorrect');
        groupEmail.classList.add('formGroupIncorrect');
        iEmail.classList.remove('fa-check-circle');
        iEmail.classList.add('fa-times-circle');
        messageErrorEmail.classList.remove('formInputErrorDesactive');
        messageErrorEmail.classList.add('formInputErrorActive');
        
        aux = false;
    }
    
    return aux;
}

function submitValidation(){
    
    var aux = false;
    
    if(idValidation() == true && nameValidation() == true && emailValidation() == true){
        aux = true;
    }else{
        window.alert("Please, check your information, you must enter the data correctly.");
    }
    
    return aux;
    
}