// Keydowns that play sound
$("body").on("keydown", function(e){
    if ($("#checkbox").is(":checked")==true){
        e.stopImmediatePropagation();
    }else{
        e.preventDefault();
        const audio = $(`audio[data-key="${e.keyCode}"]`);
        if (!audio) return;
        audio[0].currentTime = 0;
        audio[0].play();
    }
});

// Song search section
var songInput;
var recentSearches = [];

$("#find-song").on("click", function(e){
    e.preventDefault();
    $("#displayResults").empty();
    $("#searchHistory").empty();

    // Populates most recent search
    recentSearches.push($('#song-search').val());
    $.each(recentSearches, function (index, value) {
        $('#searchHistory').prepend("<li class='historyItem'  onclick='addtotextbox("+index+")'>" + value + '</li>');
    });

    // Searches API for song name
    songInput = $("#song-search").val();
    $.ajax({
        url: "https://genius.p.rapidapi.com/search?q=" + songInput,
        method: "GET",
        headers: {
            "x-rapidapi-key": "2b3ce8ab43mshb05f40c986dc36ap1f1691jsnf60a0ccd4f8c",
            "x-rapidapi-host": "genius.p.rapidapi.com"
        }
    }).then(function(response){
        var lyricLink = $("<a>").text(`Song lyrics for ${songInput}`).attr({
            href: response.response.hits[0].result.url,
            target: "_blank"
        });
        var albumCover = $("<img>").attr({
            src: response.response.hits[0].result.header_image_url
        });
        $("#displayResults").append(lyricLink, albumCover);
    })
});

// Giphy section
$("#find-song").on("click", function(e){
    e.preventDefault();
    songInput = $("#song-search").val();
    var giphyAPIkey = "4MjGqkgCVoeXw1NgMZwCp288vS9erLZo"
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/random?api_key=" + giphyAPIkey + "&tag=" + songInput,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var imgURL = response.data.image_url
        var image = $("<img>").attr("src", imgURL);
        $("#gifs").prepend(image);
    })
})