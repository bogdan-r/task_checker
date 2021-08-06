import TaskRunner from "./TaskRunner";
import path from "path";
import TaskLoader from "./TaskLoader";

const solutionsDir: string = path.join(__dirname, "solutions");
const solutionFileName: string = "solution.ts";
const tasks = new TaskLoader(solutionsDir).getTasks();

describe.each(tasks)('$problem', ({taskDir, problem, testCases}) => {
  test.each(testCases)("Для значения %p", (inCase, outCase) => {
    const taskRunner = new TaskRunner(taskDir, solutionFileName);
    const solutionResult = taskRunner.runSolution(inCase);
    expect(solutionResult).toBe(outCase);
  });
});
