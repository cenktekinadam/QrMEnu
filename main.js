//? Diğer Dosyalardan Alınan veriler İmport Export metodlarıyla gerçekleşir

import { renderMenuItem,renderButtons } from "./scripts/ui.js";
const buttonsArea = document.getElementById('buttons');


let data;

async function fetchMenu() {
   //! Apidan Verileri al
   const res = await fetch("./db.json");

   //!JSon Verisini js verisine çevir
   data = await res.json();

}
//* Olayı İzleyip (Sayfanın Yüklenme olayını izleyip  Jsondan veri  Çektik)
window.addEventListener("DOMContentLoaded", async()=>{
   //Ekrana Butonları BAs
   renderButtons('Hepsi');
   //Verileri :Eken Fonksiyonu Çalıştırır
     fetchMenu()
     // Fonksiyon Başarılı olursa EKrana  KArtları BAsa Funk Çalışır
     .then(() => renderMenuItem(data.menu))
   })

//* Butonlara Tıklanma olayını izler

 buttonsArea.addEventListener("click",(event)=>{
   //Sadece Butonlara Toklanınca ÇAlışır
   if(event.target.id == "buttons")return;

// Active olan Butonu Belrlemek içn Butonlaraı ekrana tekrar bas
renderButtons(event.target.innerText);

   // Tıklanma olayının Gerçekleştiği Butonun data idsini(KAtegorisini) almamız  gerekir
   const categoryName= event.target.dataset.id;
// All Tıklanıldıgında Filtreleme yapmadan renderla
   if (categoryName === 'all') {
      renderMenuItem(data.menu);
     } 
 else{
   // KAtegoriye Göre de Filtreleme Yapılması Gerekir
   const filtred = data.menu.filter((item)=>item.category===categoryName);
  renderMenuItem(filtred);

}
})


 











//! MEnü İçeriklerini Json Dosyasından ÇEkme işlemi
//* aSYNC FONKSİYONU
//!  S SENKRON YANİ SIRALI EŞZAMANLI BİR ŞEKİLDE ÇALIŞIR dOLAYISIYLA BİZİM APIDAN VERİ ÇEKME İŞLEMİMİZ UZUN SÜRE BİLİR 
//!vERİ ÇEKME İŞLEMİ UZUN SÜRDÜĞÜNDEN JS ÇALIŞMAYI DURUDURUP HATA VEREBİLİR
 //!BUNUN ${ASYNC} FONKSİYONU İLE  SENKRON ŞEKİLDE ÇALIŞAN pROJEMİZİ ETKİ ETMEDEN  fARKLI ZAMANDA ÇALIŞMASINA İZİN VEREBİLİRİZ
 //UZUN SÜRECEK  ASENKRON SORGULARA BAĞLI JS İŞLEMLERİ İSE 
//? fETCH meTODU İSTEK ARACIDIR.Belirtilen adresten get isteği gönderirir
//* JSon MEtodu ise converter gibi düüşüne biliriz Jsonın objesini js NEsnesine Dönüştürür