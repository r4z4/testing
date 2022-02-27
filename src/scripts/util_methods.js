export const display = (data, elementString) => {
  try{
    document.querySelector(elementString).style.opacity = 1;
    console.log('The display data = ' + data);
    document.querySelector(elementString).innerHTML = JSON.stringify(data);
  } catch (err) {
    console.error(err.message)
  }
}
