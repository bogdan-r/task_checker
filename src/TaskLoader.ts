import fs from "fs";
import path from "path";
import * as _ from "lodash";

export default class TaskLoader {
  private solutionsDir;

  constructor(solutionsDir: string) {
    this.solutionsDir = solutionsDir;
  }

  getTasks() {
    return this.getTasksDir().map(taskDir => this.getTask(taskDir));
  };

  private getTasksDir() {
    return fs.readdirSync(this.solutionsDir)
      .map(item => path.join(this.solutionsDir, item))
      .filter((item) => {
        return fs.lstatSync(item).isDirectory();
      });
  }

  private getTask(taskDir: string) {
    const content = fs.readdirSync(taskDir);
    const problem = fs.readFileSync(path.join(taskDir, "problem.txt"), {encoding: "utf-8"});
    const inPredicateFn = (testCase: string) => testCase.startsWith("test") && testCase.endsWith("in");
    const outPredicateFn = (testCase: string) => testCase.startsWith("test") && testCase.endsWith("out");

    const inCases = this.getCases(taskDir, content, inPredicateFn);
    const outCases = this.getCases(taskDir, content, outPredicateFn);
    const testCases = _.zip(inCases, outCases);

    return {
      taskDir,
      problem,
      testCases
    }
  }

  private getCases(taskDir: string, taskDirContent: string[], predicateFn: (testCase: string) => boolean) {
    return taskDirContent
      .filter(predicateFn)
      .sort()
      .map((testCaseFilename) => {
        return fs.readFileSync(path.join(taskDir, testCaseFilename), {encoding: "utf-8"}).trim();
      });
  }
}