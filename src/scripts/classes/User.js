export class User {
  constructor(name, type, questions) {
    this.name = name;
    this.type = type;
    this.questions = questions;
  }

  displayQuestions = () => {
    window.alert(questions);
  }
}
