// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  var directors = arr.map((element) => element.directors)
  return directors
  // console.log(directors)
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  if (arr.length === 0) {
    return 0
  }
  number = arr.filter(function (element) {
    return (
      element.director == 'Steven Spielberg' && element.genre.includes('Drama')
    )
  })

  return number.length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  var sum = arr.reduce(function (acum, e) {
    return acum + Number(e.rate)
  }, 0)
  return Number((sum / arr.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  var count = 0
  var average = arr.reduce(function (acc, element) {
    if (element.genre.includes('Drama')) {
      count++
      if (element.rate != '') {
        acc += parseFloat(element.rate)
      }
      // console.log(count)
    }
    // console.log(acc)
    return acc
  }, 0)
  if (average === 0) {
    return 0
  }
  return parseFloat((average / count).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  var movies = arr.map(function (element) {
    return element.year
  })
  movies.sort()
  return movies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  var answer = arr.map(function (element) {
    return element.title
  })
  answer.sort()
  // console.log(answer)
  return answer.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
  var newArr = arr.map(function (element) {
    if (element.duration.includes('h') && element.duration.includes('min')) {
      var hoursToMinutes = element.duration.split(' ')
      var hours = parseInt(hoursToMinutes[0].slice(0, 1))
      var minutes = parseInt(hoursToMinutes[1].slice(0, -3))
      element = hours * 60 + minutes
    } else if (element.duration.includes('h')) {
      var hours = parseInt(element.duration.slice(0, 1))
      element = hours * 60
    } else {
      var minutes = parseInt(element.duration.slice(0, -3))
      element = minutes
    }
    return { duration: element }
  })
  return newArr
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr) {
  if (arr.length === 0) {
    return
  }

  if (arr.length === 1) {
    return (
      'The best year was ' +
      arr[0].year +
      ' with an average rate of ' +
      arr[0].rate
    )
  }
  var tempArr = arr.map(function (e, i, a) {
    var filmYear = e.year
    var filmRate = parseFloat(e.rate)
    count = 1
    for (var j = 0; j < a.length; j++) {
      if (i != j && a[j].year === filmYear) {
        count++
        filmRate += parseFloat(a[j].rate)
      }
    }
    filmRate /= count.toFixed(2)
    return { year: filmYear, rate: filmRate + '' }
  })
  console.log(tempArr)
  arr = tempArr.filter(function (e, i, a) {
    for (var j = i + 1; j < a.length; j++) {
      if (e.filmYear === a[j].filmYear) {
        return true
      }
    }
    return false
  })

  var maxRate = 0
  var bestYear

  arr.forEach(function (e) {
    if (parseFloat(e.rate) > maxRate) {
      maxRate = parseFloat(e.rate)
      bestYear = e.year
    } else if (parseFloat(e.rate) === maxRate && bestYear > e.year) {
      bestYear = e.year
    }
  })
  return bestYear, maxRate
}
