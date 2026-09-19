document.addEventListener("DOMContentLoaded", function () {

    const searchBox = document.getElementById("teamSearch");
    const teamCards = document.querySelectorAll(".Team")
    const clearSearch = document.getElementById("clearSearch");
    const noResults = document.getElementById("noResults");

    searchBox.addEventListener("input", function () {

        const searchText = searchBox.value.toLowerCase();
        let found = false;

        teamCards.forEach(function (card) {

            if (card.textContent.toLowerCase().includes(searchText)) {
                card.style.display = "block";
                found = true;
            } else {
                card.style.display = "none";
            }

        });

        if (found) {
            noResults.style.display = "none";
        } else {
            noResults.style.display = "block";
        }
    });

    clearSearch.addEventListener("click", function () {

        searchBox.value = "";

        teamCards.forEach(function (card) {
            card.style.display = "block";
        });

        noResults.style.dislpay = "none";
        
    });

});