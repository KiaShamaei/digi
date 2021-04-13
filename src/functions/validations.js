

export function ValidateEmail(input, showmessage) {
    const value = input.target.value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (value.match(mailformat)) {
        showmessage.innerHTML="";
        return true;
    }
    else {

        showmessage.innerHTML ="ایمیل وارد شده صحیح نیست! ";
        return false;
    }
}
//check valid mobile phone  number 
export function IsIranPhone(input, showmessage) {
const value = input.target.value;
    var phoneno = /^(\+98|0)?9\d{9}$/;
    if ((value.match(phoneno))) {
        showmessage.innerHTML = ""
        return true;

    } else {
        showmessage.innerHTML="شماره موبایل وارد شده صحیح نیست! ";
        return false;
    }
}
//chck password be valid ...
export function IsPassword (input, showmessage){
    const value=input.target.value;
    const model = "^[a-zA-Z0-9]{6,}$";
    if((value.match(model)))
    {
        showmessage.innerHTML = "";
        return true ;
    }else
    {
        showmessage.innerHTML="رمز ورود باید حداقل 6 کاراکتر شامل عدد و حروف";
        
        return false ;
    }


}