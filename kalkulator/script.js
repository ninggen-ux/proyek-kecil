function kalkulator() {
    let angkaPertama = document.getElementById("angka-pertama").value;
    let angkaKedua = document.getElementById("angka-kedua").value;
    let operasiPerhitungan = document.getElementById("operasi-perhitungan").value;
    let hasilPerhitungan = document.getElementById("hasil");
    hasilPerhitungan.innerHTML = "";
    let angka = [Number(angkaPertama), Number(angkaKedua)];
    try {
        if (angkaPertama == "") throw "Angka Pertama Kosong";
        if (operasiPerhitungan == "") throw "Tolong pilih salah satu operasi yang tersedia";
        if (angkaKedua == "") throw "Angka Kedua Kosong";
    } catch (err) {
        hasilPerhitungan.innerHTML = `Error: ${err}.`;
    }
    switch (operasiPerhitungan) {
        case "+":
            hasilPerhitungan.innerHTML = `hasil dari penjumlahan dari 
            ${angkaPertama} dan ${angkaKedua} adalah: ${angka[0] + angka[1]}`;
            break;
        case "x":
        case "X":
        case "*":
            hasilPerhitungan.innerHTML = `hasil dari perkalihan dari 
            ${angkaPertama} dan ${angkaKedua} adalah: ${angka[0] * angka[1]}`;
            break;
        case "-":
            hasilPerhitungan.innerHTML = `hasil dari perngurangan dari 
            ${angkaPertama} dan ${angkaKedua} adalah: ${angka[0] - angka[1]}`;
            break;
        case "/":
            hasilPerhitungan.innerHTML = `hasil dari pembagian dari 
            ${angkaPertama} dan ${angkaKedua} adalah: ${angka[0] / angka[1]}`;
            break;
    }
}