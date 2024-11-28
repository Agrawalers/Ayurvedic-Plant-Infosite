function showPlantInfo(plantName) {
    alert("woriking");
    const plantInfoSection = document.getElementById('plant-info');
    plantInfoSection.innerHTML = `<h3 class="text-2xl font-bold mb-4">${plantName}</h3>
                                  <p>Loading information about ${plantName}...</p>`;
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${plantName}`)
        .then(response => response.json())
        .then(data => {
            plantInfoSection.innerHTML = `<h3 class="text-2xl font-bold mb-4">${data.title}</h3>
                                          <p>${data.extract}</p>
                                          <a href="${data.content_urls.desktop.page}" target="_blank" class="text-blue-500 underline">Read more in our app</a>
                                          <p class="mt-4">To see it in 3D view, download our app <span class="font-bold text-green-600">Plantify</span>.</p>`;
        })
        .catch(error => {
            plantInfoSection.innerHTML = `<p>Sorry, we couldn't fetch information about ${plantName}.</p>`;
        });
}

function searchPlant() {
    const searchInput = document.getElementById('search-input').value;
    if (searchInput) {
        showPlantInfo(searchInput);
    }
}