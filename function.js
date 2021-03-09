//Aritmatik işlemler
function aritmatikİslemler() {
    let tp = toplama();
    let ck = cikarma();
    let cr = carpma();
    let bl = bolme();
    return sonuc;
}


//Toplama
function toplama(birinciSayi, ikinciSayi) {
    let toplamaSonucu = birinciSayi + ikinciSayi;
    return toplamaSonucu
}
let result = toplama(6, 3);
console.log(result)

//Cikarma
function cikarma(birinciSayi, ikinciSayi) {
    let cikarmaSonucu = birinciSayi - ikinciSayi;
    return cikarmaSonucu
}
result = cikarma(6, 3);
console.log(result)

//Carpma
function carpma(birinciSayi, ikinciSayi) {
    let carpmaSonucu = birinciSayi * ikinciSayi;
    return carpmaSonucu
}
result = carpma(6, 3);
console.log(result)

//Bölme
function bolme(birinciSayi, ikinciSayi) {
    let bolmeSonucu = birinciSayi % ikinciSayi;
    return bolmeSonucu
}
result = bolme(6, 3);
console.log(result)

//eski modul sistemi
module.exports = aritmatikİslemler