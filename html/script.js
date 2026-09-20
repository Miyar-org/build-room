document.addEventListener("DOMContentLoaded", function () {

    const searchBox = document.getElementById("teamSearch");
    const teamCards = document.querySelectorAll(".Team")
    const clearSearch = document.getElementById("clearSearch");
    const noResults = document.getElementById("noResults");
    const memberCount = document.getElementById("memberCount");
    const savedSearch = localStorage.getItem("teamSearch");
    const searchStatus = document.getElementById("searchStatus");

    searchBox.addEventListener("input", function () {

        localStorage.setItem("teamSearch", searchBox.value);

        const searchText = searchBox.value.toLowerCase();
        if (searchBox.value.trim() !== "") {
            searchStatus.textContent = 'Searching for: "' + searchBox.value.trim() + '"';
        } else {
            searchStatus.textContent = "";
        }
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

        localStorage.removeItem("teamSearch");

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

     if (savedSearch) {
        searchBox.value = savedSearch;
        searchBox.dispatchEvent(new Event("input"));
     }

});