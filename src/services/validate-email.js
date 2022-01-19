const emailRegex = /\S+@\S+\.\w{2,3}/;

const validateEmail = (email) => emailRegex.test(email);

export default validateEmail;

/*
SOURCES:
https://www.w3resource.com/javascript/form/email-validation.php
https://tools.ietf.org/html/rfc3696#page-5
*/
