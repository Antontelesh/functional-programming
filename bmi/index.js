const { findKey, find, flow } = require('lodash')
const { includes } = require('lodash/fp')
const trainees = require('./trainees')
const states = require('./states')




const calculateBMI = (weight, height) =>
  weight / (height * height)

const getBMI = (person) =>
  calculateBMI(person.weight, person.height)

const fullName = (person) =>
  person.firstName + ' ' + person.lastName

const getState = (bmi) =>
  findKey(states, check => check(bmi))

const getTrainee = (name) =>
  find(trainees, flow(fullName, includes(name)))

const getStateByName = (name) =>
  getState(getBMI(getTrainee(name)))

getStateByName('Paul Smith') // => "normal"