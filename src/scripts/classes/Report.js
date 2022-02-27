export class Report {
  constructor(name, type, questions) {
    this.name = name;
    this.type = type;
    this.questions = questions;
  }

  displayQuestions = () => {
    window.alert(questions);
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