//Import Superclass
import { Assessment } from './Assessment';

export class Drill extends Assessment {
  constructor(name, type, questions, unit, graded)  {
    super(name, type, questions);
    this.unit = unit;
    this.graded = graded;
  }

drillHtml = this.questions.map((question) => {
    return `<tr key={${question.number}}>
              <td>${question.number}</td>
              <td>${question.text}</td>
            </tr>`;
  }).join('');


  //Should make the type equal to "Drill" for convention. So it can getElementById("Drill-template")
  generateDrill = ()  =>  {
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