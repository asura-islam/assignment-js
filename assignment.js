// making kelometer to meter
function kelometerToMeter(kelometer){
    var meter = kelometer*1000;
    return meter

}
var result=kelometerToMeter(120);
console.log(result);


// budgetCaculator will define the price of watch, mobile and laptop

function budgetCalculator(watch, mobile, laptop){
    var result = watch*3 + mobile*2 + laptop*1;
     
    return result
}
var total = budgetCalculator(50, 100, 500);

console.log(total);


// declering 30 days of hotelCost

function hotelCost(days){
    var number = 0;
    if(days <= 10){
        number = days * 100;
    }
    // else if will work when you stay more than 10 days in the hotel
     else if (days <= 20)
    {
        var firstpart = 10 * 100;
        var remaining = days - 10;
        var secondpart = remaining*80;
        number = firstpart + secondpart;
    }
    // when the time cross 20 days then the value of else will count
    else{
        var firstpart = 10 * 100;
        var secondpart = 10 * 80;
        var remaining = days - 20;
        var thirdpart = remaining * 50;
        number = firstpart + secondpart + thirdpart;
    
    }
           return number 
    
    }
    var result = hotelCost(30);
    console.log(result);


    
    
    // megaFriend identify the largest number of string value
    function megaFriends(friends){
        var max= friends[0];
        for(var i=0;i>friends.length;i++){
            var element=friends[i];
        }
        return max
        }
        var result= megaFriends(['hadiuzzaman','zobaija','nurjahan','anondi']);
        console.log(result);