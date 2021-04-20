// return the user data from the session storage
export const getUser = () => {
    const response = {};
    if (sessionStorage.getItem('user')) 
    {
      response.userInfo = JSON.parse(sessionStorage.getItem('user'));
      response.isValid = true ;
      return response ;
    }

    else return null;
  }
   
  // return the token from the session storage
  export const getToken = () => {
    return sessionStorage.getItem('token') || null;
  }
   
  // remove the token and user from the session storage
  export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }
   
  // set the token and user from the session storage
  export const setUserSession = (token, user) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', user);
  }
  //test set user 
  export const setTest=(mobile,password)=>{
      sessionStorage.setItem("mobile", JSON.stringify(mobile))
      sessionStorage.setItem("password", JSON.stringify(password))
  }