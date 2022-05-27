// After cleaning the text in the sentence from question number b you will get the following text. Count the number of words in this text. Don't include words with only one letter.

const sentence = `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`;

const countWords = () => {
  // splitting sentence into individual words
  let array = sentence.split(" ");
  let count = 0;

  // looping through the sentence
  for (i = 0; i < array.length; i++) {
    //avoiding words with one letter
    if (array[i].length > 1) {
      count++;
    }
  }
  return count;
};

console.log(countWords(sentence));
