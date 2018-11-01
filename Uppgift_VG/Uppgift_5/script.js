// If-Version

function randomDice(){
    let siffror = [];
    for(let i = 1; i <= 1000; i++){
        let randomer = Math.floor(Math.random() * 6) + 1;
        siffror.push(randomer);
    }
    return siffror;
}

function print(){
    let tal = randomDice()
    let nummer = [0, 0, 0, 0, 0, 0];
    for(i = 0; i <= tal.length; i++){
        if (tal[i] === 1) {
            nummer[0]++            
        }
        if (tal[i] === 2) {
            nummer[1]++            
        }
        if (tal[i] === 3) {
            nummer[2]++            
        }
        if (tal[i] === 4) {
            nummer[3]++            
        }
        if (tal[i] === 5) {
            nummer[4]++            
        }
        if (tal[i] === 6) {
            nummer[5]++            
        }
    }
    console.log("Antal 1:or: "+nummer[0]+"\nAntal 2:or: "+nummer[1]+"\nAntal 3:or: "+nummer[2]+"\nAntal 4:or: "+nummer[3]+"\nAntal 5:or: "+nummer[4]+"\nAntal 6:or: "+nummer[5]);
}
print();

// filter-version.

// function filter(){
//     let tal = randomDice();
//     var search1 = 1;
//     var dice1 = tal.filter(function(val) {
//         return val === search1;
//     }).length;
//     var search2 = 2;
//     var dice2 = tal.filter(function(val) {
//         return val === search2;
//     }).length;
//     var search3 = 3;
//     var dice3 = tal.filter(function(val) {
//         return val === search3;
//     }).length;
//     var search4 = 4;
//     var dice4 = tal.filter(function(val) {
//         return val === search4;
//     }).length;
//     var search5 = 5;
//     var dice5 = tal.filter(function(val) {
//         return val === search5;
//     }).length;
//     var search6 = 6;
//     var dice6 = tal.filter(function(val) {
//         return val === search6;
//     }).length;
//     console.log("Antal 1:or: "+dice1+"\nAntal 2:or: "+dice2+"\nAntal 3:or: "+dice3+"\nAntal 4:or: "+dice4+"\nAntal 5:or: "+dice5+"\nAntal 6:or: "+dice6);
// }
// filter();