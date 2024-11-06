document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM is fully loaded and parsed");
    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-card");


    // return true or false based on regex
    function validateUsername(username) {
        if (username.trim() === ""){
            alert("Usernmae shouldn't be empty!");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if (!isMatching){
            alert("Invalid Username");
            return false;
        }
        return isMatching;
    }
    // async function for calling api
    async function fetchUserDetails(username){
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
        try {
            searchButton.textContent = 'Searching...';
            searchButton.disabled = true;

            const response = await fetch(url);
            console.log(`Fetching data for ${username}`);
            if(!response.ok){
                throw new Error("Unable to fetch the User details");
            } 
            const parsedData = await response.json();
            console.log("Logging data:", parsedData);
            displayUserData(parsedData);
        }
        catch(error){
            statsContainer.innerHTML = `<p>${error.message}</p>`;
        }
        finally{
            searchButton.textContent = 'Search';
            searchButton.disabled = false;
        }
    }
    function updateProgress(solved, total, label, circle){
        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }
    function displayUserData(parsedData) {
        const totalHardQues = parsedData.totalHard;
        const totalEasyQues = parsedData.totalEasy;
        const totalMediumQues = parsedData.totalMedium;
        const totalQues = parsedData.totalQuestions;
        const totalSolvedHardQues = parsedData.hardSolved;
        const totalSolvedEasyQues = parsedData.easySolved;
        const totalSolvedMediumQues = parsedData.mediumSolved;
        const totalSolvedQues = parsedData.totalSolved;
        updateProgress(totalSolvedEasyQues, totalEasyQues, easyLabel, easyProgressCircle);
        updateProgress(totalSolvedMediumQues, totalMediumQues, mediumLabel, mediumProgressCircle);
        updateProgress(totalSolvedHardQues, totalHardQues, hardLabel, hardProgressCircle);

        const cardsData = [
            {label: "Acceptance Rate", value: parsedData.acceptanceRate},
            {label: "Ranking", value: parsedData.ranking},
            {label: "Contribution Points", value: parsedData.contributionPoints},
            {label: "Reputation", value: parsedData.reputation}
        ];
        console.log(cardsData);
        cardStatsContainer.innerHTML = cardsData.map(
            data => 
                    `<div class="card">
                    <h4>${data.label}</h4>
                    <p>${data.value}</p>
                    </div>`
        ).join("");
    }
    searchButton.addEventListener('click', function() {
        const username = usernameInput.value;
        console.log(username);
        if(validateUsername(username)) {
            fetchUserDetails(username);
        }
    })

})