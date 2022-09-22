#!/bin/env node
import {program} from 'commander'
import chalk from "chalk";
import createLuhn from "../dist/luhn.js";

const {validate} = createLuhn()

program
    .name('Luhn')
    .description('Credit Cards number validator')
    .version('2.0.0')

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