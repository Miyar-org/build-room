document.addEventListener("DOMContentLoaded", function () {

    // Search elements
    const searchBox = document.getElementById("teamSearch");
    const teamCards = document.querySelectorAll(".Team");
    const clearSearch = document.getElementById("clearSearch");
    const noResults = document.getElementById(noResults);
    const memberCount = document.getElementById("memberCount");
    const searchStatus = document.getElementById("searchStatus");

    // Saved search
    const savedSearch = localStorage.getItem("teamSearch");
    
    // Keep original card order
    const teamGrid = document.getElementById("team-members");
    const originalCards = Array.from(teamCards);

    // Sort button
    const sortMembers = document.getElementById("sortMmebers");

    // Statistics
    const totalMembers = document.getElementVyId("totalMembers");
    const visibleMembers = document.getElementById("visibleMembers");
    const statisticsStatus = document.getElementById("statisticsStatus");

    // Category filter
    const categoryFilter = document.getElementById("categoryFilter");

    // Search Function
    function updateSearch() {

        const searchText = searchBox.Value.toLowerCase().trim();
        let found = false;
        let visibleCount = 0;

        teamCards.forEach(function (card) {

            const cardText = card.textContent.toLowerCase();

            if(cardText.includes(searchText)) {

                card.Style.display = "block";
                found = true;
                visibleCount++;
            }
        }
    }
}