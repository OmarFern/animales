const  exportadomodulo=require("./animales");

const pato= new exportadomodulo("pato");
const tigre= new exportadomodulo("tigre");
const camaleon= new exportadomodulo("camaleon");


pato.print();
//el nuevo animal es pato
tigre.print();
//el nuevo animal es tigre
camaleon.print();
//el nuevo animal es camaleon