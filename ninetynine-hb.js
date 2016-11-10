function singNinetyNineBottles() {



    // Initialize the bottle count at 99
    var bottleCountInit = 99;
    var bottleCount = bottleCountInit;

    // Use correct grammar to match the bottle count
    function findBottleWord() {
        var bottleWord;
        if (bottleCount > 1) {
            bottleWord = " bottles";
        } else if (bottleCount > 0) {
            bottleWord = " bottle";
        } else {
            bottleWord = "no more bottles";
        };
        return bottleWord;
    };

    // Capitalize the first letter of a string
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    var lyricsData = {lyrics: []};

    // Add lyrics to Handlebars array
    function createLyric (lyricStart, lyricEnd) {
        var lineBreak = "<br>";

        var lyricObj = {lyricDivContent: lyricStart + lineBreak + lyricEnd};

        lyricsData.lyrics.push(lyricObj);
    }

    // Start the song and loop until the bottle count reaches 0
    while (bottleCount > 0) {
        // Build the lyric
        var lyric = [bottleCount + findBottleWord(), "of beer on the wall,", bottleCount + findBottleWord(), "of beer. "];

        // Reduce the bottle count by one
        bottleCount--;

        // If the bottle count is zero, set it to nothing. Otherwise, add a space.
        if (bottleCount == 0) {
            var bottleCount = "";
        }
        ;

        // Complete the lyric
        var lyricEnd = ["Take one down and pass it around,", bottleCount + findBottleWord(), "of beer on the wall."];

        // Print both parts of the lyric as separate lines joined with spaces, with 2-line lyrics separated with a blank line
        createLyric(lyric.join(" "), lyricEnd.join(" "));
    };

    // Re-evaluate bottle count so that the script knows it is zero. I feel like this line is redundant, but I don't know what else to do.
    var lyric = [bottleCount + findBottleWord(), "of beer on the wall,", bottleCount + findBottleWord(), "of beer. "];

    // When the bottle count reaches zero, restore the bottle count to 99
    var bottleCount = 99;
    lyricFinal = ["Go to the store and buy some more,", bottleCount + findBottleWord(), "of beer on the wall."];

    // End the song with the final lyric. Make sure that the first character is capitalized.
    // (in "real life" we'd make sure the first character of all lines are capitalized, but I didn't in order to keep things simpler)
    createLyric(capitalizeFirstLetter(lyric.join(" ")), lyricFinal.join(" "));

    return lyricsData;
};