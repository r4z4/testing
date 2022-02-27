async function getStudents() {
  try{
    const response = await fetch("http://localhost:3001/students")
    const jsonData = await response.json()
    return(jsonData.rows); //Using setCases is the only way to change the state
  } catch (err) {
    console.error(err.message)
  }
}

const getStudent = async() => {
  try{
    let caseid = parseInt(prompt('Please enter Case ID'));
    const response = await fetch(`http://localhost:3001/students/${caseid}`)
    const jsonData = await response.json()

    return([jsonData]); //Using setCases is the only way to change the state -- Use an ARRAY for map to work
  } catch (err) {
    console.error(err.message)
  }
}
