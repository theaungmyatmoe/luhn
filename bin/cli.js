#!/bin/env node
import {program} from 'commander'
import chalk from "chalk";
import {validate} from "../dist/index.js";

program
    .name('Luhn')
    .description('Credit Cards number validator')
    .version('2.1.0')

program.command('validate')
    .description('Validate card number')
    .argument('<string>', 'card number')
    .action((pan) => {
        const isValid = validate(pan)
        if (isValid) {
            console.log(chalk.green('Valid ✨'))
        } else {
            console.log(chalk.red('Invalid 😭'))
        }
    })


program.parse();