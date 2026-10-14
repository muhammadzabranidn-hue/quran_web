const url = "https://equran.id/api/v2/surat"

fetch(url)
.then(response => response.json()) 
.then(hasil => {
    console.log(hasil.data[0].namaLatin);
})
 