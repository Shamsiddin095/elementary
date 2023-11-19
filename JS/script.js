function home27() {
  var paragraph = document.getElementById("container");
  paragraph.style.display =
    paragraph.style.display === "none" || paragraph.style.display === ""
      ? "block"
      : "none";
}
function begin() {
  var paragraph = document.getElementById("container_begin");
  paragraph.style.display =
    paragraph.style.display === "none" || paragraph.style.display === ""
      ? "block"
      : "none";
}
function goif() {
  var paragraph = document.getElementById("container_if");
  paragraph.style.display =
    paragraph.style.display === "none" || paragraph.style.display === ""
      ? "block"
      : "none";
}
function gocase() {
  var paragraph = document.getElementById("container_case");
  paragraph.style.display =
    paragraph.style.display === "none" || paragraph.style.display === ""
      ? "block"
      : "none";
}
function ifdavomi() {
  var paragraph = document.getElementById("container_if_davomi");
  paragraph.style.display =
    paragraph.style.display === "none" || paragraph.style.display === ""
      ? "block"
      : "none";
}
function forwhile() {
  var paragraph = document.getElementById("container_for");
  paragraph.style.display =
    paragraph.style.display === "none" || paragraph.style.display === ""
      ? "block"
      : "none";
}

function showContent(menu) {
  var rightSection = document.getElementById("right-section");
  switch (menu) {
    case "menu1":
      rightSection.innerHTML =
        "Menu 1 tanlandi! Bu joyda Menu 1 bo'lsa chiqadigan content bo'lishi mumkin.";
      break;
    case "menu2":
      rightSection.innerHTML =
        "Menu 2 tanlandi! Bu joyda Menu 2 bo'lsa chiqadigan content bo'lishi mumkin.";
      break;
    case "menu3":
      rightSection.innerHTML =
        "Menu 3 tanlandi! Bu joyda Menu 3 bo'lsa chiqadigan content bo'lishi mumkin.";
      break;
    default:
      rightSection.innerHTML = "Bosh sahifa";
      break;
  }
}

