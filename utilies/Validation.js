//validateEmail
export const isValidEmail =(stringEmail) => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail))
}
//validatePassword
export const isValidPassword = (stringPassword) => stringPassword.length >= 6
// export const isValidPassword1 = (stringPassword1) => password1 == password