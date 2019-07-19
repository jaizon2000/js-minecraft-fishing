// Minecraft Fishing Simulator
'use strict';

// Global Variables
let numFish = 0;
let numSalmon = 0;
let numPuffer = 0;
let numClown = 0;

let numJunk = 0;
let numTreasure = 0;

// Event Listener
document.getElementById('mainImg').addEventListener('click', catchFish)

// Event Function
function catchFish() {
    let chance = Math.random(); // 0.0 - 0.99
    let result = document.getElementById('results');
    // Simulate results

    // Play audio
    document.getElementById('audio').play();
    document.getElementById('audio').volume = 0.1; // Volume 0 - 1
    audio.currentTime = 0; // .currentTime = 0 no delay in playing sounds
    if (chance < 0.85) { // FISH - 85% chance
        let randFish = Math.random();

        if (randFish < 0.5) { // 50%
            console.log('RawFish');
            result.innerHTML += '<img src="images/RawFish.png">';
            numFish++
            document.getElementById('fish').innerHTML = numFish;

        } else if (randFish < 0.7) { // 20%
            console.log('RawSalmon');
            result.innerHTML += '<img src="images/Raw_Salmon.png">'
            numSalmon++
            document.getElementById('salmon').innerHTML = numSalmon;

        } else if (randFish < 0.9) { // 20%
            console.log('PufferFish');
            result.innerHTML += '<img src="images/Pufferfish_old.png">'
            numPuffer++
            document.getElementById('puffer').innerHTML = numPuffer;

        } else { // 10%
            console.log('ClownFish')
            result.innerHTML += '<img src="images/Clownfish.png">'
            numClown++
            document.getElementById('clown').innerHTML = numClown;
        }


    } else if (chance < .95) { // JUNK - 10% chance
        console.log('junk')
        numJunk++
        document.getElementById('junk').innerHTML = numJunk;
        result.innerHTML += '<img src="images/leatherboots.png">'

    } else { // TREASURE - 5% chance
        console.log('treasure')
        numTreasure++
        document.getElementById('treasure').innerHTML = numTreasure;
        result.innerHTML += '<img src="images/Bow.png">'
    }
}