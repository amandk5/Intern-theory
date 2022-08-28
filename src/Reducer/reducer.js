function reducer(state, action) {
  switch (action.type) {
    case "REGISTER_USER": {
      let { first_name, last_name, email, password } = action.payload;

      if (
        (first_name === "") ||
        (last_name === "") ||
        (email === "") ||
        (password === "")
      ) {
        return false;
      } else {
        let registeredUser =
          JSON.parse(localStorage.getItem("registeredUser")) || [];
        registeredUser.push(action.payload);
        localStorage.setItem("registeredUser", JSON.stringify(registeredUser));

        return true;
      }
    };
    
    case "LOGIN_USER": {
      let { email, password } = action.payload;
      let registeredUser=JSON.parse(localStorage.getItem("registeredUser"));

      if ((email === "") || (password === "")) {
        return "false";
      } 
      else if(registeredUser.length===1){
            if((registeredUser[0].email===email)&&(registeredUser[0].password===password)){
                return "true";
            }else{
                return "false";
            }
       }
       else{
                let isUser = registeredUser.filter((user) => {
                return user.email===email && user.password===password;
                });
                if(isUser.length===0){
                    return "false";
                }else{
                    return "true";
                }
        }
    };

    default: return state;
  }
}

export default reducer;