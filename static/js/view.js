/**
 * Switch to FIDO login page
 */
$('.toLoginFido').click(function(e) {
    e.preventDefault();
    $('#multipleRegistrationContainer').hide();
    $('#fidoRegistrationContainer').hide();
    $('#passwordRegistrationContainer').hide();
    $('#multipleLoginContainer').hide();
    $('#passwordLoginContainer').hide();
    $('#fidoLoginContainer').show();
})  


/**
 * Switch to multiple Login Container 
 */
$('#toMultipleLoginContainer').click(function(e) {
    e.preventDefault();
    $('#registerContainer').hide();
    $('#multipleLoginContainer').hide();
    $('#loginContainer').show();
})

/**
 * Switch to multiple Registration Container 
 *
 */

 $('#toMultipleRegistrationContainer').click(function(e) {
    e.preventDefault();
    $('#multipleRegistrationContainer').show();
    $('#fidoRegistrationContainer').hide();
    $('#passwordRegistrationContainer').hide();
    $('#multipleLoginContainer').hide();
    $('#passwordLoginContainer').hide();
    $('#fidoLoginContainer').hide();
 })


/**
 * Switch to FIDO registration page
 */
$('.toFidoRegistration').click(function(e) {
    e.preventDefault();
    $('#multipleRegistrationContainer').hide();
    $('#fidoRegistrationContainer').show();
    $('#passwordRegistrationContainer').hide();
    $('#multipleLoginContainer').hide();
    $('#passwordLoginContainer').hide();
    $('#fidoLoginContainer').hide();
})

/**
 * Switch to password registration
 *
 */

$('.toPasswordRegistration').click(function(e) {
    e.preventDefault();
    $('#multipleRegistrationContainer').hide();
    $('#fidoRegistrationContainer').hide();
    $('#passwordRegistrationContainer').show();
    $('#multipleLoginContainer').hide();
    $('#passwordLoginContainer').hide();
    $('#fidoLoginContainer').hide();
})


let loadMainContainer = () => {
    return fetch('/personalInfo', {credentials: 'include'})
        .then((response) => response.json())
        .then((response) => {
            if(response.status === 'ok') {
                $('#theSecret').html(response.theSecret)
                $('#name').html(response.name)
                $('#registerContainer').hide();
                $('#loginContainer').hide();
                $('#mainContainer').show();
            } else {
                alert(`Error! ${response.message}`)
            }
        })
}

let checkIfLoggedIn = () => {
    return fetch('/isLoggedIn', {credentials: 'include'})
        .then((response) => response.json())
        .then((response) => {
            if(response.status === 'ok') {
                return true
            } else {
                return false
            }
        })
}

$('#logoutButton').click(() => {
    fetch('/logout', {credentials: 'include'});

    $('#registerContainer').hide();
    $('#mainContainer').hide();
    $('#loginContainer').hide();
    $('#multipleLoginContainer').show();
})