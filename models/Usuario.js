const bcrypt = require("bcrypt");

async function prueba() {

    const password = "123456";

    const hash = await bcrypt.hash(password, 10);

    console.log("Contraseña encriptada:");
    console.log(hash);

}

prueba();