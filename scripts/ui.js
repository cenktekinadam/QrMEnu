import { buttonData } from "./constants.js";

const buttonsArea = document.getElementById("buttons")

const menuList = document.getElementById('menu-list')

//Arayüz Değişikliği Yapan Bütün Fonksiyonları bu Dosyada Tutacağız
export const renderMenuItem = (data) => {
    //! Data Dizisindeki her bir obje için Bir tane cart html oluşturur
    //*Oluşturulan kartları menulist divine aktarır
    //? Join Methodu ile Oluşturulan Diziyi stringe çevirecek
    menuList.innerHTML = data.map((item) => ` <a id="card" href="./detail.html?id=${item.id}" class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3">
    <img class="rounded shadow img-fluid" src="${item.img}" /><div>
        <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">${(item.price * 30).toFixed()}</p>
        </div>
        <p class="lead">${item.desc}</p>
    </div>
</a>`).join('');
};
//Dizideki HEr bir Eleman için Ekrana Basan Buton Yazan Fonks

export const renderButtons = (activeText) => {

    //Eski Oluşturulan Butonları Kaldırır
    buttonsArea.innerText = "";
    buttonData.forEach((btn) => {

        //1 Buton Elementi oluşturulacak
        const buttonEle = document.createElement('button')
        //2 Class Belirleyecegiz
        buttonEle.className = "btn btn-outline-dark"
        //3 Data-id Belirleyeceğiz
        buttonEle.setAttribute('data-id', btn.value)
        //4 İçerik Belirlenecek
        buttonEle.innerText = btn.Text
        // Buton Yazısı Aktifse yada Clası BgSiyah yap
        if (btn.Text == activeText) {
            buttonEle.classList.add('btn-dark', 'text-white')
        }
        //6 Buton Doma Gönderilecek
        buttonsArea.appendChild(buttonEle);
    })
}

/* 
 <!--     <button data-id="all" class="btn btn-outline-dark">Hepsi</button>
*/