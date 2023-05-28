const osobe={ime:["Ante","Frano"],prezime:["Antić","Franić"]};
let imena=osobe.ime;
let prezimena=osobe.prezime;
//Ako želimo brojiti samoglasnike koristimo brojač
//let brojač=0;

//Provjera šta nam daju vrijednosti imena i prezimena a to su liste
//console.log(imena);
//console.log(prezimena);
function provjera_prvog_slova_samoglasnik(niz){
for (let index = 0; index < niz.length; index++) {
    const element = niz[index];
    //Element prikazuje imena iz liste ali si [0] prikazuje prvo slovo
    //console.log(element);
    let prvo_slovo=element[0];
    for (let index1 = 0; index1 < prvo_slovo.length; index1++) {
        const element1 = prvo_slovo[index1].toLowerCase();
        //Prikazuje samo slova
        //console.log(element1);
        if(element1==="a"||
        element1==="e"||
        element1==="i"||
        element1==="o"||
        element1==="u"){
            // brojač++;
            // console.log(brojač);
            console.log("Prvo slovo je samoglasnik kod naziva "+element+" .")
            odlomak("Prvo slovo je samoglasnik kod naziva "+element+" .")
        }
        else{
            console.log("Prvo slovo nije samoglasnik kod naziva "+element+" .")
            odlomak("Prvo slovo nije samoglasnik kod naziva "+element+" .")
        }
    }
}
}
provjera_prvog_slova_samoglasnik(imena);
provjera_prvog_slova_samoglasnik(prezimena);

function odlomak(value){
    const odlomak=document.createElement("p");
    odlomak.textContent=value;
    document.body.appendChild(odlomak)
}