/**
 *   @author Sean Stock (sstock6829@gmail.com)
 *   @version 0.0.1
 *   @summary Project 2 (Calculate customer age and insurance premium) || created: 09.25.2017
 *   @todo Accept policy information. Calculate the age of the customer and the monthly insurance premium.
 */

"use strict";
const PROMPT = require('readline-sync');

let policyNumber, birthDate, accidents, age, costAge, premium;
let firstName, lastName;
const BASE_PRICE = 100, ACCIDENT_MULT = 50, MIN_POLICY = 10000000, MAX_POLICY = 99999999, MIN_AGE = 15, MID_AGE = 30, OLD_AGE = 45, MAX_AGE = 60;

/**
 * @method
 * @desc The main dispatch method
 */
function main() {
    let currentYear = 2017;
    setFirstName();
    setLastName();
    setPolicyNumber();
    setBirthDate();
    setAccidents();
    setAge(currentYear);
    setCostAge();
    setPremium();
    displayPremium();

}

main();

/**
 * @method
 * @desc Mutates the firstName variable
 *
 */
function setFirstName(){
    firstName = PROMPT.question(`\nPlease enter your first name: `);
}

/**
 * @method
 * @desc Mutates the lastName variable
 */
function setLastName(){
    lastName = PROMPT.question(`\nPlease enter your last name: `);
}

/**
 * @method
 * @desc Mutates the policyNumber variable. If the user inputs a number that does not contain 8 digits, an error message
 * is displayed and the function runs again.
 */
function setPolicyNumber(){
    policyNumber = PROMPT.question(`\nPlease enter your 8 digit policy number: `);
    if (policyNumber < MIN_POLICY || policyNumber > MAX_POLICY) {
        console.log("\nI'm sorry, that is an invalid number. Please try again.");
        return setPolicyNumber();
    }
}

/**
 * @method
 * @desc Mutates the birthDate variable
 */
function setBirthDate(){
    birthDate = PROMPT.question(`\nPlease enter your birth year (yyyy): `);
}

/**
 * @method
 * @desc Mutates the accidents variable
 */
function setAccidents(){
    accidents = PROMPT.question(`\nHow many at fault accidents have you been involved in during the last 3 years? `);
}

/**
 * @method
 * @desc Calculates the customer's age
 * @param currentYear
 */
function setAge(currentYear){
    age = currentYear - birthDate;
}

/**
 *@method
 *@desc Calculates the insurance premium bonus due to age, variable costAge
 */

function setCostAge(){
    if (age > MIN_AGE && age < MID_AGE){
        costAge = 20;
    } else if (age >= MID_AGE && age < OLD_AGE){
        costAge = 10;
    } else if (age >= OLD_AGE && age < MAX_AGE){
        costAge = 0;
    } else if (age >= MAX_AGE){
        costAge = 30;
    }
}

/**
 * @method
 * @desc Calculates the insurance premium of the customer
 */
function setPremium(){
    premium = BASE_PRICE + costAge + (ACCIDENT_MULT * accidents);
}

/**
 * @method
 * @desc Displays the customer's insurance premium
 */
function displayPremium(){
    process.stdout.write('\x1Bc');
    console.log(`${firstName} ${lastName}, your monthly insurance premium is $${premium}`);
}
