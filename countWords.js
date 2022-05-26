// Write a function which count the number of occurrence of words in a paragraph or a sentence.The function countWords takes a paragraph and two words as parameters. It compare which word is most frequently occurred in the paragraph.

//declaring paragraph
const paragraph =
  "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";

//function declaring
function countWords(paragraph, word1, word2) {
  let count1 = 0;
  let count2 = 0;
  //splitting para
  let input = paragraph.split(" ");

  //counting words
  for (let i = 0; i < input.length; i++) {
    if (input[i].includes(word1)) {
      count1++;
    }
    if (input[i].includes(word2)) {
      count1++;
    }
  }
  //comparing count
  if (count1 > count2) {
    console.log(
      " The word " + word2 + " more frequently occurred than " + word1
    );
  } else if (count2 > count1) {
    console.log(
      " The word " + word1 + " more frequently occurred than " + word2
    );
  } else {
    console.log("Both words occured at same time");
  }
}
//printing result
const result = countWords(paragraph, "love", "you");
console.log(result);
