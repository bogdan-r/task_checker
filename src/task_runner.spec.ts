import TaskRunner from "./TaskRunner";

const taskDir: string = process.env.TASK_DIR || "";
const solutionFileName: string = process.env.SOLUTION_TASK_NAME || "";
const taskRunner = new TaskRunner(taskDir, solutionFileName);

console.log(taskRunner);
test("first_test", () => {
  const solutionResult = taskRunner.runSolution(1434, 2);
  console.log(solutionResult);
})