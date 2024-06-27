/*
let score: number | string = 21

score = 44

score = "232"

console.log(score)
*/

// 1.
 type User = {
    name: string;
    id: number
}

type admin = {
    username: string;
    id: number
}

let nsloni: User | admin = {name:"nsloni",id: 232}

nsloni = {username: "sd", id:232}


