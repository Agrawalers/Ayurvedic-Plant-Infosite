
// quiz
const Dailyquiz = document.getElementById("Dailyquiz");
Dailyquiz.addEventListener("click" , (e)=>{
    window.open("quiz.html", "_blank");
})

// search btn
document.getElementById('SearchBtn').addEventListener('click', function() {
    // Show popup and overlay
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});
function closePopup() {
    // Hide popup and overlay
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

//fetching data from wikipedia
function showPlantInfo(plantName) {
    const plantInfoSection = document.getElementById('popup');
    plantInfoSection.innerHTML = `<h3 class="text-2xl font-bold mb-4">${plantName}</h3>
                                  <p>Loading information about ${plantName}...</p>`;
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${plantName}`)
        .then(response => response.json())
        .then(data => {
            plantInfoSection.innerHTML = `<h3 class="text-2xl font-bold mb-4">${data.title}</h3>
                                          <p>${data.extract}</p>
                                          <a href="${data.content_urls.desktop.page}" target="_blank" class="text-blue-500 underline">Read more in our app</a>
                                          <p class="mt-4">To see it in 3D view, download our app <span class="font-bold text-green-600">Plantify</span>.</p>
                                          <button onclick="closePopup()">Close</button>
                                          `;
        })
        .catch(error => {
            plantInfoSection.innerHTML = `<p>Sorry, we couldn't fetch information about ${plantName}.</p>
            <button onclick="closePopup()">Close</button>
            `;
        });
}

function searchPlant() {
    const searchInput = document.getElementById('search-input').value;
    if (searchInput) {
        showPlantInfo(searchInput);
        
    }
}

            //enter functionalities
const searchInputEnter = document.getElementById('search-input');
            
searchInputEnter.addEventListener('keydown', (event)=>{
    if(event.key === 'Enter'){
        showOff();
        searchPlant();
    }
})
function showOff() {
    // Show popup and overlay
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}


//alovera peppermint curryLeaves and tulsi box functionalities
const aloverabox = document.getElementById("aloverabox");
const curryLeavesbox = document.getElementById("curryLeavesbox");
const tulsibox = document.getElementById("tulsibox");
const peppermintBox = document.getElementById("peppermintBox");

aloverabox.addEventListener("click", ()=>{
    window.open("alovera.html");
});
curryLeavesbox.addEventListener("click", ()=>{
    window.open("curryLeaves.html");
});
tulsibox.addEventListener("click", ()=>{
    window.open("tulsi.html");
});
peppermintBox.addEventListener("click", ()=>{
    window.open("peppermint.html");
});

//herbs functionalities

const acidHerbs = document.getElementById("acidHerbs");
acidHerbs.addEventListener('click', function() {
    // Show popup and overlay
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    const plantInfoSection = document.getElementById('popup');
    plantInfoSection.innerHTML = `<h3 class="text-2xl font-bold mb-4">Herbs that help in reducing Acidity are:</h3>
                                  <ol>
                                    <li><a href="https://www.youtube.com/watch?v=G1Q09d2-nbM">Aloevera </a> </li>
                                    <li> <a href="https://www.youtube.com/watch?v=_m8BLFYTXxc">Cassava </a></li>
                                    <li><a href="">Fennel </a> </li>
                                    <li><a href="">Ginger </a> </li>
                                    <li><a href=""> Lemon Grass</a> </li>
                                  </ol>
                                  <button onclick="closePopup()">Close</button>`;
});

const acneHerbs = document.getElementById("acneHerbs");
acneHerbs.addEventListener('click', function() {
    // Show popup and overlay
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    const plantInfoSection = document.getElementById('popup');
    plantInfoSection.innerHTML = `<h3 class="text-2xl font-bold mb-4">Herbs that help in reducing Acidity are:</h3>
                                  <ol>
                                    <li>Alamond </li>
                                    <li>Aloevera </li>
                                    <li>Basil </li>
                                    <li> Tea tree</li>
                                    <li>Amarnath </li>
                                  </ol>
                                  <button onclick="closePopup()">Close</button>`;
});

document.getElementById("anxietyHerbs").addEventListener('click', function() {
    // Show popup and overlay
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    const plantInfoSection = document.getElementById('popup');
    plantInfoSection.innerHTML = `<h3 class="text-2xl font-bold mb-4">Herbs that help in reducing Acidity are:</h3>
                                  <ol>
                                    <li>Azahar </li>
                                    <li>Cannabis </li>
                                    <li>Lemon Grass </li>
                                    <li> Ashwagandha</li>
                                    <li>Melissa</li>
                                  </ol>
                                  <button onclick="closePopup()">Close</button>`;
});

document.getElementById("skinHerbs").addEventListener('click', function() {
    // Show popup and overlay
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    const plantInfoSection = document.getElementById('popup');
    plantInfoSection.innerHTML = `<h3 class="text-2xl font-bold mb-4">Herbs that help in reducing Acidity are:</h3>
                                  <ol>
                                    <li>Alamond </li>
                                    <li>Aloevera </li>
                                    <li>Basil </li>
                                    <li> Tea tree</li>
                                    <li>Amarnath </li>
                                  </ol>
                                  <button onclick="closePopup()">Close</button>`;
});
document.getElementById("anemiaHerbs").addEventListener('click', function() {
    // Show popup and overlay
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    const plantInfoSection = document.getElementById('popup');
    plantInfoSection.innerHTML = `<h3 class="text-2xl font-bold mb-4">Herbs that help in reducing Acidity are:</h3>
                                  <ol>
                                    <li>Ashwagandha </li>
                                    <li>Coriander </li>
                                    <li>Sage </li>
                                    <li> Moringa</li>
                                    <li>Alfalfa </li>
                                  </ol>
                                  <button onclick="closePopup()">Close</button>`;
});
document.getElementById("agingHerbs").addEventListener('click', function() {
    // Show popup and overlay
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    const plantInfoSection = document.getElementById('popup');
    plantInfoSection.innerHTML = `<h3 class="text-2xl font-bold mb-4">Herbs that help in reducing Acidity are:</h3>
                                  <ol>
                                    <li>Ashwagandha </li>
                                    <li>Blueberry </li>
                                    <li>Lemon Grass </li>
                                    <li> Saffron</li>
                                    <li>Tea Leaves </li>
                                  </ol>
                                  <button onclick="closePopup()">Close</button>`;
});

//djfkdsklfds
const virLInk = document.getElementById("virLInk");
virLInk.addEventListener("click" , ()=>{
    window.open("./SIH_3D_Garden/index.html", "_blank");
})