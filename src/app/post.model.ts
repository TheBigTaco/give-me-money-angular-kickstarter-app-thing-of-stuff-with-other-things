export class Post {
  public contributors: string[] = [];
  constructor(public name: string, public description: string, public money: number, public endDate: Date, public type: string) {}
}
