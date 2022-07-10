const URL = "https://api.covid19api.com/summary";
const cou = document.getElementById("item-1");
const dt = document.getElementById('item-2');
const tc = document.getElementById('item-3');
const td = document.getElementById('item-4');
const nc = document.getElementById('item-5');
const nd = document.getElementById('item-6');
let getData = (url) => {
    fetch(url)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            let country = data.Countries[77].Country;
            let totalCases = data.Countries[77].TotalConfirmed;
            let totalDeaths = data.Countries[77].TotalDeaths;
            let newCase = data.Countries[77].NewConfirmed;
            let newDeaths = data.Countries[77].NewDeaths;
            let date = new Date().toDateString();

            cou.innerHTML += `${country}`;
            dt.innerHTML += `${date}`;
            tc.innerHTML += `${totalCases}`;
            td.innerHTML += `${totalDeaths}`;
            nc.innerHTML += `${newCase}`;
            nd.innerHTML += `${newDeaths}`;

        })
        .catch((error) => {
            console.log(error);
        });
};
getData(URL);

