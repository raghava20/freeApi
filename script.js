let process = document.querySelector(".cat-list");

//As the api has high no of links(1400) it will take time to display on the screen

async function freeApi() {
    let data;

    data = await fetch("https://api.publicapis.org/entries")
    let response = await data.json();
    displayResult(response);

}
freeApi();//fetching free api's from the link

async function displayResult(response) {

    const { entries } = await response;

    entries.map(value => {
        process.innerHTML += `
    <div class="card">
        <div class="card-header">
        <h4>${value.API}<h/4>
        </div>
        <div class="card-body">
            <h6 class="card-title">Category: ${value.Category}</h6>
            <p class="card-text">${value.Description}</p>
            <a href="${value.Link} target="_blank" class="btn btn-primary">Go</a>
        </div>
    </div>`})
}