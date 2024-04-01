export function lista(){
    const lista = [];
    for (let index = 0; index < 9; index++) {
        let szamok = Math.floor(Math.random()*2);
        lista.push(szamok);
    }
    console.log(lista)
    return lista
}

export function osszeAllit(lista){
    const ELEM = $("#korok");
    let txt = " ";
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] === 0){
            txt += `<div class=".elem" style="background-color : yellow"></div>`;
            console.log(txt)
        }else{
            txt += `<div class=".elem" style="background-color : green"></div>`;
            console.log(txt)
        }
    }

    txt += " ";

    ELEM.html(txt);

}

export function szinValto(lista){
    const ELEM = $("#korok").on("click", "div", function() {
        const ELEM2 = $(".elem").html($(this).html());
    });
}