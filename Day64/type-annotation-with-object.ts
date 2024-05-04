/*===============================/
==TYPE ANNOTATIONS WITH OBJECTS==
================================*/

let personOne: {
    name:string;
    age: number;
    jobTitle?: string;
    address: {
        street: number;
        city: string;
    };
};

    personOne = {
         name: "John",
         age : 20,
         jobTitle: "Developer",
         address: {
            street: 4,
            city: "Karachi"
         }

    };
// ANOTHER WAY 
let personTwo: {
    name:string;
    age: number;
    jobTitle?: string;
    address: {
        street: number;
        city: string;
    };
} = {
    name: "Khan",
         age : 25,
         jobTitle: "Web Developer",
         address: {
            street: 10,
            city: "Islamabad"
         }
};
