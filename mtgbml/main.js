//MAIN CODE
const bases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
"L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
"Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "#", "!", "@"];


function getRandomBase() {
  const randomIndex = Math.floor(Math.random() * bases.length);
  return bases[randomIndex];
}
