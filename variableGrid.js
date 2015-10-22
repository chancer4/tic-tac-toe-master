var gridSize = 5;
var winnerHorizTemp = [];
var winnerVertTemp = [];
var winnerDiagTemp = [];
var winner = [];
var x= 0;

for( i = 1; i<= gridSize*gridSize; i++){
    winnerHorizTemp.push(i)
    if( i % gridSize == 0 ){
        winner.push(winnerHorizTemp);
        winnerHorizTemp = [];
    }

}

for ( i = 1; i <= gridSize; i++){
    for(x = 0; x < gridSize; x++){
        winnerVertTemp.push(x * gridSize + i);
    }
    winner.push(winnerVertTemp);
    winnerVertTemp = [];
}

for(i = 1; i <= gridSize; i++){
    winnerDiagTemp.push(i + (i-1) * (gridSize));
}

winner.push(winnerDiagTemp)

winnerDiagTemp= [];

for(i=1; i<= gridSize; i++){
    winnerDiagTemp.push( (i * gridSize) - (i-1) );
}

winner.push(winnerDiagTemp);

console.log(winner)