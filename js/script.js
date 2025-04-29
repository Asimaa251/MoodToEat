// Ambil elemen
const startButton = document.getElementById('startButton');
const moodSelection = document.getElementById('moodSelection');
const foodResult = document.getElementById('foodResult');
const foodName = document.getElementById('foodName');
const foodImage = document.getElementById('foodImage');
const factButton = document.getElementById('factButton');
const foodFact = document.getElementById('foodFact');

// Data makanan berdasarkan mood
const moodFood = {
  senang: { name: 'Es Krim', image: 'https://i.pinimg.com/474x/4b/1a/e4/4b1ae4606fa0a92af9d16d4546c75fe6.jpg' },
  sedih: { name: 'Sup Hangat', image: 'https://i.pinimg.com/474x/20/05/10/200510de795248f7880d996191301ef5.jpg' },
  kesal: { name: 'Burger', image: 'https://i.pinimg.com/474x/eb/cb/c6/ebcbc6aaa9deca9d6efc1efc93b66945.jpg' },
  marah: { name: 'Ayam Geprek', image: 'https://i.pinimg.com/474x/45/68/c7/4568c7b89a46caff2e5bff7f62f613e0.jpg' },
  galau: { name: 'Coklat', image: 'https://i.pinimg.com/474x/7b/ca/e1/7bcae10844aebb288b62875298bbc693.jpg' },
  biasa: { name: 'Nasi Goreng', image: 'https://i.pinimg.com/474x/94/82/ab/9482ab2e248d249e7daa7fd6924c8d3b.jpg' }
};

// Fakta unik per mood
const foodFacts = {
  senang: "Tahukah kamu? Makan es krim bisa meningkatkan hormon bahagia yaitu serotonin!",
  sedih: "Sup hangat dapat memberikan rasa nyaman dan efek menenangkan saat kamu sedih.",
  kesal: "Makan burger bisa memicu rasa puas karena kombinasi daging dan karbohidrat.",
  marah: "Makanan pedas seperti ayam geprek bisa membantu melampiaskan emosi marah secara positif.",
  galau: "Coklat mengandung phenylethylamine yang bisa bikin kamu merasa jatuh cinta lagi!",
  biasa: "Nasi goreng adalah salah satu makanan favorit di dunia karena fleksibel dan cepat dibuat."
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
  factButton.style.display = 'inline-block';
  foodFact.textContent = "";

  // Tambah efek bounce pada gambar
  foodImage.classList.remove("bounce");
  void foodImage.offsetWidth;
  foodImage.classList.add("bounce");

  // Ketika tombol fakta unik diklik
  factButton.onclick = () => {
    foodFact.textContent = foodFacts[mood];
    foodFact.style.display = 'inline-block'; // tampilkan setelah ditekan
    foodFact.classList.remove("bounce");     // reset animasi
    void foodFact.offsetWidth;               // trigger reflow
    foodFact.classList.add("bounce");        // animasi bounce
  };
}


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
