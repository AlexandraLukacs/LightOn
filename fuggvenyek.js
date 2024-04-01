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
        if ($(this).css("background-color") === "rgb(0, 128, 0)") {
            $(this).css("background-color", "yellow");
        } else {
            $(this).css("background-color", "green");
        }
    })
}

export function ujJatek(){
    const ELEM = $("button").on("click", function(){
        osszeAllit(lista());
    })
}