function task1() {
  let num1 = prompt("birinchi son:");
  let num2 = prompt("Ikkinchi son:");

  let yigindi = Number(num1) + Number(num2);

  console.log("yig'indi: " + yigindi);
  alert("yig'indi: " + yigindi);
}
function task2() {
  let son1 = +prompt("Birinchi son:");
  let son2 = +prompt("ikkinchi son:");
  let son3 = +prompt("uchinchi son:");

  let orta = (son1 + son2 + son3) / 3;

  console.log("O'rta arifmetik: " + orta);
  alert("O'rta arifmetik " + orta);
}
function task3() {
  let son1 = prompt("Birinchi sonni kiriting:");
  let son2 = prompt("Ikkinchi sonni kiriting:");

  let kvadrat1 = son1 * son1;
  let kvadrat2 = son2 * son2;

  let yigindi = kvadrat1 + kvadrat2;

  console.log("Kvadratlar yig'indisi: " + yigindi);
  alert("kvadratlar yig'indisi:" + yigindi);
  s;
}
function task4() {
  let d = prompt("Aylananing diametrini kiriting:");
  let PI = 3.14;
  let l = PI * d;

  console.log("Aylani uzunligi: " + l);
  alert("aylaning uzunligi:" + l);
}
function task5() {
  let L = prompt("Doiraning uzunligini kiriting:");

  let Radius = L / (2 * 3.14);
  let Yuza = 3.14 * Radius * Radius;

  console.log("Doiraning radiusi: " + Radius);
  console.log("Doiraning yuzasi: " + Yuza);
  alert("Doira radiusi: " + Radius + "\nDoira yuzasi: " + Yuza);
}
function task6() {
  let s = prompt("Doiraning yuzasini kiriting:");
  let r = Math.sqrt(s / 3.14);
  let d = 2 * r;

  console.log("Doira radiusi: " + r);
  console.log("Doira diametri: " + d);
  alert("Doira radiusi: " + r + "\nDoira diametri: " + d);
}
function task7() {
  let bayt = +prompt("baytni kiriting:");
  let natija = 1024 * bayt;
  console.log("siz kiritgan son :" + natija);
  alert("kilobaytdagi qiymat: " + natija);
}
function task8() {
  let kesma1 = +prompt("A kesmani kiriting:");
  let kesma2 = +prompt("B kesmani kiriting:");

  let natija = kesma1 / kesma2;
  alert("B kesma A kesma orasida: " + natija);
}
function task9() {
  let kesmaA = +prompt("A kesmani kiriting:");
  let kesmaB = +prompt("B kesmani kiriting:");

  let natija = kesmaA / kesmaB;
  let qoldiq = kesmaA % kesmaB;

  console.log("A kesma B kesma orasida :" + natija);
  console.log("Qoldiq:" + qoldiq);
  alert("A kesma B kesma orasida :" + natija);
  alert("Qoldiq :" + qoldiq);
}
function task10() {
  let son = +prompt("ikki xonali son kiriting: ");
  birinchi_raqam = son % 10;
  ikkinchi_raqam = (son - birinchi_raqam) / 10;
  yigindi = birinchi_raqam ** 2 + ikkinchi_raqam ** 2;
  alert("kvadratlar yig'indisi:" + yigindi);
}
function task11() {
  let son = +prompt("Ikki xonali son kiriting");
  let birlar = son % 10;
  let onlar = (son - birlar) / 10;
  let teskari = birlar * 10 + onlar;
  alert("Teskari natija:" + teskari);
}
function task12() {
  let son = +prompt("Uch xonali son kiriting");

  let birlar_xonasi = son % 10;
  let x = son % 100;
  let onlar_xonasi = (x - birlar_xonasi) / 10;
  let yuzlar_xonasi = (son - x) / 100;

  alert(
    "yuzlar xonasi: " +
      yuzlar_xonasi +
      "\n o'nlar xonasi " +
      onlar_xonasi +
      "\n Birlar xonasi: " +
      birlar_xonasi
  );
}
function task13() {
  let son = +prompt("Uch xonali son kiriting");
  let birlar = son % 10;
  let x = son % 100;
  let onlar = (x - birlar) / 10;
  let yuzlar = (son - x) / 100;
  let yigindi = birlar + onlar + yuzlar;

  alert(" yigindi " + yigindi);
}
function task14() {
  let son = +prompt("Uch xonali son kiriting");
  let birlar = son % 10;
  let x = son % 100;
  let onlar = (x - birlar) / 10;
  let yuzlar = (son - x) / 100;

  alert(" Teskari tartibda: " + birlar + "" + onlar + "" + yuzlar);
}
function task15() {
  let son = +prompt("Uch xonali son kiriting");
  let birlar = son % 10;
  let x = son % 100;
  let onlar = (x - birlar) / 10;
  let yuzlar = (son - x) / 100;

  alert("son " + x + "" + yuzlar);
}
function task16() {
  let son = +prompt("Uch xonali son kiriting");
  let birlar = son % 10;
  let x = son % 100;
  let onlar = (x - birlar) / 10;
  let yuzlar = (son - x) / 100;

  alert("natija: " + birlar + "" + yuzlar + "" + onlar);
  console.log("natija " + birlar + "" + yuzlar + "" + onlar);
}
function task17() {
  let son = +prompt("Uch xonali son kiriting");
  let birlar = son % 10;
  let x = son % 100;
  let onlar = (x - birlar) / 10;
  let yuzlar = (son - x) / 100;

  alert("Natija:" + yuzlar + "" + birlar + "" + onlar);
}
function task18() {
  let son = +prompt("Uch xonali son kiriting");
  let birlar = son % 10;
  let x = son % 100;
  let onlar = (x - birlar) / 10;
  let yuzlar = (son - x) / 100;

  alert("Natija:" + onlar + "" + yuzlar + "" + birlar);
}
function task19() {
  let son = +prompt("to'rt xonali son kiriting");
  let birlar = son % 10;
  let onlar = ((son % 100) - birlar) / 10;
  let yuzlar = ((son % 1000) - (son % 100)) / 100;
  let minglar = ((son % 10000) - (son % 1000)) / 1000;
  alert("Natija:" + birlar + "" + onlar + "" + yuzlar + "" + minglar);
}
function task20() {
  let son = +prompt("999 dan katta son kiriting: ");
  let birlar = son % 10;
  let butun = son / 10;
  let qoldiq = son % 10;
  let onlar = ((son % 100) - birlar) / 10;
  alert(
    "butuni: " +
      butun +
      "\n Qoldiq: " +
      qoldiq +
      " \nonlik xonasidagi raqam: " +
      onlar
  );
}
function task21() {
  let son = +prompt("999 dan katta son kiriting: ");
  let butun = son / 10;
  let qoldiq = son % 10;
  let yuzlar = ((son % 1000) - (son % 100)) / 100;

  alert(
    "butuni: " +
      butun +
      "\n Qoldiq: " +
      qoldiq +
      "\nyuzalar xonasidagi raqam: " +
      yuzlar
  );
}
function task22() {
  let son = +prompt("999 dan katta son kiriting: ");
  let butun = son / 10;
  let qoldiq = son % 10;
  let minglar = ((son % 10000) - (son % 1000)) / 1000;

  alert(
    "butuni: " +
      butun +
      "\n Qoldiq: " +
      qoldiq +
      "\nyuzalar xonasidagi raqam: " +
      minglar
  );
}
function task23() {
  let sekund = +prompt("sekundni kiriting:");
  let minut = sekund / 60;

  alert("natija minutda:" + minut);
}
function task24() {
  let sekund = +prompt("sekundni kiriting:");
  let soat = sekund / 3600;

  alert("natija soatda:" + soat);
}
function task25() {
  let son = +prompt("sekundni kiriting:");
  let sekund = son % 60;
  let minut = ((son % 3600) - sekund) / 60;
  let soat = (son - (son % 3600)) / 3600;
  alert(+minut + " minut" + "\n" + sekund + " sekund");
}
function task26() {
  let son = +prompt("sekundni kiriting:");
  let sekund = son % 60;
  let minut = ((son % 3600) - sekund) / 60;
  let soat = (son - (son % 3600)) / 3600;
  alert(+soat + " soat\n" + "\n" + sekund + " sekund");
}
function task27() {
  let son = +prompt("sekundni kiriting:");
  let sekund = son % 60;
  let minut = ((son % 3600) - sekund) / 60;
  let soat = (son - (son % 3600)) / 3600;
  alert(
    +soat + " soat\n" + "\n" + minut + " minut" + "\n" + sekund + " sekund"
  );
}
function task28() {
  let Jasur_buyi = 1.8;
  let Jasur_massa = 70;
  let Navruz_buyi = 1.73;
  let Navruz_massa = 55;

  let BMIjasur = 70 / (1.8 * 1.8);
  let BMInavruz = 55 / (1.73 * 1.73);

  alert("Jasur BMI =" + BMIjasur + "/n Navruz BMI = " + BMInavruz);
  alert(BMIjasur >= BMInavruz);
}

