


let KisiBilgileriArr = [];
var i = 0;

class KisiBilgileri {
	constructor(id,TCKN,Adi, Soyadi, Cinsiyet,Meslek,Uyruk,AnneAdi,BabaAdi,DogumYeri,DogumTarihi,VergiKimlikNo,YKN,IslemBaglantisi,EkBilgi){
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
        this.EkBilgi = EkBilgi
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
        var newCell = document.createElement("td");
        var newCell2 = document.createElement("td");

        newCell0.innerHTML = this.id;
        newCell.innerHTML = this.Adi;
        newCell2.innerHTML = this.Soyadi;
        newRow.append(newCell0);
        newRow.append(newCell);
        newRow.append(newCell2);
     
        document.getElementById("rows").appendChild(newRow);
     
       
      

    }
}

function addRowHandlers() {
    var table = document.getElementById("KisiBilgileriTablo");
    var rows = table.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
      var currentRow = table.rows[i];
      var createClickHandler = function(row) {
        return function() {
          var cell = row.getElementsByTagName("td")[0];
          var id = cell.innerHTML;
          alert("id:" + id);
        };
      };
      currentRow.onclick = createClickHandler(currentRow);
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
        inputEkbilgi
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

