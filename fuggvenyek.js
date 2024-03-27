export function lista(){
    const lista = [];
    for (let index = 0; index < 8; index++) {
        let szamok = Math.floor(Math.random()*2);
        lista.push(szamok);
    }
    return lista
}

export function osszeAllit(lista){
    

}

export function szinValto(lista){
    const ELEM = $("#korok").on("click", "div", function() {
        const ELEM2 = $(".elem").html($(this).html());
    });
}