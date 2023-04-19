var email = true;

var google = false;

var facebook = false;

if (email) {
  console.log('Login Success with Email');
} else if (google) {
  console.log('Login Success with Google');
} else if (facebook) {
  console.log('Login Success with Facebook');
}

if (email || google || facebook) {
  console.log('Login Success');
}
