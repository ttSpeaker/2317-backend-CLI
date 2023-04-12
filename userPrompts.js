import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";

inquirer.registerPrompt("date", DatePrompt);

export async function promptNewUser() {
  return await inquirer.prompt(newUserPrompt);
}

const newUserPrompt = [
  {
    type: "input",
    name: "document",
    message: "Document ID:",
  },
  {
    type: "input",
    name: "full_name",
    message: "Full Name:",
  },
  {
    type: "date",
    name: "birth_date",
    message: "Birth date:",
    locale: "en-US",
    format: { month: "short", hour: undefined, minute: undefined },
  },
  {
    type: "input",
    name: "nationality",
    message: "Nationality:",
  },
];
