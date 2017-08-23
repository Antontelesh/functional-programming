const inRange = require('lodash/fp/inRange')
const lt = x => y => y < x
const gt = x => y => y > x

module.exports = {
  'severe thinness':   lt(16),
  'moderate thinness': inRange(16, 17),
  'mild thinness':     inRange(17, 18.5),
  'normal':            inRange(18.5, 25),
  'overweight':        inRange(25, 30),
  'obese class I':     inRange(30, 35),
  'obese class II':    inRange(35, 40),
  'obese class III':   gt(40),
}