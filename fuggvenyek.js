export function lista() {
  const lista = [];
  for (let index = 0; index < 9; index++) {
    let szamok = Math.floor(Math.random() * 2);
    lista.push(szamok);
  }
  return lista;
}

export function osszeAllit(lista) {
  const ELEM = $("#korok");
  let txt = " ";
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 0) {
      txt += `<div class="elem"  id="${i}" style="background-color : yellow"></div>`;
    } else {
      txt += `<div class="elem" id="${i}"  style="background-color : green"></div>`;
    }
  }

  txt += " ";

  ELEM.html(txt);
}

export function szinValto(lista) {
    const ELEM = $(".elem");
    ELEM.on("click", function (event) {
    let i = parseInt(event.target.id);
      szv(i);
      if (i % 3 !== 0) {
        szv(i - 1);
      }
      if (i % 3 !== 2) {
        szv(i + 1);
      }
      if (i >= 3) {
        szv(i - 3);
      }
      if (i < 6) {
        szv(i + 3);
      }
    });
  }
  

export function ujJatek() {
  const ELEM = $("button").on("click", function () {
    osszeAllit(lista());
    szinValto(lista());
  });
}

function szv(index) {
  const ELEM = $(".elem");
  if (ELEM.eq(index).css("background-color") === "rgb(0, 128, 0)") {
    ELEM.eq(index).css("background-color", "yellow");
  } else {
    ELEM.eq(index).css("background-color", "green");
  }
}
export function szomszedosOldal(szinValto) {
  if (i % 3 !== 0) {
    szinValto();
  }
  if (i % 3 !== 2) {
  }
  if (i >= 3) {
  }
  if (i < 6) {
  }
}


