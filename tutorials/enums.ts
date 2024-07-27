// to define a sets constants

enum LoginError {
  Unauthorized = 'unauthorized',
  NoUser = 'nouser',
  WrongCredentials = 'wrongcredentials',
  Internal = 'internal',
}

const printErrorMsg = (error: LoginError) => {
  if (error == LoginError.Unauthorized) {
    console.log('not authorized')
  } else if (error == LoginError.NoUser) {
    console.log('user doesnt exist')
  } else if (error == LoginError.WrongCredentials) {
    console.log('wrong credentials')
  } else {
    console.log('internal problem')
  }
}

printErrorMsg(LoginError.WrongCredentials)
