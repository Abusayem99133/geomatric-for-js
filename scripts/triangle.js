function calculateTriangleArea(){
    const triangleBaseArea = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseArea.value;
    const base = parseFloat(triangleBaseText)
    console.log(base)



    const triangleHeightInput = document.getElementById('triangle-height').value;
    // const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightInput);
    console.log(height);
    const  area = 0.5 * base * height;
    console.log(area);

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;

}