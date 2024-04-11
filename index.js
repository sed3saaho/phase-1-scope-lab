// Write your solution in this file!

var customerName = 'bob';
var bestCustomer;

function upperCaseCustomerName() {
    return customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob'; // Note: This is not recommended in production code
}


function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}


const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'maybe bob';
    leastFavoriteCustomer = 'someone else';
}
console.log(upperCaseCustomerName(customerName));