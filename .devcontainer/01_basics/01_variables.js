const accountId = 210934
let accountEmail = "jyoti@321@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
//accountId = 2 // not allowed

accountEmail = "jk@gmail.com"
accountPassword = "321"
accountCity = "Bengluru"

console.log (accountId);

console.table ([accountId, accountEmail, accountPassword, accountCity, accountState])
/*
Prefer not to use var
because of issue in block scope and functional scope
*/