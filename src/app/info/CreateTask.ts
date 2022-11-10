export class CreateTask {
  title: string;
  maxPoints: number;

  constructor(title: string, maxPoints: number) {
    this.title = title;
    this.maxPoints = maxPoints;
  }
}
