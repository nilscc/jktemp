export function key () {

  // lookup cookie and see if it is available
  let c = cookie.get("api-key")
  if (c)
    return c

  // Otherwise throw an exception
  throw "No valid API key."
}
