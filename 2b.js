//Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique



// const sevenRandomNumbers=()=>{
//     // Array.from({length: 10}, () => Math.floor(Math.random() * 10));
//     var arr = [];
// for (var i=0, t=7; i<t; i++) {
//     arr.push(Math.round(Math.random() * t))
// }

// }
// console.log(sevenRandomNumbers());

const sevenRandomNumbers = () => {
    let array = []
    for (let i = 0; i < 7; i++) {
      let x = Math.floor(Math.random() * 9 + 1)
      if (array.includes(x)) {
        i--
        continue
      } else {
        array.push(x)
      }
    }
  
    return array
  }
  console.log(sevenRandomNumbers())