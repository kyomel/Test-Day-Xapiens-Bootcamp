#!/usr/bin/env node
// file: hello-world.js (make the file executable using `chmod +x hello.js`)

// Caporal provides you with a program instance
const { program } = require('@caporal/core');
const obfuscator = require('javascript-obfuscator');
const ip = require('ip');
const publicIp = require('public-ip');
const ineed = require('ineed');

program
// no 1
    .command("lowercase")
    .argument("<text>", "text to Lowercase")
    .action(({ logger, args }) => {
        let resLower = args.text.toLowerCase();
        logger.info(resLower)
    })
    .command("uppercase")
    .argument("<text>", "text to Uppercase")
    .action(({ logger, args }) => {
        let resUpper = args.text.toUpperCase();
        logger.info(resUpper)
    })
    .command("capitalize")
    .argument("<text>", "text to Capitalize")
    .action(({ logger, args }) => {
        let textArray = args.text.split(" ");
        let capitalize = textArray.map((element) => {
            let resCapitalize = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
            return resCapitalize;
        })
        logger.info(capitalize.join(" "));
    })

// no 2
    .command("add")
    .argument("<num1>", "Add your number", {
        default: 0,
        validator: program.NUMBER
    })
    .argument("<num2>", "Add your number", {
        default: 0,
        validator: program.NUMBER
    })
    .argument("<num3>", "Add your number", {
        default: 0,
        validator: program.NUMBER
    })
    .argument("<num4>", "Add your number", {
        default: 0,
        validator: program.NUMBER
    })
    .argument("<num5>", "Add your number", {
        default: 0,
        validator: program.NUMBER
    })
    .action(({ logger, args }) => {
        const num1 = args.num1
        const num2 = args.num2
        const num3 = args.num3
        const num4 = args.num4
        const num5 = args.num5

        const result = (num1 + num2 + num3 + num4 + num5);

        logger.info(result);
    })
    .command("substract")
    .argument("<num1>", "Add your number", {
        default: 0,
        validator: program.NUMBER
    })
    .argument("<num2>", "Add your number", {
        default: 0,
        validator: program.NUMBER
    })
    .argument("<num3>", "Add your number", {
        default: 0,
        validator: program.NUMBER
    })
    .argument("<num4>", "Add your number", {
        default: 0,
        validator: program.NUMBER
    })
    .argument("<num5>", "Add your number", {
        default: 0,
        validator: program.NUMBER
    })
    .action(({ logger, args }) => {
        const num1 = args.num1
        const num2 = args.num2
        const num3 = args.num3
        const num4 = args.num4
        const num5 = args.num5

        const result = (num1 - num2 - num3 - num4 - num5);

        logger.info(result);
    })
    .command("multiply")
    .argument("<num1>", "Add your number", {
        default: 1,
        validator: program.NUMBER
    })
    .argument("<num2>", "Add your number", {
        default: 1,
        validator: program.NUMBER
    })
    .argument("<num3>", "Add your number", {
        default: 1,
        validator: program.NUMBER
    })
    .argument("<num4>", "Add your number", {
        default: 1,
        validator: program.NUMBER
    })
    .argument("<num5>", "Add your number", {
        default: 1,
        validator: program.NUMBER
    })
    .action(({ logger, args }) => {
        const num1 = args.num1
        const num2 = args.num2
        const num3 = args.num3
        const num4 = args.num4
        const num5 = args.num5

        const result = (num1 * num2 * num3 * num4 * num5);

        logger.info(result);
    })
    .command("divide")
    .argument("<num1>", "Add your number", {
        default: 1,
        validator: program.NUMBER
    })
    .argument("<num2>", "Add your number", {
        default: 1,
        validator: program.NUMBER
    })
    .argument("<num3>", "Add your number", {
        default: 1,
        validator: program.NUMBER
    })
    .argument("<num4>", "Add your number", {
        default: 1,
        validator: program.NUMBER
    })
    .argument("<num5>", "Add your number", {
        default: 1,
        validator: program.NUMBER
    })
    .action(({ logger, args }) => {
        const num1 = args.num1
        const num2 = args.num2
        const num3 = args.num3
        const num4 = args.num4
        const num5 = args.num5

        const result = (num1 / num2 / num3 / num4 / num5);

        logger.info(result);
    })

// no 3
    .command("palindrome")
    .argument("<text>", "Text to be palindrome")
    .action (({ logger, args }) => {
        let original = args.text.replace(/[\s"'.,-\/#!$%\^&*;:{}=\-_`~()\\\[\]@+|?><]/g,"").toLowerCase();
        let reverse = original.split("").reverse().join("");
        if (original == reverse) {
            logger.info("Is the Palindrome: Yes")
            return true
            
        } else {
            logger.info("Is the Palindrome: No")
            return false
        }
    })

//  no 4
    .command("obfuscate")
    .argument("<text>", "Text to be encode")
    .action (({ logger, args}) => {
        logger.info(
            args.text.split("")
            .map((char) => `&#${char.charCodeAt(0)};`)
            .join("")
        );
    })

// no 5
    .command("random")
    .option("--random", "random", {
        default: 32,
        validator: program.NUMBER,
    })
    .action(({ args, options }) => {
        console.log(options.test);
        // console.log(args, options);
    })

// no 6
    .command("ip")
    .action(({ logger }) => {
        let result = ip.address();
        logger.info(result);
    })

// no 7
    .command("ip-external")
    .action(({ logger }) => {
        (async () => {
            let result = await publicIp.v4();
            logger.info(result);
        })();
    })

// no 8
    .command("headlines")
    .action(() => {
        ineed.collect.images.hyperlinks.from('https://www.kompas.com/tag/headline',
        function (err, response, result) {
            let headline = result.hyperlinks;
            restRenameHead = JSON.parse(JSON.stringify(headline).split('"href":').join('"URL":'));
            restRenameText = JSON.parse(JSON.stringify(restRenameHead).split('"text":').join('"Title":'),);
            let resultProperty = restRenameText;
            console.log(resultProperty);
        })
    })
program.run()



