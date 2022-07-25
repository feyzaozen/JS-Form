


let KisiBilgileriArr = [];
var i = 0;

class KisiBilgileri {
	constructor(id,TCKN,Adi, Soyadi, Cinsiyet,Meslek,Uyruk,AnneAdi,
    BabaAdi,DogumYeri,DogumTarihi,VergiKimlikNo,YKN,IslemBaglantisi,EkBilgi,
    NufusCuzdaniNo,TCKNoSeriNo,TCKNoSeriNoGecTar,SurucuBelgesiNo,ytSurucuBelgesiNo,
    ytSurucuBelgesiGecTar,IkametTezkeresiNo,PasaportNo,GecTar,DigerKimlik,
    DigerKimlikNo,ePosta,FaxNo,EvTelNo,IsTelNo,CepTelNo

    ){
		    this.id = id + 1,
        this.TCKN = TCKN,
        this.Adi = Adi,
        this.Soyadi = Soyadi,
        this.Cinsiyet = Cinsiyet,
        this.Meslek = Meslek,
        this.Uyruk = Uyruk,
        this.AnneAdi = AnneAdi,
        this.BabaAdi = BabaAdi,
        this.DogumYeri = DogumYeri,
        this.DogumTarihi = DogumTarihi,
        this.VergiKimlikNo = VergiKimlikNo,
        this.YKN = YKN,
        this.IslemBaglantisi = IslemBaglantisi,
        this.EkBilgi = EkBilgi,
        
        this.NufusCuzdaniNo = NufusCuzdaniNo,
        this.TCKNoSeriNo = TCKNoSeriNo,
        this.TCKNoSeriNoGecTar = TCKNoSeriNoGecTar,
        this.SurucuBelgesiNo = SurucuBelgesiNo,
        this.ytSurucuBelgesiNo = ytSurucuBelgesiNo,
        this.ytSurucuBelgesiGecTar = ytSurucuBelgesiGecTar,
        this.IkametTezkeresiNo = IkametTezkeresiNo,
        this.PasaportNo = PasaportNo,
        this.GecTar = GecTar,
        this.DigerKimlik = DigerKimlik,
        this.DigerKimlikNo = DigerKimlikNo,

        this.ePosta = ePosta,
        this.FaxNo = FaxNo,
        this.EvTelNo = EvTelNo,
        this.IsTelNo = IsTelNo,
        this.CepTelNo = CepTelNo


	}

    printKisi(){
        console.log(this.Adi);
        console.log(this.TCKN);
        console.log(this.Soyadi);
        console.log(this.Cinsiyet);
        console.log(this.Meslek);
        console.log(this.Uyruk);
        console.log(this.AnneAdi);
        console.log(this.BabaAdi);
        console.log(this.DogumYeri);
        console.log(this.DogumTarihi);
        console.log(this.VergiKimlikNo);
        console.log(this.YKN);
        console.log(this.IslemBaglantisi);
        console.log(this.EkBilgi);
    }


    addData() {
    
        var newRow = document.createElement("tr");
        var newCell0 = document.createElement("td");
        var newCell1 = document.createElement("td");
        var newCell2 = document.createElement("td");
        var newCell2 = document.createElement("td");
        var newCell3 = document.createElement("td");
        var newCell4 = document.createElement("td");
        var newCell5 = document.createElement("td");

        newCell0.innerHTML = this.id;
        newCell1.innerHTML = this.Adi;
        newCell2.innerHTML = this.Soyadi;
        newCell3.innerHTML = this.TCKN;
        newCell4.innerHTML = this.Cinsiyet;
        newCell5.innerHTML = this.Meslek;
        newRow.append(newCell0);
        newRow.append(newCell1);
        newRow.append(newCell2);
        newRow.append(newCell3);
        newRow.append(newCell4);
        newRow.append(newCell5);
     
        document.getElementById("rows").appendChild(newRow);
     
       
      

    }
}




