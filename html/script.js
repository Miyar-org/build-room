document.addEventListener("DOMContentLoaded", function () {

    const searchBox = document.getElementById("teamSearch");
    const teamCards = document.querySelectorAll(".Team")
    const clearSearch = document.getElementById("clearSearch");
    const noResults = document.getElementById("noResults");
    const memberCount = document.getElementById("memberCount");
    const savedSearch = localStorage.getItem("teamSearch");

    searchBox.addEventListener("input", function () {

        localStorage.setItem("teamSearch", searchBox.value);

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

        let visibleMembers = 0;

        teamCards.forEach(function (card) {
            if (card.style.display !== "none") {
                visibleMembers++;

            }
        });

        memberCount.textContent = "Showing " + visibleMembers + (visibleMembers === 1 ? " member" : " members");
    });

    searchBox.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            clearSearch.click();
        }

    });

    clearSearch.addEventListener("click", function () {

        searchBox.value = "";

        teamCards.forEach(function (card) {
            card.style.display = "block";
        });

        noResults.style.display = "none";

        memberCount.textContent = "Showing " + teamCards.length + (teamCards.length === 1 ? " member" : " members");

    });

    teamCards.forEach(function (card) {

        card.addEventListener("keydown", function (event) {

            if (event.key === "Enter") {
                card.click();

            }

        });  

     });

     memberCount.textContent = "Showing " + teamCards.length + (teamCards.length === 1 ? " member" : " members");

});