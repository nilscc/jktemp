import * as ui from "./js/ui.js"

window.onload = () => {
  ui.init()
}

/*
let base = "https://temp.totally.rip/"

let url = base + "getLast.php"

window.onload = async function () {

  let fd = new FormData()
  fd.append("key", "")

  let response = await fetch(url, {
    method: "POST",
    body: fd,
  })

  switch (response.status)
  {
    case 200:
      let kp = JSON.parse(await response.text())
      console.log(kp)
    default:
      console.error(response)
  }
}
*/
