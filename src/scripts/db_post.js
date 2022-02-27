const addStudent = async e => {
  e.preventDefault();
    try {
      const data = {stuid, fname, lname };
      const response = await fetch(`http://localhost:3001/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      console.log('addStudent' + response);
      alert('Sucessfully Added Student # ' + stuid);
      window.location.reload();
      //Window.location = "/"; //This will make it refresh and show changes - instead of console.log
    } catch (err) {
      console.error(err.message);
      alert('Unable to Add Student # ' + stuid + '; Message = ' + err.message);
    }
  }
