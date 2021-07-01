const { program } = require("commander");
const chalk = require("chalk");
const { guardarSaludo } = require("./utilidades/archivos");
program.option("-n,--nombre <nombre>", "Tu nombre");
program.parse(process.argv);
const opciones = program.opts();
if (opciones.nombre) {
  guardarSaludo(opciones.nombre);
} else {
  console.log(chalk.yellow("No se ha podido enviar ningún nombre"));
}