function if1() {
  let num = +prompt("son kiriting:");
  let natija;

  if (num > 0) {
    natija = 1;
  } else if (num < 0) {
    natija = -1;
  } else {
    natija = 0;
  }
  alert("qiymat:" + natija);
}
function if2() {
  let a = +prompt("a son = ");
  let b = +prompt("b son = ");

  yigindi = a + b;
  let natija;
  if (yigindi < 4) {
    natija = "Below";
  } else {
    natija = " Over";
  }
  alert("natija:" + natija);
}
function if3() {
  alert("Ro'yhatdan o'tish uchun login parol kiriting:");
  let login = prompt("Login kiriting:");
  let parol = +prompt(" 4 talik son parol kiriting :");
  alert("Ro'yhatdan o'tdingiz:");
  alert("Parol va login kiriting:");
  let l = prompt("loginingiz:");
  let p = +prompt("parolingiz");

  if (!l || !p) {
    alert("NuN NuN NuN NuN NuN NuN NuN NuN ");
  } else if (l == login && p == parol) {
    alert("Muvaffaqiyatli");
    window.location.href =
      "https://kun.uz/news/2023/11/09/dunyo-siyosiy-arxitekturasi-tom-manoda-ozgarmoqda-shavkat-mirziyoyev";
  } else {
    alert("Notug'ri parol yoki login");
  }
}
function begin5() {
  let a = +prompt("Kubning yon qiymati a ni kiriting:");
  let v = a * a * a;
  let s = 6 * (a * a);
  alert("kubning hajmi:" + v + "\n kubning yuzasi:" + s);
}
function begin6() {
  let a = +prompt("a tomon = ");
  let b = +prompt(" b tomon = ");
  let c = +prompt("c tomon = ");
  let v = a * b * c;
  let s = 2 * (a * b + b * c + a * c);
  alert("hajmi: " + v + "\n yuzi: " + s);
}
function begin7() {
  let R = +prompt("Doira Radiusni kiriting:");
  let PI = 3.14;
  let V = 2 * PI * R;
  let S = PI * (R * R);
  alert("Doira hajmi: " + V + "\nDoira yuzasi: " + S);
}
function begin8() {
  let a = +prompt("a son = ");
  let b = +prompt(" b son = ");
  let orta_arif = (a + b) / 2;
  alert("o'rta arifmetigi: " + orta_arif);
}
//case misollarrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
function case5() {
  let a = parseFloat(prompt("a ni kiriting:"));
  let b = parseFloat(prompt("b ni kiriting:"));
  let amal = +prompt(
    "Amalni tanlang:\n1 - Qo'shish\n2 - Ayirish\n3 - Bo'lish\n4 - Ko'paytirish"
  );
  switch (amal) {
    case 1:
      natija = a + b;
      alert("Natija: " + natija);
      break;
    case 2:
      natija = a - b;
      alert("Natija: " + natija);
      break;
    case 3:
      natija = a / b;
      alert("Natija: " + natija);
      break;
    case 4:
      natija = a * b;
      alert("Natija: " + natija);
      break;
    default:
      alert("Noto'g'ri amal tanlandi.");
  }
}

