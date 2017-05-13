const KET_QUA = 30;

//DEM SO LAN MUA
let dem = 0;
let kq = -1;

while(kq != KET_QUA) {
    kq = getRandomIntInclusive(0, 99);
    dem++;
    console.log('LAN THU ' + dem + ': ' + kq);
}

console.log(dem);

//IN SO LAN MUA
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}