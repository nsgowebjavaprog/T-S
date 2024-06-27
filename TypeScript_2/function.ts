/*
Normal

function add_two_num(num){
    return num + 10
}
add_two_num(10)   // output=== Error

in TS
Taken input is Int/Number

function add_two_num1(num: number){
    return num + 10
}
add_two_num1(10) 

// 3.
function add_two_num2(num: number) {
    return num + 10;
  }
  
  const result = add_two_num2(10);
  console.log(result); // outputs 20

  // 4.

  function sign_Up_User(name, email, password){

  }
  */
/*
  // correct way
 // By default false ************

 //  function sign_Up_User1(name:string, email:string, ispaid: boolean = true)

  function sign_Up_User1(name:string, email:string, password:string){
    
        return {name, email, password}

  }
  const res =  sign_Up_User1("NS_LONI", "nagarajloni@100gmail.com", "Password@1234")
  console.log(res)

// output:
/* {
  name: 'NS_LONI',
  email: 'nagarajloni@100gmail.com',
  password: 'Password@1234'
}*/ 


// BETTER WAY OF FUNCTION

/*
function Add_Two_Num(num: number): number{
    return "HellO" // Error ---> return value is number
    return num+2   //  No-Any Error bcs return type is number
}
*/
/*
const get_hello = (s:string):string =>{
    return " "
}
*/
 
function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): void{
    throw new Error(errmsg);
}




// export {}