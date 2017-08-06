const _ = require('lodash')

const lt = min => x => x < min
const gt = max => x => x > max
const inRange = (lower, upper) => x => _.inRange(x, lower, upper)

const trainees = [
  { firstName: "Andrew", lastName: "Smith",    age: 43, weight: 112, height: 189 },
  { firstName: "Andrew", lastName: "Doe",      age: 44, weight: 112, height: 192 },
  { firstName: "Andrew", lastName: "Stone",    age: 51, weight: 66,  height: 165 },
  { firstName: "Andrew", lastName: "Clark",    age: 47, weight: 94,  height: 170 },
  { firstName: "Andrew", lastName: "Peterson", age: 54, weight: 113, height: 170 },
  { firstName: "Peter",  lastName: "Smith",    age: 25, weight: 70,  height: 191 },
  { firstName: "Peter",  lastName: "Doe",      age: 55, weight: 70,  height: 171 },
  { firstName: "Peter",  lastName: "Stone",    age: 38, weight: 87,  height: 195 },
  { firstName: "Peter",  lastName: "Clark",    age: 39, weight: 82,  height: 165 },
  { firstName: "Peter",  lastName: "Peterson", age: 30, weight: 104, height: 184 },
  { firstName: "John",   lastName: "Smith",    age: 30, weight: 49,  height: 162 },
  { firstName: "John",   lastName: "Doe",      age: 54, weight: 77,  height: 169 },
  { firstName: "John",   lastName: "Stone",    age: 54, weight: 107, height: 163 },
  { firstName: "John",   lastName: "Clark",    age: 45, weight: 62,  height: 193 },
  { firstName: "John",   lastName: "Peterson", age: 43, weight: 80,  height: 162 },
  { firstName: "James",  lastName: "Smith",    age: 42, weight: 65,  height: 161 },
  { firstName: "James",  lastName: "Doe",      age: 28, weight: 94,  height: 164 },
  { firstName: "James",  lastName: "Stone",    age: 27, weight: 56,  height: 161 },
  { firstName: "James",  lastName: "Clark",    age: 25, weight: 54,  height: 183 },
  { firstName: "James",  lastName: "Peterson", age: 53, weight: 79,  height: 169 },
  { firstName: "Paul",   lastName: "Smith",    age: 45, weight: 58,  height: 162 },
  { firstName: "Paul",   lastName: "Doe",      age: 32, weight: 88,  height: 188 },
  { firstName: "Paul",   lastName: "Stone",    age: 26, weight: 65,  height: 175 },
  { firstName: "Paul",   lastName: "Clark",    age: 52, weight: 81,  height: 166 },
  { firstName: "Paul",   lastName: "Peterson", age: 51, weight: 53,  height: 167 },
  { firstName: "Sandi",  lastName: "Smith",    age: 28, weight: 79,  height: 164 },
  { firstName: "Sandi",  lastName: "Doe",      age: 34, weight: 57,  height: 165 },
  { firstName: "Sandi",  lastName: "Stone",    age: 31, weight: 89,  height: 168 },
  { firstName: "Sandi",  lastName: "Clark",    age: 37, weight: 57,  height: 169 },
  { firstName: "Sandi",  lastName: "Peterson", age: 27, weight: 70,  height: 183 },
  { firstName: "Alexa",  lastName: "Smith",    age: 48, weight: 84,  height: 162 },
  { firstName: "Alexa",  lastName: "Doe",      age: 28, weight: 75,  height: 184 },
  { firstName: "Alexa",  lastName: "Stone",    age: 30, weight: 61,  height: 164 },
  { firstName: "Alexa",  lastName: "Clark",    age: 27, weight: 69,  height: 180 },
  { firstName: "Alexa",  lastName: "Peterson", age: 23, weight: 50,  height: 178 },
  { firstName: "Kate",   lastName: "Smith",    age: 32, weight: 88,  height: 192 },
  { firstName: "Kate",   lastName: "Doe",      age: 45, weight: 116, height: 190 },
  { firstName: "Kate",   lastName: "Stone",    age: 29, weight: 91,  height: 179 },
  { firstName: "Kate",   lastName: "Clark",    age: 56, weight: 103, height: 192 },
  { firstName: "Kate",   lastName: "Peterson", age: 46, weight: 86,  height: 189 },
]

const states = {
  'severe thinness': lt(16),
  'moderate thinness': inRange(16, 17),
  'mild thinness': inRange(17, 18.5),
  'normal': inRange(18.5, 25),
  'overweight': inRange(25, 30),
  'obese class I': inRange(30, 35),
  'obese class II': inRange(35, 40),
  'obese class III': gt(40),
}

const meters = (height) =>
  height / 100

const power = x => y =>
  Math.pow(y, x)
  
const squared = power(2)

const getBMI = (person) =>
  person.weight / squared(meters(person.height))

const getFullName = (person) =>
  person.firstName + ' ' + person.lastName

const getState = (bmi) =>
  _.findKey(states, check => check(bmi))

const getTrainee = (name) =>
  _.find(trainees, t => _.includes(getFullName(t), name))

const getStateByName = (name) =>
  getState(getBMI(getTrainee(name)))

getStateByName('Paul Smith') // => "normal"