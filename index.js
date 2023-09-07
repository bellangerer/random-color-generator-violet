import chalk from 'chalk';
import randomColor from 'randomcolor';

// random color
const color = randomColor();

// string part
console.log(
  chalk.hex(color).bold(`###############################
###############################
###############################
#####                     #####
#####       #edff28       #####
#####                     #####
###############################
###############################
###############################
`),
);
