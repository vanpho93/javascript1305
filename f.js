const KET_QUA = 30;

//DEM SO LAN MUA
let dem = 1;

while(getRandomIntInclusive(0, 99) != 30) {
    //MUA TIEP
    dem++;
}

console.log(dem);

//IN SO LAN MUA
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}