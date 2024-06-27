/*
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
  console.log(car);  // { type: 'Toyota', model: 'Corolla', year: 2009 }

  const car1: { type: string, mileage?: number } = { // no error
    type: "Toyota"
  };
  car1.mileage = 2000;

  console.log(car1)  // { type: 'Toyota', mileage: 2000 }

  */



  // New

  const User = {
    name: 'NS_LONI',
    email: 'nagarajloni@100.gmail.com',
    password: 'Password@1234'
  }
  
  function create_user({name: string, ispaid: boolean}){

  }
  create_user({name:"NS_LONI", ispaid: true})

  function create_user1():{}{
    return {}
  }
