/*
    The following functions take a string and determine if they
    are valid based on predefined criteria. The functions that 
    check email and username have few criteria so they are
    simple and simply return null if valid or an error string
    if invalid.
*/

function emailIsValid(email) {
    const emailRe = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;

    if (email === '') {
        return 'An email is required'
    } else if (!emailRe.test(email.toUpperCase())) {
        return 'Please provide a valid email';
    } else {
        return null;
    }
}

function usernameIsValid(username) {
    const usernameRe = /^[A-Z0-9]+\.?[A-Z0-9]+$/;

    if (username.length < 3 || username.length > 15) {
        return 'A username must be at least 3 or at most 15 characters long'
    } else if (!usernameRe.test(username.toUpperCase())) {
        return 'Please provide a valid username';
    } else {
        return null;
    }
}

/*
    The criteria for valid passwords are more complex.
    Furthermore, more info will be displayed on the GUI
    during password creation. Instead of a simple error
    message, a json object noting which criteria are met 
    and unmet is returned.
*/

function passwordIsValid(password) {
    let conditionsMet = 0;
    let details = {length: password.length >= 8 && password.length <= 32,
                   digit: false,
                   lowercase: false,
                   uppercase: false,
                   special: false};

    if (password.test(/.*[0-9].*/)) {
        conditionsMet++;
        details.digit = true;
    }
    if (password.test(/.*[a-z].*/)) {
        conditionsMet++;
        details.lowercase = true;
    }
    if (password.test(/.*[A-Z].*/)) {
        conditionsMet++;
        details.uppercase = true;
    }
    if (password.test(/.*[*.!@#$%^&(){}[\]:";'<>,.?/~`_+=|\\-].*/)) {
        conditionsMet++;
        details.special = true;
    }

    return {valid: conditionsMet >= 3, details};
}

export {emailIsValid, usernameIsValid, passwordIsValid}