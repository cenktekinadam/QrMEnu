import { renderMenuItem } from "./ui.js";
/* 
!***********Urel deki arama parametresin erişme (Search-Param) ************
!JS te Urldeki arama parametrelerini yönetmeteye yarayan yerleşik bir class vardır
!UrlSearchParams
*/

// Url deki parametreleri yönetmemizi sağlyacak bir NEsne oluşturmamaızlazım
const params = new URLSearchParams(window.location.search)
const paramId = params.get('id')

//Url içerisindeki parametrelerden ihtiyacımız olanı cağırıdk

//! Sayfanın Yüklenmesini İzle 
document.addEventListener('DOMContentLoaded', async (itex) => {
    //? Apidan Verileri Al
    const xyz = await fetch("../db.json")
    const data = await xyz.json();
    //? Veriler arasında urldeki idye denk geleni al 
     const product =   data.menu.find((item)=> item.id == paramId) 
    //? Elindeki JSon verilerini sayfa renderla
renderPage(product)
})

const outlet =document.getElementById('outlet');
function renderPage(product) {
    outlet.innerHTML = `
    <div class="d-flex justify-content-between fs-5">
    <a href="/">
        <img width="40px" src="/images/home.png" alt="">
    </a>
    <p>Anasayfa / ${product.category} / ${product.title}</p>
</div>



   <!-- İçerik -->
<h1 class="text-center my-3">${product.title}</h1>
<img src="${product.img}" alt="">
<h3 class="mt-4">
<span>Ürün Kategorisi</span>
<span class="text-success">${product.category}</span>
</h3>
<h3 class="mt-4">
<span>Ürün Fiyatı</span>
<span class="text-success">${product.price} ₺</span>
</h3>
<p class="lead"> ${product.desc}</p>
    `
}