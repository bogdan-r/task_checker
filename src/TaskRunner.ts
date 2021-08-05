import * as path from "path";

export default class TaskRunner {
  private readonly taskDir: string;
  private readonly solutionFileName: string;
  private readonly solution;

  constructor(taskDir: string, solutionFileName: string) {
    this.taskDir = taskDir;
    this.solutionFileName = solutionFileName;
    this.solution = this.getSolution();
  }

  public runSolution(...args: any[]) {
    return this.solution(...args);
  }

  private getSolution() {
    return require(path.join(this.taskDir, this.solutionFileName)).default;
  }
}