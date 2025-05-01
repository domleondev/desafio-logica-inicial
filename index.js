let teamHero = [
    ["Luffy", 1000],
    ["Edward", 2000],
    ["Tanjiro", 4000],
    ["Naruto", 7000],
    ["Satoru", 8000],
    ["Jin-woo", 9000],
    ["Goku", 10000],
    ["Yamcha", 11000]
  ];
  
  let level = [];
  
  let power = teamHero[7][1]; 
  // Índices:
// 0 -> Luffy
// 1 -> Edward
// 2 -> Tanjiro
// 3 -> Naruto
// 4 -> Satoru
// 5 -> Jin-woo
// 6 -> Goku     
// 7 -> Yamcha
  
  if (power <= 1000) {
    level.push("Ferro");
  } else if (power >= 1001 && power <= 2000) {
    level.push("Bronze");
  } else if (power >= 2001 && power <= 5000) {
    level.push("Prata");
  } else if (power >= 5001 && power <= 7000) {
    level.push("Ouro");
  } else if (power >= 7001 && power <= 8000) {
    level.push("Platina");
  } else if (power >= 8001 && power <= 9000) {
    level.push("Ascendente");
  } else if (power >= 9001 && power <= 10000) {
    level.push("Imortal");
  } else if (power >= 10001) {
    level.push("Ilimitado");
  }
  
  console.log("O Herói " + teamHero[7][0] + " está no nível " + level[0]);
  