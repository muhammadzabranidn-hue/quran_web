const url = "https://equran.id/api/v2/surat"

let = dataSurat = []
tampikanLoading()

fetch(url)
.then(response => response.json()) 
.then(hasil => {

    dataSurat = hasil.data

    tampilkanSurat(dataSurat)
    hentikanLoading()

}).finnally( () => {
    hentikanLoading()
})
 
function tampilkanSurat( data ) {
    document.getElementById("alquran").innerHTML = "";

    for(let i = 0; i < data.length; i++) {
        // console.log(hasil.data[i].namaLatin);
        let surat = data[i]
        document.getElementById("alquran").innerHTML += `
        <h2> Nama : ${surat.nama}</h2>
        <h2> Nama Latin : ${surat.namaLatin}</h2>
        <h2> Jumlah Ayat : ${surat.jumlahAyat}</h2>
        <h2> Tempat Turun : ${surat.tempatTurun}</h2>
        <h2> Arti : ${surat.arti}</h2>
        <span> Deskripsi : ${surat.deskripsi}</span>  
        <a href="baca.html?nomor=${surat.nomor}">Baca Surat</a>
        <hr>
        `
    }
}

document.getElementById("cariSurat").addEventListener("input", function(){
    let keyword = this.value.toLowerCase()

    let hasilPencarian = dataSurat.filter(
        function(surat){
            return surat.namaLatin.toLowerCase().includes(keyword)
    })
    tampilkanSurat(hasilPencarian)
})

function tampikanLoading() {
    document.querySelector('.preloader').style.display = 'flex'
}
function hentikanLoading() {
    document.querySelector('.preloader').style.display = 'none'
}