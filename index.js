import { get, save } from "./filesMethods.js";
import inquirer from "inquirer";
import { promptNewUser } from "./userPrompts.js";

const main = async () => {
  let run = true;
  while (run) {
    const action = await inquirer.prompt([
      {
        type: "list",
        name: "chosen",
        message: "Actions:",
        choices: [
          { value: 1, name: "Get all users" },
          { value: 2, name: "Create new user" },
          { value: 99, name: "EXIT" },
        ],
      },
    ]);
    switch (action.chosen) {
      case 1:
        await getAllUsers();
        break;
      case 2:
        await createNewUser();
        break;
      case 99:
        run = false;
        break;
      default:
        run = false;
        break;
    }
  }
  console.log("Bye!");
};

main();

async function createNewUser() {
  console.log("Adding new user:");
  const newUserData = await promptNewUser();

  //TODO En vez del log podria hacer un nuevo prompt para confirmar los datos
  // si no confirma no los guardo
  console.log("New data to create: ", newUserData);

  //TODO validar la info

  const currentUsers = await get("users");

  //TODO Validar que no exista el Documento...

  currentUsers.push(newUserData);
  await save("users", currentUsers);
}

async function getAllUsers() {
  const currentUsers = await get("users");
  console.log(currentUsers);
}
