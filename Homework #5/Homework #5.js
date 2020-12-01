







function timeAdder(value1 = 25, label1 = 'hours', value2 = 3, label2 = 'days') {

    const validLabels = ['hour', 'minute', 'second', 'day', 'hours', 'minutes', 'seconds', 'days']
  
    // Validate input types.
    if (typeof(value1) !== 'number') return 'Argument 1 is not a number'
    if (value1 % 1 !== 0) return 'Argument 1 is not a whole number'
    if (typeof(value2) !== 'number') return 'Argument 2 is not a number'
    if (value2 % 1 !== 0) return 'Argument 2 is not a whole number'
    if (typeof(label1) !== 'string' || validLabels.indexOf(label1) === -1)
      return `${label1} is not a valid time label.`
    if (typeof(label2) !== 'string' || validLabels.indexOf(label2) === -1)
      return `${label2} is not a valid time label.`
  
    // Verify that the time value and plurality of the lasbel matches.
    // Start with tests of a time value of 1.
    if (value1 === 1 && validLabels.indexOf(label1) > 3)
      return `Time value ${value1} and label ${label1} is not valid`
    else if (value1 > 1 && validLabels.indexOf(label1) <= 3)
      return `Time value ${value1} and label ${label1} is not valid`
    if (value2 === 1 && validLabels.indexOf(label2) > 3)
      return `Time value ${value2} and label ${label2} is not valid`
    else if (value2 > 1 && validLabels.indexOf(label2) <= 3)
     return `Time value ${value2} and label ${label2} is not valid`
  
    // Convert first time value/label to seconds
    switch (label1) {
      case 'day':
      case 'days':
        value1 *= 86400
        break
      case 'hour':
      case 'hours':
        value1 *= 3600
        break
      case 'minute':
      case 'minutes':
        value1 *= 60
        break
      default:
        break // value 1 is already in seconds
    }
  
    // Convert second time value/label to seconds
    switch (label2) {
      case 'day':
      case 'days':
        value2 *= 86400
        break
      case 'hour':
      case 'hours':
        value2 *= 3600
        break
      case 'minute':
      case 'minutes':
        value2 *= 60
        break
      default:
        break // value 2 is already in seconds
    }
  
    // Total time in seconds
    timeInSecs = value1 + value2
  
    // Can time be converted into even number of days?
    if (timeInSecs % 86400 === 0) {
      let d = timeInSecs / 86400
      let retLabel = (d === 1) ? 'day' : 'days'
      return [d, retLabel]
    }
  
    // Can time be converted into even number of hours?
    if (timeInSecs % 3600 === 0) {
      let h = timeInSecs / 3600
      let retLabel = (h === 1) ? 'hour' : 'hours'
      return [h, retLabel]
    }
  
    // Can time be converted into even number of minutes?
    if (timeInSecs % 60 === 0) {
      let m = timeInSecs / 60
      let retLabel = (m === 1) ? 'minute' : 'minutes'
      return [m, retLabel]
    }
  
    // Need to return the toal time in seconds
    let retLabel = (timeInSecs === 1) ? 'second' : 'seconds'
    return [timeInSecs, retLabel]
  }
  
  
  let result
  
  // Invalid time value and label test cases:
  result = timeAdder(1, 'days', 1, 'hour')
  console.log(result)
  
  result = timeAdder(2, 'day', 1, 'hours')
  console.log(result)
  
  result = timeAdder([], 'seconds', 1, 'hours')
  console.log(result)
  
  result = timeAdder(3, false, 1, 'hours')
  console.log(result)
  
  result = timeAdder(1.5, 'minutes', 1, 'hours')
  console.log(result)
  
  // Test cases
  result = timeAdder(24, 'hours', 1, 'second')
  console.log(result)
  
  result = timeAdder(24, 'minutes', 60, 'seconds')
  console.log(result)
  
  result = timeAdder(24, 'hours', 1, 'hour')
  console.log(result)
  
  result = timeAdder(1, 'hour', 20, 'seconds')
  console.log(result)
  
  result = timeAdder(1, 'hour', 20, 'minutes')
  console.log(result)



  // extra credit
  result = timeAdder(20, 'hours', 5, 'hours')
  console.log(result)








  /*
  EZEBUIRO
  UCHECHUKWU
  VINCENT
  */