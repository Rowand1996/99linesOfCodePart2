const friends = ["jhon", "bob", "david", "jerry", "morty"];
for (let i = 0; i < friends.length; i++) {


    for (let j = 99; j > 0; j--) {
        let word = " lines"
        if (j === 1) {
            word = " line"
        }
        let lowerNumber = [j] - 1;
        let word2 = " lines"
        if (lowerNumber === 1) {
            word2 = " line"
        }
        console.log(friends[i] + ": " + [j] + word + " of code in the file " + [j] + word + " of code; " + friends[i] + " strikes one out, clears it all out, " +
            lowerNumber + word2 + " of code in the file");
    }
}