import ColaGenerator from "./colaGenerator.js";
import VendingFunc from "./vendingFunc.js";

const colaGenerator = new ColaGenerator()
await colaGenerator.setup()


const vandingMachine = new VendingFunc()
vandingMachine.setup()