import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

// random color
const color = randomColor({ hue: argv[2], luminosity: argv[3] });

// string part
console.log(
  chalk.hex(color).bold(`###############################
###############################
###############################
#####                     #####
#####       ${color}       #####
#####                     #####
###############################
###############################
###############################
`),
);
