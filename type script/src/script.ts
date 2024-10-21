//3-vazifa
enum color{
    red,
    green,
    blue,
    yellow,
    purple
};
function getColor(col:number):void {
    console.log(color[col]);
}
getColor(0);
//4-vazifa
let massive: number[] = [1, 2, 3, 4, 5];

function allNum(nums: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]; 
    }
    return sum; 
}
console.log(allNum(massive));
//5-vazifa
const calculateAverage = (...numbers: number[]): number => {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    return total / numbers.length;
  };
  
  console.log(calculateAverage(10, 20, 30, 40)); 
  