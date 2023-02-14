const initialMemoryUsage = process.memoryUsage(); // TODO 1
const yourName = process.argv[2]; // TODO 2
const environment = process.env; // TODO 3
 
for (let i = 0; i <= 10000; i++) {
  // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage(); // TODO 4

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment.NODE_ENV}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage.heapUsed} naik ke ${currentMemoryUsage.heapUsed}`);