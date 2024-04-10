function podaciForme(){
    const ocena=document.getElementById('ocena').value;
    const brojIndeksa=document.getElementById('brojIndeksa').value;

    if(ocena<5 || ocena>10){
        document.getElementById('razlogGreskeOcena').innerHTML="Razlog geske: Ocena mora biti u opsegu [5-10]";
        document.getElementById('razlogGreskeOcena').style.color='red';
        document.getElementById('razlogGreskeOcena').style.display='block';
        return false;
    }

   // pattern-mora biti zadovoljen prilikom unosa
   const pattern = /^\d{4}\/\d{4}$/;
   if(!brojIndeksa.match(pattern)){
    document.getElementById('razlogGreskeBrojIndeksa').innerHTML="Razlog greske: Indeks mora biti u formatu YYYY/XXXX";
    document.getElementById('razlogGreskeBrojIndeksa').style.color='red';
    document.getElementById('razlogGreskeBrojIndeksa').style.display='block';
    return false;  
   }

   const godina=brojIndeksa.split("/")[0];
   const broj=brojIndeksa.split("/")[1];
   if(godina<2000 || broj<1 || broj>1000){
    document.getElementById('razlogGreskeBrojIneksa1').innerHTML="Razlog greske: Broj indeksa mora biti u opsegu[2000/1-2000/1000]";
    document.getElementById('razlogGreskeBrojIneksa1').style.color='red';
    document.getElementById('razlogGreskeBrojIneksa1').style.display='block';
    return false;
   }

   if(ocena>=6 && ocena<=10 && !document.getElementById('polozen').checked){
     document.getElementById('razlogGreske').innerHTML="Razlog greske: Ukoliko je ocena u opsegu [6-10] onda checkbox „Položio/la“ mora biti označen.";
     document.getElementById('razlogGreske').style.color='red';
     document.getElementById('razlogGreske').style.display='block';
     return false;
   }

   const obj={
    ocena: ocena,
    datumIzlaska: document.getElementById('datumIzlaska').value,
    brojIndeksa: brojIndeksa,
    rok: document.querySelector('input [name="rok"]:checked').value,
    redniBrojIzlaska: document.getElementById('izlazak').value,
    polozen: document.getElementById('polozen').checked
   };
   return JSON.stringify(obj);
}



const dugmePosalji= document.getElementById('posalji');

dugmePosalji.addEventListener('click',function(){

    const rezultat=podaciForme();
    if(rezultat){
        document.getElementById('podaci').value=rezultat;
        document.getElementById('ocena').value="";
        document.getElementById('brojIndkesa').value="";
        document.getElementById('izlazak').value="1";
        document.getElementById('datumizlaska').value="";
        document.querySelector('input[name="rok"]:checked').checked = false;
        document.getElementById('polozen').checked=false;

        document.getElementById('razlogGreske').style.display='none';
        document.getElementById('razlogGreskeOcena').style.display='none';
        document.getElementById('razlogGreskeBrojIndeksa').style.display='none';
        document.getElementById('razlogGreskeBrojIndeksa1').style.display='none';
    }
})
















































