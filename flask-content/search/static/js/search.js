let searchBox = document.getElementById("pokesearch");
searchBox.addEventListener("input", filter);

function filter() {
    var searchString = searchBox.value;
    var pokeList = document.getElementById("pokelist");
    var pokemon = pokeList.getElementsByTagName("li");
    for (var i = 0; i < pokemon.length; ++i) {
        if (searchString == "") {
            pokemon[i].style.display = "list-item";
        }
        else if (!pokemon[i].innerText.toLowerCase().includes(searchString.toLowerCase())) {
            pokemon[i].style.display = "none";
        }
        else {
            pokemon[i].style.display = "list-item";
        }
    }
}