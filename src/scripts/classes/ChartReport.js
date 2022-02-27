//Import Superclass
import { Report } from './Report';

export class ChartReport extends Report {
  constructor(name, type, questions, unit, graded)  {
    super(name, type, questions);
    this.unit = unit;
    this.graded = graded;
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


//To Export Module as a Whole
//module.exports = { GradeReport }