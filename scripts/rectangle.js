function calculateRectangleArea(){
const inputWidth = document.getElementById('width-input');
const widthText = inputWidth.value;
const width = parseFloat(widthText);
console.log(width);


//     console.log(inputSet)
    const inputLength = document.getElementById('length-input');
   const inputSet = inputLength.value;
   const length = parseFloat(inputSet);
   console.log(length);

   const  fullLength = width + length;
   console.log(fullLength);

   const multi = document.getElementById('lengthw-text');
     multi.innerText = fullLength;
   console.log(multi);
}