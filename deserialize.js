function popuniFormu(){

    const textArea=document.getElementById('podaci').value;
    const objekat=JSON.parse(textArea);

    document.getElementById('ocena').value=objekat.ocena;
    document.getElementById('brojIndeksa').value=objekat.brojIndeksa;
    document.getElementById('izlazak').value=objekat.redniBrojIzlaksa;
    document.getElementById('datumIzlaska').value=objekat.datumIzlaska;
    document.getElementById('input [name="rok"]').checked=objekat.rok;
    document.getElementById('polozen').checked=objekat.polozen;
}

const dugmeUcitaj=document.getElementById('ucitaj');
dugmeUcitaj.addEventListener('click',function(){
    popuniFormu();

    const jsonString=document.getElementById('podaci').value;
    const objekat=JSON.parse(jsonString);

    const ocena=objekat.ocena;
    const brojIndeksa=objekat.brojIndeksa;
    const datumIzlaska=objekat.datumIzlaska;
    const polozen=objekat.polozen;

    if(ocena<5 || ocena>10){
        document.getElementById('razlogGreskeOcena').innerHTML="Razlog greske:  Ocena mora biti u opsegu [5-10]";
        document.getElementById('razlogGreskeOcena').style.color='red';
        document.getElementById('razlogGreskeOcena').style.display='block';
        return false;
    }

    const patern= /^\d{4}\/\d{4}$/;
    if(!brojIndeksa.match(pattern)){
        document.getElementById('razlogGreskeBrojIndeksa').innerHTML=  "Razlog greske: Broj indeksa mora biti u opsegu [2000/1-2000/1000]";
        document.getElementById('razlogGreskeBrojIndeksa').style.color='red';
        document.getElementById('razlogGreskeBrojIndeksa').style.display='block';
        return false;
    }

    const godina=brojIndeksa.split("/")[0];
    const broj=brojIndeksa.split("/")[0];
    if (godina < 2000 || broj < 1 || broj > 1000) {
        document.getElementById("greskaTextArea").innerHTML =
          "Razlog greske: Broj indeksa mora biti u opsegu [2000/1-2000/1000].";
        document.getElementById("greskaTextArea").style.display = "block";
        document.getElementById("greskaTextArea").style.color = "red";
        return false;
      }

      if (ocena >= 6 && !document.getElementById("polozen").checked) {
        document.getElementById("greskaTextArea").innerHTML =
          "Razlog greske: Ukoliko je ocena u opsegu [6-10] onda checkbox „Položio/la“ mora biti označen.";
        document.getElementById("greskaTextArea").style.display = "block";
        document.getElementById("greskaTextArea").style.color = "red";
        return false;
      }


      if(objekat.ocena==null || objekat.brojIndeksa==null || objekat.datumIzlaska==null ||
        objekat.rok==null || objekat.redniBrojIzlaksa==null || objekat.polozen==null){
          document.getElementById('greskaTextArea').innerHTM= "Razlog greske: Niste uneli sve podatke.";
          document.getElementById('greskaTextArea').style.color='red';
          document.getElementById('greskaTextArea').style.display='block';
          return false;
        }

})










