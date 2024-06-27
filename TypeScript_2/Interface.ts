
interface User {
  email: string;
  userId: number;
  startTrail(): string;
}
/*
const lonu: User = {
  email: "hghdfhh.com",
  userId: 2323,
  startTrail(): string {
    return "Hello NS_LONI";
  }
};

console.log(lonu.startTrail()); // outputs ----> Hello NS_LONI
*/

interface User2 {
  github_token: string
}
github_token: "GITHUB"

interface Admin extends User {
  role: "admin" | "ta" | "Teacher"
}

const lon: Admin = {email: "nsloni22024.com", userId: 2323 }

// role: "admin",
github_token: "github",
startTrail: () => {
  return "Hello String"
}