function case6() {
  let ifoda = +prompt(
    "Ifoda turini tanlang:\n1 - Ditsemtr\n2 - Kilometr\n3 - Metr\n4 - Santimetr\n5 - Millimetr"
  );
  let qiymat = +prompt("Qiymatni kiriting:");
  switch (ifoda) {
    case 1:
      qiymat *= 0.1;
      break;
    case 2:
      qiymat *= 1000;
      break;
    case 3:
      break;
    case 4:
      qiymat *= 0.01;
      break;
    case 5:
      qiymat *= 0.001;
      break;
    default:
      alert("Noto'g'ri ifoda tanlandi.");
  }
  alert("Natija metrda: " + qiymat + " metr");
}
function case7() {
  let ifoda = +prompt(
    "Ifoda turini tanlang:\n1 - kilogram\n2 - Miligramm\n3 - gramm\n4 - Tonna\n5 -senter"
  );
  let qiymat = +prompt("Qiymatni kiriting:");
  switch (ifoda) {
    case 1:
      break;
    case 2:
      qiymat *= 0.000001;
      break;
    case 3:
      qiymat *= 0.001;
      break;
    case 4:
      qiymat *= 1000;
      break;
      qiymat *= 0.01;
      break;
    default:
      alert("Noto'g'ri ifoda tanlandi.");
  }
  alert("Natija kilogrammda: " + qiymat + " kilogramm");
}

