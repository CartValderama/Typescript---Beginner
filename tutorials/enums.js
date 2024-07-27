"use strict";
// to define a sets constants
var LoginError;
(function (LoginError) {
    LoginError["Unauthorized"] = "unauthorized";
    LoginError["NoUser"] = "nouser";
    LoginError["WrongCredentials"] = "wrongcredentials";
    LoginError["Internal"] = "internal";
})(LoginError || (LoginError = {}));
const printErrorMsg = (error) => {
    if (error == LoginError.Unauthorized) {
        console.log('not authorized');
    }
    else if (error == LoginError.NoUser) {
        console.log('user doesnt exist');
    }
    else if (error == LoginError.WrongCredentials) {
        console.log('wrong credentials');
    }
    else {
        console.log('internal problem');
    }
};
printErrorMsg(LoginError.WrongCredentials);
