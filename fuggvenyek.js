export function lista(){
    const lista = [];
    for (let index = 0; index < 8; index++) {
        let szamok = Math.floor(Math.random()*2);
        lista.push(szamok);
    }
    return lista
}

export function osszeAllit(lista){
    const ELEM = $("#korok");
    let txt = " ";
    for (let i = 0; i < lista.lenght; i++) {
        if(lista[i] === 0){
            txt += `<div style="background-color : yellow"></div>`;
        }else{
            txt += `<div style="background-color : green"></div>`;
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