function if10() {
  let a = +prompt("a son kiriting: ");
  let b = +prompt("b son kiriting: ");
  let nol = 0;
  if (a != b) {
    natija = a + b;
    alert("natija:" + natija + "\n a son = " + a + "\n b son = " + b);
  } else {
    alert("natija:" + nol + "\n a son = " + a + "\n b son = " + b);
  }
}
function if11() {
  let a = +prompt("a son kiriting: ");
  let b = +prompt("b son kiriting: ");
  let nol = 0;
  if (a < b) {
    alert("kattasi:" + b + " \n a son = " + a + "\n b son = " + b);
  } else if (a > b) {
    alert("kattasi:" + a + " \n a son = " + a + "\n b son = " + b);
  } else {
    alert("teng:" + nol + " \n a son = " + a + "\n b son = " + b);
  }
}
function if12() {
  let son1 = +prompt("1-sonni kiriting:");
  let son2 = +prompt("2-sonni kiriting:");
  let son3 = +prompt("3-sonni kiriting:");

  let engKichik = son1;

  if (son2 < engKichik) {
    engKichik = son2;
  }

  if (son3 < engKichik) {
    engKichik = son3;
  }
  alert("Eng kichik son: " + engKichik);
}
function if13() {
  let son1 = +prompt("1-sonni kiriting:");
  let son2 = +prompt("2-sonni kiriting:");
  let son3 = +prompt("3-sonni kiriting:");
  let engKatta, engKichik;

  if (son1 >= son2 && son1 >= son3) {
    engKatta = son1;
  } else if (son2 >= son1 && son2 >= son3) {
    engKatta = son2;
  } else {
    engKatta = son3;
  }

  if (son1 <= son2 && son1 <= son3) {
    engKichik = son1;
  } else if (son2 <= son1 && son2 <= son3) {
    engKichik = son2;
  } else {
    engKichik = son3;
  }
  let ortaSon;

  if (son1 != engKatta && son1 != engKichik) {
    ortaSon = son1;
  } else if (son2 != engKatta && son2 != engKichik) {
    ortaSon = son2;
  } else {
    ortaSon = son3;
  }
  alert("O'rtadagi son: " + ortaSon);
}
function if14() {
  let son1 = +prompt("1-sonni kiriting:");
  let son2 = +prompt("2-sonni kiriting:");
  let son3 = +prompt("3-sonni kiriting:");
  let engKatta, engKichik;

  if (son1 >= son2 && son1 >= son3) {
    engKatta = son1;
  } else if (son2 >= son1 && son2 >= son3) {
    engKatta = son2;
  } else {
    engKatta = son3;
  }

  if (son1 <= son2 && son1 <= son3) {
    engKichik = son1;
  } else if (son2 <= son1 && son2 <= son3) {
    engKichik = son2;
  } else {
    engKichik = son3;
  }
  let ortaSon;

  if (son1 != engKatta && son1 != engKichik) {
    ortaSon = son1;
  } else if (son2 != engKatta && son2 != engKichik) {
    ortaSon = son2;
  } else {
    ortaSon = son3;
  }
  alert("natija: " + "\nkichigi: " + engKichik + "\n kattasi " + engKatta);
}
function if15() {
  let son1 = +prompt("1-sonni kiriting:");
  let son2 = +prompt("2-sonni kiriting:");
  let son3 = +prompt("3-sonni kiriting:");
  let yigindi1 = son1 + son2;
  let yigindi2 = son2 + son3;
  let yigindi3 = son1 + son3;

  let engKattaYigindi, engKattaSon;

  if (yigindi1 >= yigindi2 && yigindi1 >= yigindi3) {
    engKattaYigindi = yigindi1;
    engKattaSon = son3;
  } else if (yigindi2 >= yigindi1 && yigindi2 >= yigindi3) {
    engKattaYigindi = yigindi2;
    engKattaSon = son1;
  } else {
    engKattaYigindi = yigindi3;
    engKattaSon = son2;
  }
  alert("Eng katta yig'indi: " + engKattaYigindi);
  alert("Eng katta yig'indi bo'lgan son: " + engKattaSon);
}
function if16() {
  let son1 = +prompt("1-sonni kiriting:");
  let son2 = +prompt("2-sonni kiriting:");
  let son3 = +prompt("3-sonni kiriting:");

  if (son1 <= son2 && son2 <= son3) {
    son1 *= 2;
    son2 *= 2;
    son3 *= 2;
  } else {
    let temp;

    if (son1 > son2) {
      temp = son1;
      son1 = son2;
      son2 = temp;
    }

    if (son2 > son3) {
      temp = son2;
      son2 = son3;
      son3 = temp;
    }

    if (son1 > son2) {
      temp = son1;
      son1 = son2;
      son2 = temp;
    }
  }
  alert("Sonlar: " + son1 + ", " + son2 + ", " + son3);
}

