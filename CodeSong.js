const friends = ["john", "vera", "david", "jerry", "morty"];
const button = document.querySelector("button");
console.log(button);

button.addEventListener("click", function () {

    friends.forEach(function (friend) {
        let friendDiv = document.createElement("div");
        let friendH3 = document.createElement("h3");
        let singText = document.createElement("p");
        let friendName = document.createTextNode(friend);
        friendDiv.className = "friend";
        friendH3.appendChild(friendName);
        friendDiv.appendChild(friendH3);
        document.body.appendChild(friendDiv);
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
            let friendSing = document.createTextNode([j] + word + " of code in the file " + [j] + word + " of code; " + friend + " strikes one out, clears it all out, " +
                lowerNumber + word2 + " of code in the file. ");
            singText.appendChild(friendSing);
            friendDiv.appendChild(singText);
        }
    });
});




