function password(object) {
    if (!object || typeof object !== 'object' || Array.isArray(object) || Object.keys(object).length !== 3) {
    return "invalid";
    }
    const { name, birthYear, siteName } = object;
    const letterFast = siteName[0].toUpperCase() + siteName.slice(1, siteName.length);
    if (isNaN(birthYear) || birthYear.toString().length !== 4) {
    return "invalid";
    }
    return `${letterFast}#${name}@${birthYear}`;
    }
    function monthlySavings(arr , livingCost) {
    if(typeof livingCost !== 'number') {
    return 'invalid input';
    }
    let totalEarn = 0;
    for (let i = 0; i < arr.length; i++){
    if ( typeof arr[i] !== 'number'){
    return 'invalid input';
    } else {
    if (arr[i] >= 3000){
    totalEarn = totalEarn + (arr[i] - (arr[i] * 0.2));
    } else{
    totalEarn = totalEarn + arr[i];
    }
    }
    }
    if ( totalEarn > livingCost){
    return totalEarn - livingCost;
    }else{
    return "earn more"
    }
    }
    console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000));