const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.soma = functions.database
  .ref("/moviment/{day}")
  .onWrite(async (change, context) => {
    const yearsRef = admin.database().ref("/year/" + context.params.day);
    const movimentRef = change.after.ref;
    const movimentSS = await movimentRef.once("value");
    const moviment = movimentSS.val();

    let input = 0;
    let output = 0;

    object.keys(moviment).forEach((m) => {
      if (moviment[m].value > 0) {
        input += moviment[m].value;
      } else {
        output += moviment[m].value;
      }
    });

    return yearsRef.transaction((current) => {
      if (current === null) {
        return { input, output, input_forecast: 0, output_forecast: 0 };
      }
      return { ...current, input, output };
    });
  });
