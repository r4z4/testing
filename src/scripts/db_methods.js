export const get = async (url) => {
  try{
    const response = await fetch("http://localhost:3001" + url)
    const jsonData = await response.json()
    console.log('GET jsonData =' + jsonData); 
    return(jsonData);
  } catch (err) {
    console.error(err.message)
  }
}

export const add = async (fields, url) => {
  try {
    const data = { fields };
    const response = await fetch(("http://localhost:3001" + url), {
      method: "POST",
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      mode: 'cors',
      body: JSON.stringify(data)
    })
    console.log('POST response (add) = ' + response);
    window.location.reload(); //Do we need this?
    //Window.location = "/"; //This will make it refresh and show changes - instead of console.log
  } catch (err) {
    console.error(err.message);
  }
}