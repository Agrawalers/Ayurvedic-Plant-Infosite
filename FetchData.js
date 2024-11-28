// Function to show the popup
function openPopup(title, extract, pageUrl) {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    
    document.getElementById('result-title').textContent = title;
    document.getElementById('result-text').textContent = extract;
    document.getElementById('result-link').href = pageUrl;
    
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

// Function to search for a plant and fetch data from Wikipedia API
function searchPlant() {
    const searchInput = document.getElementById('search-input').value;
    if (searchInput) {
        fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${searchInput}`)
            .then(response => response.json())
            .then(data => {
                if (data.title && data.extract) {
                    openPopup(data.title, data.extract, data.content_urls.desktop.page);
                } else {
                    openPopup("Not Found", "Sorry, no information available for this plant.", "#");
                }
            })
            .catch(error => {
                openPopup("Error", "Sorry, an error occurred while fetching the data.", "#");
            });
    }
}
