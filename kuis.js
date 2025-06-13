const soalContainer = document.getElementById("soal");
const jawabanContainer = document.getElementById("jawaban");
const submitButton = document.getElementById("submit");
const hasilContainer = document.getElementById("hasil");
 
const pertanyaan = [
    {
        soal: "Negara manakah yang paling banyak memenangkan piala dunia?",
        jawaban: ["Argentina", " Jerman", "Brazil", "Portugal"],
        jawabanBenar: "Brazil",
    },
    {
        soal: "Negara manakah yang memiliki ekonomi terbesar?",
        jawaban: ["Amerika serikat", "Swiss", "Denmark", "Korea utara"],
        jawabanBenar: "Amerika serikat", 
    },
    {
        soal: "Gunung apa yang tertinggi di dunia?",
        jawaban: ["Merapi", "Everest", "Fuji", "Makalu"],
        jawabanBenar: "Everest", 
    },
    {
        soal: "Negara manakah yang memiliki masjid terbanyak?",
        jawaban: ["Arab saudi", "Qatar", "Indonesia", "Turki"],
        jawabanBenar: "Indonesia", 
    },
    {
        soal: "Apa nama planet terbesar di tata surya?",
        jawaban: ["Mars", "Bumi", "Venus", "Jupiter"],
        jawabanBenar: "Jupiter", 
    },
];
 
let skor = 0;
let soalSaatIni = 0;
 
function tampilkanSoal() {
    const soal = pertanyaan[soalSaatIni];
    soalContainer.textContent = soal.soal;
 
    jawabanContainer.innerHTML = "";
    soal.jawaban.forEach((jawaban) => {
        const tombol = document.createElement("button");
        tombol.textContent = jawaban;
        tombol.addEventListener("click", () => cekJawaban(jawaban));
        jawabanContainer.appendChild(tombol);
    });
}
 
function cekJawaban(jawaban) {
    const soal = pertanyaan[soalSaatIni];
    if (jawaban === soal.jawabanBenar) {
        skor++;
    }
 
    soalSaatIni++;
    if (soalSaatIni < pertanyaan.length) {
        tampilkanSoal();
    } else {
        tampilkanHasil();
    }
}
 
function tampilkanHasil() {
    hasilContainer.textContent = `Skor Anda: ${skor} dari ${pertanyaan.length}`;
}
 
tampilkanSoal();