function if17() {
  let son1 = +prompt("1-sonni kiriting:");
  let son2 = +prompt("2-sonni kiriting:");
  let son3 = +prompt("3-sonni kiriting:");
  if ((son1 <= son2 && son2 <= son3) || (son1 >= son2 && son2 >= son3)) {
    son1 *= 2;
    son2 *= 2;
    son3 *= 2;
  } else {
    let temp;

    if (son1 > son2) {
      temp = son1;
      son1 = son2;
      son2 = temp;
    }

    if (son2 > son3) {
      temp = son2;
      son2 = son3;
      son3 = temp;
    }

    if (son1 > son2) {
      temp = son1;
      son1 = son2;
      son2 = temp;
    }
  }
  alert("Sonlar: " + son1 + ", " + son2 + ", " + son3);
}
function if18() {
  let a = +prompt("a son kiriting:");
  let b = +prompt("b son kiriting: ");
  let c = +prompt(" c son kiriting: ");

  if (a !== b && a == c) {
    alert(
      "o'zaro teng a va c " +
        "\n a son =" +
        a +
        "\n c son  " +
        c +
        "\n qolgan son " +
        b
    );
  } else if (b == c && b !== a) {
    alert(
      "b va c sonlar teng " +
        "\n b son: " +
        b +
        "\n c son : " +
        c +
        "\n qolgan son " +
        a
    );
  } else {
    alert("a va b teng " + "\n qolgan son " + c);
  }
}

// while for do while

function for1() {
  let n = +prompt("n sonini kiriting:");
  let natija = "";
  for (var i = 1; i <= n; i++) {
    natija += i + " ";
  }

  alert(natija);
}
function while1() {
  let n = +prompt("n sonini kiriting:");
  let i = 1;
  let natija = "";

  while (i <= n) {
    natija += i + " ";
    i++;
  }

  alert(natija);
}
function whiledo1() {
  let n = +prompt("n sonini kiriting:");
  let i = 1;
  let natija = "";

  do {
    natija += i + " ";
    i++;
  } while (i <= n);

  alert(natija);
}

function for2() {
  let n = +prompt("n sonini kiriting:");
  let natija = "";
  for (let i = n; i >= 1; i--) {
    natija += i + " ";
  }
  alert(natija);
}
function while2() {
  let n = +prompt(" n  sonini kiriting:");
  let i = n;
  let natija = "";

  while (i >= 1) {
    natija += i + " ";
    i--;
  }
  alert(natija);
}
function whiledo2() {
  let n = +prompt(" n  son kiriting:");
  let i = n;
  let natija = " ";
  do {
    natija += i + " ";
    i--;
  } while (i >= 1);
  alert(natija);
}

function for3() {
  let n = +prompt("son kiriting:");
  var natija = "";

  for (let i = 2; i <= n; i += 2) {
    natija += i + " ";
  }
  alert(natija);
}
function while3() {
  let n = +prompt(" son kiriting:");
  let i = 1;
  let natija = "";

  while (i <= n) {
    if (i % 2 === 0) {
      natija += i + " ";
    }
    i++;
  }
  alert(natija);
}
function whiledo3() {
  let n = +prompt("son kiriting:");
  let i = 2;
  let natija = "";
  do {
    natija += i + " ";
    i += 2;
  } while (i <= n);
  alert(natija);
}

function for4() {
  let n = +prompt("son kiriting:");
  let natija = "";

  for (let i = 1; i <= n; i += 2) {
    natija += i + " ";
  }
  alert(natija);
}

function while4() {
  let n = +prompt("son kiriting:");
  let i = 1;
  let natija = "";
  while (i <= n) {
    natija += i + " ";
    i += 2;
  }
  alert(natija);
}
function whiledo4() {
  let n = +prompt("son kiriting:");
  let i = 1;
  let natija = "";
  do {
    natija += i + " ";
    i += 2;
  } while (i <= n);
  alert(natija);
}

