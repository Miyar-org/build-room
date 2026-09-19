alert("JavaScript is connected!");

document.addEventListener("DOMContentLoaded", function () {

    const searchBox = document.getElementById("teamSearch");
    const teamCards = document.querySelectorAll(".Team")
    const clearSearch = document.getElementById("clearSearch");
    const noResults = document.getElementById("noResults");

    searchBox.addEventListener("input", function () {
        const searchText = searchBox.value.trim().toLowerCase();
        let found = false;

        teamCards.forEach(function (card) {
            const cardText = card.textContent.Content.toLowerCase();

            if (cardText.includes(searchText)) {
                card.Style.display = "";
                found = true;
            } else {
                card.style.display = "none";
            }
        });

        noResults.style.display = found ? "none" : "block"; 
    });

    clearSearch.addEventListener("click", function () {
        searchBox.value = "";

        teamCards.forEach(function (card) {
            card.style.display = "";
        });

        noResults.style.dislpay = "none";
    });

});