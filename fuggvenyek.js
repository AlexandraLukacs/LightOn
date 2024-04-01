export function lista(){
    const lista = [];
    for (let index = 0; index < 9; index++) {
        let szamok = Math.floor(Math.random()*2);
        lista.push(szamok);
    }
    return lista
}

export function osszeAllit(lista){
    const ELEM = $("#korok");
    let txt = " ";
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] === 0){
            txt += `<div class="elem" style="background-color : yellow"></div>`;
        }else{
            txt += `<div class="elem" style="background-color : green"></div>`;
        }
    }

    txt += " ";

    ELEM.html(txt);

}

export function szinValto(lista){
    const ELEM = $(".elem").on("click", function() {
        for (let i = 0; i < lista.length; i++) {
            const ELEM2 = $(".elem").html($(this).html());
            if(lista[i] === 0){
                ELEM2.css("background-color", "green");
            }else{
                ELEM2.css("background-color", "yellow");
            }
        }
    });
}