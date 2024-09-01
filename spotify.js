console.log('Lets Start');

async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/Spotify/Songs/")
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("songs")[1])
        }

    }
    /// SHOW ALL SONGS IN PLAYLIST

    let songUl = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    songUl.innerHTML = songUl.innerHTML = ""
    for (const song of songs) {
        songUl.innerHTML = songUl.innerHTML + `<li><img width="34" src="img/music.svg" alt=""></img>
            <div class="info">
                <div> ${song}</div>
                <div>Prince</div>
            </div>
            
            <div class="playnow">
                <div>Play Now</div>
                </div>
                <img class="invert" src="img/play.svg" alt="">


        </li>`;

    }
    ///ATTACH AN EVENT LISTNER TO EACH SONGS
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        console.log(e)
    })



    return songs

}
getSongs()