function for5() {
  let n = +prompt("son kiriting:");
  let natija = "";

  for (let i = n; i >= 1; i--) {
    natija += i + " ";
  }
  alert(natija);
}
function while5() {
  let n = +prompt("son kiriting:");
  let i = n;
  let natija = "";

  while (i >= 1) {
    natija += i + " ";
    i--;
  }
  alert(natija);
}
function whiledo5() {
  let n = +prompt("son kiriting:");
  let i = n;
  let natija = "";
  do {
    natija += i + " ";
    i--;
  } while (i >= 1);
  alert(natija);
}

function for6() {
  let n = +prompt(" son kiriting:");
  let natija = 0;

  for (let i = 1; i <= n; i++) {
    natija += i;
  }
  alert("n gacha sonlar yig'indisi: " + natija);
}
function while6() {
  let n = +prompt(" son kiriting:");
  let natija = 0;
  let i = 1;

  while (i <= n) {
    natija += i;
    i++;
  }
  alert("n gacha sonlar yig'indisi: " + natija);
}
function whiledo6() {
  let n = +prompt("son kiriting:");
  let natija = 0;
  var i = 1;

  do {
    natija += i;
    i++;
  } while (i <= n);
  alert("n gacha sonlar yig'indisi: " + natija);
}
function for7() {
  let n = +prompt(" son kiriting:");
  let natija = 0;

  for (let i = 2; i <= n; i += 2) {
    natija += i;
  }
  alert("Barcha juft sonlar yig'indisi: " + natija);
}
function while7() {
  let n = +prompt(" son kiriting:");
  let natija = 0;
  let i = 2;

  while (i <= n) {
    natija += i;
    i += 2;
  }
  alert("Barcha juft sonlar yig'indisi: " + natija);
}
function whiledo7() {
  let n = +prompt("son kiriting:");
  let natija = 0;
  let i = 2;

  do {
    natija += i;
    i += 2;
  } while (i <= n);
  alert("Barcha juft sonlar yig'indisi: " + natija);
}
function for8() {
  let n = +prompt(" son kiriting:");
  let natija = 0;

  for (let i = 1; i <= n; i += 2) {
    natija += i;
  }
  alert("Barcha toq sonlar yig'indisi: " + natija);
}
function while8() {
  let n = +prompt("son kiriting:");
  let natija = 0;
  let i = 1;

  while (i <= n) {
    natija += i;
    i += 2;
  }
  alert("Barcha toq sonlar yig'indisi: " + natija);
}
function whiledo8() {
  let n = +prompt(" son kiriting:");
  let natija = 0;
  let i = 1;

  do {
    natija += i;
    i += 2;
  } while (i <= n);
  alert("Barcha toq sonlar yig'indisi: " + natija);
}

function for9() {
  let n = +prompt(" son kiriting:");
  let natija = 1;

  for (let i = 1; i <= n; i++) {
    natija *= i;
  }
  alert("Barcha sonlar ko'paytmasi: " + natija);
}
function while9() {
  let n = +prompt(" son kiriting:");
  let natija = 1;
  let i = 1;

  while (i <= n) {
    natija *= i;
    i++;
  }
  alert("Barcha sonlar ko'paytmasi: " + natija);
}
function whiledo9() {
  let n = +prompt("son kiriting:");
  let natija = 1;
  let i = 1;

  do {
    natija *= i;
    i++;
  } while (i <= n);
  alert("Barcha sonlar ko'paytmasi: " + natija);
}
function for10() {
  let n = +prompt(" son kiriting:");
  let natija = 0;

  for (let i = 1; i <= n; i++) {
    natija += i * i;
  }
  alert("Barcha natural sonlar kvadratlari yig'indisi: " + natija);
}
function while10() {
  let n = +prompt("son kiriting:");
  let natija = 0;
  let i = 1;

  while (i <= n) {
    natija += i * i;
    i++;
  }
  alert("Barcha natural sonlar kvadratlari yig'indisi: " + natija);
}
function whiledo10() {
  let n = +prompt(" son kiriting:");
  let natija = 0;
  let i = 1;

  do {
    natija += i * i;
    i++;
  } while (i <= n);
  alert("Barcha natural sonlar kvadratlari yig'indisi: " + natija);
}
