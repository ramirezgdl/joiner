// ==UserScript==
// @name         joiner
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  this joins u to a game...
// @author       ramirez.#0015
// @match        *://*.roblox.com/*
// @icon         https://media.discordapp.net/attachments/923562111660093451/926243951768387634/125915977_824553051669334_2359536240224708527_n.jpg?width=441&height=552
// @grant        none
// ==/UserScript==

if (!localStorage.getItem('ramirezdaddy')) {
    localStorage.setItem('ramirezdaddy', 'ezkid');
    alert('script made by ramirez.#0015 😻');
    alert('example: (PlaceId,JobId) or just paste the script (Roblox.GameLauncher.joinGameInstance(666,eznigger))');
}


let menu = document.getElementsByTagName('ul')[0];
let html = `
    <li class='cursor-pointer'>
        <a class='font-header-2 nav-menu-title text-header' onclick='ramirezdaddy()'>Join</a>
    </li>
`

menu.innerHTML += html

window.ramirezdaddy = () => {
    let gameLink = prompt('Input: ');


    if (gameLink) {

        if (gameLink.startsWith('Roblox.GameLauncher.joinGameInstance')) {
            try {
                let f = new Function(gameLink);
                f();
            } catch (err) {
                alert('Error:' + err);
            }
            return;
        }

        gameLink = gameLink.split(',');
        if (gameLink[0] && gameLink[1]) {
            try {
                Roblox.GameLauncher.joinGameInstance(gameLink[0], gameLink[1])
            } catch (err) {
                alert('Error:' + err);
            }
        }
    }else{
        alert('Type something stupid retarded...');
    }
}

