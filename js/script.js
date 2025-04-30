// Ambil elemen
const startButton = document.getElementById('startButton');
const moodSelection = document.getElementById('moodSelection');
const foodResult = document.getElementById('foodResult');
const foodName = document.getElementById('foodName');
const foodImage = document.getElementById('foodImage');
const factButton = document.getElementById('factButton');
const foodFact = document.getElementById('foodFact');
const anotherButton = document.getElementById('anotherButton'); // DITAMBAHKAN

// Data makanan berdasarkan mood
const moodFood = {
  senang: [
    {
      name: 'Es Krim',
      image: 'https://i.pinimg.com/474x/cf/d7/f6/cfd7f651bee019993482a90419e5bce4.jpg',
      fact: 'Makan es krim bisa meningkatkan hormon serotonin yang bikin bahagia!'
    },
    {
      name: 'Strawberry Cheesecake',
      image: 'https://i.pinimg.com/474x/a4/77/57/a47757f29a50f876b751dd0bc82d8f4c.jpg',
      fact: 'Cheesecake pertama kali dibuat di Yunani kuno buat atlet Olimpiade.'
    },
    {
      name: 'Mochi Warna-warni',
      image: 'https://i.pinimg.com/474x/9b/9c/d8/9b9cd8ba78e0dab05e483343d81822e0.jpg',
      fact: 'Mochi membawa keberuntungan di Jepang.'
    }
  ],
  sedih: [
    {
      name: 'Sup Hangat',
      image: 'https://i.pinimg.com/474x/62/67/81/62678184ece7e348cdc70e94ba7de0a7.jpg',
      fact: 'Sup hangat bisa meredakan hidung tersumbat dan memberi efek tenang.'
    },
    {
      name: 'Mie Rebus',
      image: 'https://i.pinimg.com/474x/f6/b4/03/f6b403d823790c2ae54c12208088e5c8.jpg',
      fact: 'Makanan paling populer di malam hari. Banyak yang percaya mie itu “penghibur sejati”.'
    },
    {
      name: 'Bubur Ayam',
      image: 'https://i.pinimg.com/474x/a2/a5/27/a2a5270274776b41d8b15e7a6e72597b.jpg',
      fact: 'Di Tiongkok, bubur jadi simbol penghangat keluarga dan tradisi.'
    }
  ],
  kesal: [
    {
      name: 'Hamburger',
      image: 'https://i.pinimg.com/474x/eb/cb/c6/ebcbc6aaa9deca9d6efc1efc93b66945.jpg',
      fact: 'Burger modern berasal dari Hamburg, Jerman.'
    },
    {
      name: 'Taco Crunchy',
      image: 'https://i.pinimg.com/474x/7b/d3/ab/7bd3ab953dc78000f59db38a2672a357.jpg',
      fact: 'Taco aslinya dari Meksiko dan dulunya dibuat buat para penambang.'
    },
    {
      name: 'Pizza Pedas',
      image: 'https://i.pinimg.com/474x/2a/11/20/2a11206fb64a9844a1d1f274fde8af12.jpg',
      fact: 'Pizza awalnya makanan rakyat miskin di Italia. Sekarang jadi makanan mewah!'
    }
  ],
  marah: [
    {
      name: 'Ayam Geprek',
      image: 'https://i.pinimg.com/474x/10/c6/a9/10c6a9ba1e5f4d44e7f9c1e6946f890c.jpg',
      fact: 'Ini fusion antara ayam goreng barat dan sambal Indonesia.'
    },
    {
      name: 'Kebab Pedas',
      image: 'https://i.pinimg.com/474x/2d/33/1b/2d331b4ada7187beb50409087667cecc.jpg',
      fact: 'Asalnya dari Timur Tengah, tapi di Indonesia dikasih sambal sampai level akhirat!'
    },
    {
      name: 'Seblak Jeletot',
      image: 'https://i.pinimg.com/474x/1f/b5/96/1fb596406173b45728db8ab018d5a2f6.jpg',
      fact: 'Makanan khas Bandung yang super pedas, cocok untuk meluapkan emosi!'
    }
  ],
  galau: [
    {
      name: 'Coklat Batang',
      image: 'https://i.pinimg.com/474x/7b/ca/e1/7bcae10844aebb288b62875298bbc693.jpg',
      fact: 'Coklat bisa bikin otak lepasin endorfin alias hormon bahagia!'
    },
    {
      name: 'Puding Coklat',
      image: 'https://i.pinimg.com/474x/fd/48/f2/fd48f2048d577027d70ce232a5c62957.jpg',
      fact: 'Puding sudah ada sejak zaman Romawi, tapi dulu pakai daging!'
    },
    {
      name: 'Teh Panas + Roti Bakar',
      image: 'https://i.pinimg.com/474x/e5/6a/6a/e56a6a96b91988a1eac54e12d7c7e41e.jpg',
      fact: 'Teh sudah jadi minuman relaksasi sejak ribuan tahun lalu.'
    }
  ],
  biasa: [
    {
      name: 'Nasi Goreng',
      image: 'https://i.pinimg.com/474x/94/82/ab/9482ab2e248d249e7daa7fd6924c8d3b.jpg',
      fact: 'Dibuat dari nasi sisa yang digoreng supaya nggak terbuang.'
    },
    {
      name: 'Mie Ayam',
      image: 'https://i.pinimg.com/736x/10/9c/a0/109ca0cd6c676168beb76544a6052bd3.jpg',
      fact: 'Terinspirasi dari chicken noodle Tiongkok, tapi di-Indonesia-kan dengan kecap, sambal, dan pangsit!'
    },
    {
      name: 'Onigiri / Nasi Kucing',
      image: 'https://i.pinimg.com/736x/1a/59/23/1a592374588d7bc7f66e1976c5cdd30d.jpg',
      fact: 'Nasi kucing dinamain begitu karena porsinya kecil banget, kayak porsi makan kucing.'
    }
  ]
};


// Tombol "Mulai" ditekan
startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  moodSelection.style.display = 'block';
});

// Saat user pilih mood
function selectMood(mood) {
  const foodList = moodFood[mood];
  const randomIndex = Math.floor(Math.random() * foodList.length);
  const food = foodList[randomIndex];

  foodName.textContent = food.name;
  foodImage.src = food.image;
  foodResult.style.display = 'block';
  factButton.style.display = 'inline-block';
  foodFact.textContent = "";
  moodSelection.style.display = "none";

  foodImage.classList.remove("bounce");
  void foodImage.offsetWidth;
  foodImage.classList.add("bounce");

  anotherButton.style.display = 'inline-block';
  anotherButton.onclick = () => {
    selectMood(mood);
  };

  factButton.onclick = () => {
    foodFact.textContent = food.fact; // ambil dari objek makanan
    foodFact.style.display = 'inline-block';
    foodFact.classList.remove("bounce");
    void foodFact.offsetWidth;
    foodFact.classList.add("bounce");
  };
}

// Hujan Emote Makanan
const rainContainer = document.querySelector('.rain');
const emojis = ["🍔", "🍕", "🍟", "🍣", "🍩", "🍜", "🍦", "🍗", "🥪", "🍉"];

function createEmoji() {
  const emoji = document.createElement('span');
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = Math.random() * 2 + 3 + "s";
  rainContainer.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 5000);
}

setInterval(createEmoji, 300);
