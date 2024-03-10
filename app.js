const contacts = require("./contact");

const main = async () => {
  const nama = await contacts.question("Masukan nama anda");
  const email = await contacts.question("Masukan email anda");
  const noHp = await contacts.question("Masukan email anda");

  contacts.saveContact(nama, email, noHp);
};

main();
