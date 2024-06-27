// Aliases and Interfaces allows types to be easily 
// shared between different variables/objects.

/*
type User = {
    name: string;
    email: string;
    is_active: boolean;
}

function create_user(user: User){
    return {name: "", email: "", is_active: true}
}

create_user({name: "", email: "", is_active: true})

export {}
*/

// 2.
/*

type User = {
    name: string;
    email: string;
    is_active: boolean;
  }
  
  function create_user(user: User): User {
    // Use the input user object to create a new user
    return { ...user, is_active: true };
  }
  
  const newUser = create_user({ name: "AMD-7", email: "amd.@example.com", is_active: false });
  console.log(newUser); 


type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};
*/

// READONLY

type User = {
    readonly _id: string
    name: string
    email: string
    is_active: boolean
    credcard?: number   // optional
}

let myUser: User = {
    _id: "1234",
     name: "ns",
    email: "a.jusd@.com",
    is_active: false
}

myUser.email = "real.1201@gmail.com"