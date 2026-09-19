document.addEventListener("DOMContentLoaded", function () {
    
    function openProfile(page) {
        window.location.href = page;
    }

    const searchBox = document.getElementById("teamSearch");
    const teamCards = document.querySelectorAll(".Team");
    const clearSearch = document.getElementById("clearSearch");
    const noResults = document.getElementById("noResults");

    searchBox.addEventListener("input", function () {
        const searchText = searchBox.ariaValueMax.trim().toLowerCase();
        let found = false;

        teamCards.forEach(function (card) {
            const name = card.querySelector("h2").textContent.toLowerCase();

            if (name.includes(searchText)) {
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

    noResults.style.display = "none";
});

teamCards.forEach(function (card) {
    card.addEventListener("click", function () {
        const page = card.getAttribute("onclick").match(/'([^']+)'/)[1];
        openProfile(page);
    });
});

});