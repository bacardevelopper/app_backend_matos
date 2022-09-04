// imports
let clc = require("cli-color");
const { print } = require("../useful_functions/console_log");
const axios = require("axios").default;
// imports

exports.tester_endpoint = (
  status_expect,
  message_expect,
  name_test,
  url,
  { payload }
) => {
  print("Test name : " + name_test + " | run");
  let type_tester = verifyType(status_expect, message_expect);

  if (type_tester) {
    print(clc.green(`test ${name_test} reussit`));
  } else {
    print(clc.red("erreur sur le test : " + name_test));
  }
};

function verifyType(statusType, messageType) {
  let verfy_type_status = typeof statusType;
  let verify_type_message = typeof messageType;

  if (verfy_type_status === "number" && verify_type_message === "string") {
    return true;
  }
  return false;
}
