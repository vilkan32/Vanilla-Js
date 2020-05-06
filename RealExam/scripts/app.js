function spaceshipCrafting() {

    let titaniumCoreFound = Number(document.getElementById('titaniumCoreFound').value);

    let aluminiumCoreFound = Number(document.getElementById('aluminiumCoreFound').value);

    let magnesiumCoreFound = Number(document.getElementById('magnesiumCoreFound').value);

    let carbonCoreFound = Number(document.getElementById('carbonCoreFound').value);

    let lossesPercent = Number(document.getElementById('lossesPercent').value) / 4;

    titaniumCoreFound -= titaniumCoreFound * (lossesPercent / 100);
    aluminiumCoreFound -= aluminiumCoreFound * (lossesPercent / 100);
    magnesiumCoreFound -= magnesiumCoreFound * (lossesPercent / 100);
    carbonCoreFound -= carbonCoreFound * (lossesPercent / 100);

    titaniumCoreFound = Math.round(titaniumCoreFound);
    aluminiumCoreFound = Math.round(aluminiumCoreFound);
    magnesiumCoreFound = Math.round(magnesiumCoreFound);
    carbonCoreFound = Math.round(carbonCoreFound);

    let titaniumBars = Math.round(titaniumCoreFound / 25);
    let aluminiumBars = Math.round(aluminiumCoreFound / 50);
    let magnesiumBars = Math.round(magnesiumCoreFound / 75);
    let carbonBars = Math.round(carbonCoreFound / 100);

    let ships = {};

    while(true){
        console.log(titaniumBars);
        console.log(aluminiumBars);
        console.log(magnesiumBars);
        console.log(carbonBars);
        console.log('split');
        let shouldExit = true;
        if(titaniumBars >= 7 && aluminiumBars >= 9 && magnesiumBars >= 7 && carbonBars >= 7){

            if(!ships['THE-UNDEFINED-SHIP']){
                ships['THE-UNDEFINED-SHIP'] = 1;
            }else{
                ships['THE-UNDEFINED-SHIP'] += 1;
            }
            titaniumBars-=7;
            aluminiumBars-=9;
            magnesiumBars-=7;
            carbonBars-=7;
            shouldExit = false;

        }
        if(titaniumBars >= 5 && aluminiumBars >= 7 && magnesiumBars >= 7 && carbonBars >= 5){
            if(!ships['NULL-MASTER']){
                ships['NULL-MASTER'] = 1;
            }else{
                ships['NULL-MASTER'] += 1;
            }
            titaniumBars-=5;
            aluminiumBars-=7;
            magnesiumBars-=7;
            carbonBars-=5;
            shouldExit = false;

        }
        if(titaniumBars >= 3 && aluminiumBars >= 5 && magnesiumBars >= 5 && carbonBars >= 2){
            if(!ships['JSON-CREW']){
                ships['JSON-CREW'] = 1;
            }else{
                ships['JSON-CREW'] += 1;
            }
            titaniumBars-=3;
            aluminiumBars-=5;
            magnesiumBars-=5;
            carbonBars-=2;
            shouldExit = false;

        }
        if(titaniumBars >= 2 && aluminiumBars >= 2 && magnesiumBars >= 3 && carbonBars >= 1){

            // False-Fleet
            if(!ships['FALSE-FLEET']){
                ships['FALSE-FLEET'] = 1;
            }else{
                ships['FALSE-FLEET'] += 1;
            }
            titaniumBars-=2;
            aluminiumBars-=2;
            magnesiumBars-=3;
            carbonBars-=1;
            shouldExit = false;

        }


        if(shouldExit){
            break;
        }
    }

    let availableBars = document.getElementById('availableBars').children[1];

    availableBars.textContent = `${titaniumBars} titanium bars, ${aluminiumBars} aluminum bars, ${magnesiumBars} magnesium bars, ${carbonBars} carbon bars`;

    let builtShips = document.getElementById('builtSpaceships').children[1];
    Object.keys(ships).forEach(k => {


        builtShips.textContent += `, ${ships[k]} ${k}`;


    });


    builtShips.textContent = builtShips.textContent.substring(2);

}

