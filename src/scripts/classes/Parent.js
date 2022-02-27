//Import Superclass
import { User } from './User';

export class Parent extends User {
  constructor(name, type, questions, unit, graded)  {
    super(name, type, questions);
    this.unit = unit;
    this.graded = graded;
  }

  viewChildsGrades = () => {
    window.alert('grades')
  }
}

