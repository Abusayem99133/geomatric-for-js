


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
        console.log( monthlySavings([1000, 2000, 6000], 7800),);