import * as login from "./ui/login.js"

/*
function show_login_error (err) {
  console.error(err)

  messages.innerText = err
  messages.style.display = "block"
}

function perform_login () {

  // get input value and store as cookie
  const v = input.value
  console.log(v)

  if (v) {
    // successful => remember cookie for next time
    cookies.set("api-key", v)
    // load main
    initialize_main(v)
  }
  else
    throw "Empty input"
}

function hide_login () {
  throw "Hide login not implemented yet"
}

function initialize_main (apikey) {
  throw "Main not implemented yet"

  // finally, hide login form
  hide_login()
}
*/

export function init () {
  login.init()
}
