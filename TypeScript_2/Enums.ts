/*
enum CardinalDirections {
    North = 1,
    East,
    South,
    West
  }
  // logs 1
  console.log(CardinalDirections.North); // 1

  // logs 4
  console.log(CardinalDirections.West); //  4

  enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  // logs 404
  console.log(StatusCodes.NotFound);  // 404
  // logs 200
  console.log(StatusCodes.Success);   // 200


  enum CardinalDirections {
    North1 = 'North',
    East1 = "East",
    South1 = "South",
    West1 = "West"
  };
  // logs "North"
  console.log(CardinalDirections.North1);  // North
  // logs "West"
  console.log(CardinalDirections.West1);   // west
*/

enum Seat_Choice{
  AISLE = 10,
  MIDDLE = 20,
  WINDOW = "STRINGS",
  FOURTH = 40
}
const hbSeat = Seat_Choice.AISLE

  