
//arr penampung data
let arr = [];

//elemen dom
const list = document.querySelector(".container-hasil ul");
const inputData = document.querySelector("#input-data");
const tambahData = document.querySelector("#tambah-data");
const resetData = document.querySelector("#reset-data");
const hasilSorting = document.querySelector(".hasil-sorting ul");
const radioDesc = document.querySelector("[value='0']");
const radioAsc = document.querySelector("[value='1']");


//event listener
tambahData.addEventListener("click",()=>{
    cekInput(inputData.value);
    urutkanData();
    hasilSorting.innerHTML = '';
    arr.forEach((el)=>{
        hasilSorting.innerHTML += `
            <li>${el}</li>
        `;
    });
});

resetData.addEventListener("click",()=>{
    reset();
});

radioDesc.addEventListener("click",()=>{
    arr.sort( (a,b) => {
        return b-a;
    });
    hasilSorting.innerHTML = '';
    arr.forEach((el)=>{
        hasilSorting.innerHTML += `
            <li>${el}</li>
        `;
    });
});

radioAsc.addEventListener("click",()=>{
    hasilSorting.innerHTML = '';
    urutkanData();
});

//function
function cekInput(data){

    if(dataAngka = parseInt(data)){
        arr.push(dataAngka);
        list.innerHTML = '';
        arr.forEach((el)=>{
            list.innerHTML += `
                <li>${el}</li>
            `;
        });
    }
    else{
        alert("input tidak valid! masukkan angka");
    }
    inputData.value = '';
}

function reset() {
    arr  = [];
    list.innerHTML = '';
    hasilSorting.innerHTML = '';
}

function urutkanData(){
    arr.sort( (a,b) => {
        return a-b;
    });
    arr.forEach((el)=>{
        hasilSorting.innerHTML += `
            <li>${el}</li>
        `;
    });
    
}


