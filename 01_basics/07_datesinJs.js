// Dates

let myDate = new Date()
// console.log(myDate.toString()); // Wed Feb 07 2024 13:24:15 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Wed Feb 07 2024
// console.log(myDate.toISOString()); //2024-02-07T07:52:40.972Z
// console.log(myDate.toJSON()); // 2024-02-07T07:53:48.479Z
// console.log(myDate.toUTCString()); // Wed, 07 Feb 2024 07:55:09 GMT

// console.log(myDate.toLocaleString()); // 7/2/2024, 4:18:04 pm
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})

