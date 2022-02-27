//Import Superclass
import { User } from './User.js';

export class Student extends User {
  constructor(name, type, questions, level, stuid, fname, lname)  {
    //Properties shared with Super - Must call Super in constructor or get error.  
    //These will be generic.  name=student;type=Student etc..
    super(name, type, questions);
    //Properties distinct to Student
    this.level = level;
    this.stuid = stuid;
    this.fname = fname;
    this.lname = lname;
  }

  displayStudents(students) {
    document.querySelector(".stu-display").style.opacity = 1;
    console.log('displayStudents data = ' + students);
    document.querySelector(".stu-display").innerHTML = JSON.stringify(students);
  }

testHtml = this.questions.map((question) => {
    return `<tr key={${question.number}}>
              <td>${question.number}</td>
              <td>${question.text}</td>
            </tr>`;
  }).join('');


  generateTest = ()  =>  {
    document.getElementById(`${this.type}`+'-template').innerHTML = (
      `<div>
        <h1>${this.name}</h1>
        <table>
        <thead>
              <tr>
                <th>Number</th>
                <th>Question</th>
              </tr>
        </thead>
        <tbody>
              ${this.testHtml}
        </tbody>
        </table>
      </div>`
    )
  }
}

/*
  generateTest  = ()  =>  {
    document.getElementById(`${type}`+'-template').innerHTML = (
      <div>
        <h1>{name}</h1>
        <table>
        <thead>
              <tr>
                <th>Number</th>
                <th>Question</th>
              </tr>
        </thead>
        <tbody>
              {questions.map(question => (
                <tr key={question}>
                  <td>{question.number}</td>
                  <td>{question.text}</td>
                </tr>
              ))}
        </tbody>
        </table>
      </div>
    )
*/