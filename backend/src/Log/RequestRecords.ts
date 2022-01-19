import { cyan, green, magenta, red } from "colors";

let apiCalls:number = 0;
let authCalls:number = 0;

function LogAuthRequest(status: boolean) {
  authCalls++;
  console.log(
    "Status: [" +
      (status ? green(" Accepted ") : red(" Declined ")) +
      "]\t" +
      "Categorie: [" +
      magenta(" AUTH ") +
      "]\tAmount: [" +
      cyan(" <"+authCalls.toString()+"> ") +
      "] (" + cyan("total: " + (apiCalls+authCalls).toString()) + ")"
  );
}

function LogApiRequest(status: boolean) {
  apiCalls++;
  console.log(
    "Status: [" +
      (status ? green(" Accepted ") : red(" Declined ")) +
      "]\t" +
      "Categorie: [" +
      magenta(" API ") +
      "]\tAmount: [" +
      cyan(" <"+apiCalls.toString()+"> ") +
      "] (" + cyan("total: " + (apiCalls+authCalls).toString()) + ")"
  );
}

export { LogApiRequest, LogAuthRequest };
