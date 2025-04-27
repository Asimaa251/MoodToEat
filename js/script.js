// Ambil elemen
const startButton = document.getElementById('startButton');
const moodSelection = document.getElementById('moodSelection');
const foodResult = document.getElementById('foodResult');
const foodName = document.getElementById('foodName');
const foodImage = document.getElementById('foodImage');
const mapDiv = document.getElementById('map');

// Data makanan berdasarkan mood
const moodFood = {
  senang: { name: 'Es Krim', image: 'https://i.pinimg.com/474x/4b/1a/e4/4b1ae4606fa0a92af9d16d4546c75fe6.jpg' },
  sedih: { name: 'Sup Hangat', image: 'https://i.pinimg.com/474x/20/05/10/200510de795248f7880d996191301ef5.jpg' },
  kesal: { name: 'Burger', image: 'https://i.pinimg.com/474x/eb/cb/c6/ebcbc6aaa9deca9d6efc1efc93b66945.jpg' },
  marah: { name: 'Ayam Geprek', image: 'https://i.pinimg.com/474x/45/68/c7/4568c7b89a46caff2e5bff7f62f613e0.jpg' },
  galau: { name: 'Coklat', image: 'https://i.pinimg.com/474x/7b/ca/e1/7bcae10844aebb288b62875298bbc693.jpg' },
  biasa: { name: 'Nasi Goreng', image: 'https://i.pinimg.com/474x/94/82/ab/9482ab2e248d249e7daa7fd6924c8d3b.jpg' }
};

// Tombol "Mulai" ditekan
startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  moodSelection.style.display = 'block';
});

// Saat user pilih mood
function selectMood(mood) {
  const food = moodFood[mood];
  foodName.textContent = food.name;
  foodImage.src = food.image;
  foodResult.style.display = 'block';
  mapDiv.style.display = 'block';

  // Panggil Maps
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showMap, handleLocationError);
  } else {
    alert('Geolocation tidak didukung oleh browser ini.');
  }
}

// Fungsi untuk menampilkan peta
function showMap(position) {
  const userLocation = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };

  const map = new google.maps.Map(document.getElementById('map'), {
    center: userLocation,
    zoom: 15
  });

  // Marker lokasi user
  new google.maps.Marker({
    position: userLocation,
    map: map,
    title: "Lokasimu"
  });

  // Cari restoran terdekat
  const service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: userLocation,
    radius: 1500,
    type: ['restaurant']
  }, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      results.forEach(place => {
        new google.maps.Marker({
          position: place.geometry.location,
          map: map,
          title: place.name
        });
      });
    }
  });
}

// Kalau gagal ambil lokasi
function handleLocationError(error) {
  alert('Gagal mendapatkan lokasi: ' + error.message);}




  // Hujan Emote Makanan
const rainContainer = document.querySelector('.rain');
const emojis = ["🍔", "🍕", "🍟", "🍣", "🍩", "🍜", "🍦", "🍗", "🥪", "🍉"];

function createEmoji() {
  const emoji = document.createElement('span');
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = Math.random() * 2 + 3 + "s"; // durasi jatuh
  rainContainer.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 5000);
}

setInterval(createEmoji, 300); // Setiap 300ms munculin 1 emoji

