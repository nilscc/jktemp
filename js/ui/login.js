import * as cookies from "../cookies.js"

import * as main from "./main.js"

const cookie_name = "api-key"

const input = document.querySelector("#api-key input")
const enter = document.querySelector("#api-key button")
const messages = document.querySelector("#api-key p")

function show_error (msg) {
  console.error(msg)
  messages.innerText = msg
  messages.style.display = "block"
}

function hide_error () {
  messages.style.display = "none"
  messages.innerText = ""
}

function perform () {

  // get input value and store as cookie
  const v = input.value
  console.log(v)

  if (v) {
    // successful => remember cookie for next time
    cookies.set(cookie_name, v)

    // load main
    try {
      // try to initialize the main UI
      main.init(v)

      // hide self on success
      hide()
    }
    catch (e) {
      show_error(e)
    }
  }
  else
    throw "Empty input"
}

function hide () {
  throw "Hide login not implemented."
}

export function init () {

  // always perform login when clicking enter
  enter.onclick = perform

  // try to lookup API key from cookies
  const c = cookies.get(cookie_name)
  console.log("cookie", c)
  if (c) {
    try {
      hide_error()
      main.init(c)
      hide()
    }
    catch (e) {
      let more = ""
      if (e)
        more = ": " + e
      show_error("Found invalid API key" + more)
    }
  }
}
