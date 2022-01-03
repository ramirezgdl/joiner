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

