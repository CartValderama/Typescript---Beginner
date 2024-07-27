"use strict";
// // functions that are flexible to any perimeter
const signContract = (employee) => {
    console.log('contract signed by ' + employee.name + ' with email: ' + employee.email);
};
signContract({
    name: 'wow',
    creditScore: 1,
    id: 2,
    email: 'emailmoto',
});