function getValueInput(){
    let inputTckn = document.getElementById("tckn").value; 
    let inputAd = document.getElementById("ad").value; 
    let inputSoyad = document.getElementById("soyad").value; 
    let inputCinsiyet = document.getElementById("cinsiyet").value; 
    let inputMeslek = document.getElementById("meslek").value; 
    let inputUyruk = document.getElementById("uyruk").value; 
    let inputAnneAd = document.getElementById("anneAd").value; 
    let inputBabaAd = document.getElementById("babaAd").value; 
    let inputDogumYeri = document.getElementById("dogumYer").value; 
    let inputDogumTarihi = document.getElementById("dogumTarih").value; 
    let inputVkn = document.getElementById("vkn").value; 
    let inputYkn = document.getElementById("yknGir").value; 
    let inputIslemBag = document.getElementById("islem").value; 
    let inputEkbilgi = document.getElementById("ekBilgi").value;

    let inputNufusCuzdaniNo= document.getElementById("ncn").value; 
    let inputTCKNoSeriNo = document.getElementById("tcksn").value; 
    let inputTCKNoSeriNoGecTar = document.getElementById("tcksnGecTar").value; 
    let inputSurucuBelgesiNo = document.getElementById("surucuBelgesiNo").value; 
    let inputYTSurucuBelgesiNo = document.getElementById("ytSurucuBelgesiNo").value; 
    let inputYTSurucuBelgesiGecTar = document.getElementById("ytSurucuBelgesiGecTar").value; 
    let inputIkametTezkeresiNo = document.getElementById("ikametTezNo").value; 
    let inputPasaportNo = document.getElementById("pasaportNo").value; 
    let inputGecTar = document.getElementById("gecTar").value; 
    let inputDigerKimlik = document.getElementById("digerKimlik").value; 
    let inputDigerKimlikNo = document.getElementById("digerKimlikNo").value; 

    let inputEPosta = document.getElementById("ePosta").value; 
    let inputFaxNo = document.getElementById("faxNo").value; 
    let inputEvTelNo = document.getElementById("evTelNo").value;
    let inputIsTelNo = document.getElementById("isTelNo").value; 
    let inputCepTelNo= document.getElementById("cepTelNo").value;

  

     
    Kisi_ = new KisiBilgileri(
        i,
        inputTckn,
        inputAd,
        inputSoyad,
        inputCinsiyet,
        inputMeslek,
        inputUyruk,
        inputAnneAd,
        inputBabaAd,
        inputDogumYeri,
        inputDogumTarihi,
        inputVkn,
        inputYkn,
        inputIslemBag,
        inputEkbilgi,
        inputNufusCuzdaniNo,
        inputTCKNoSeriNo,
        inputTCKNoSeriNoGecTar,
        inputSurucuBelgesiNo,
        inputYTSurucuBelgesiNo,
        inputYTSurucuBelgesiGecTar,
        inputIkametTezkeresiNo,
        inputPasaportNo,
        inputGecTar,
        inputDigerKimlik,
        inputDigerKimlikNo,
        inputEPosta,
        inputFaxNo,
        inputEvTelNo,
        inputIsTelNo,
        inputCepTelNo
    );
    
    KisiBilgileriArr.push(Kisi_);
    
    
    KisiBilgileriArr[i].addData();
    i += 1;
    
    

    

    tckn.value = '';
    ad.value = '';
    soyad.value = '';
    cinsiyet.value = '';
    meslek.value = '';
    uyruk.value = '';
    anneAd.value = '';
    babaAd.value = '';
    dogumYer.value = '';
    dogumTarih.value = '';
    vkn.value = '';
    yknGir.value = '';
    islem.value = '';
    ekBilgi.value = '';
    ncn.value = '';
    tcksn.value = '';
    tcksnGecTar.value = '';
    surucuBelgesiNo.value = '';
    ytSurucuBelgesiNo.value = '';
    ytSurucuBelgesiGecTar.value = '';
    ikametTezNo.value = '';
    pasaportNo.value = '';
    gecTar.value = '';
    digerKimlik.value = '';
    digerKimlikNo.value = '';
    ePosta.value = '';
    faxNo.value = '';
    evTelNo.value = '';
    isTelNo.value = '';
    cepTelNo.value = '';
    
    
    console.log(KisiBilgileriArr.length);
 
}


console.log(KisiBilgileriArr.length);
  



function openForm(evt, formName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
 
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  document.getElementById(formName).style.display = "block";
  evt.currentTarget.className += " active";
}

