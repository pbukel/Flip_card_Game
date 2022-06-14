"use strict";
const placeholder = document.querySelector(".placeholder");
const data = [
    {
        class: "mushroom",
        image: "https://thumbs.dreamstime.com/b/isolated-pixelated-mushroom-icon-isolated-pixelated-mushroom-icon-vector-illustration-design-122327840.jpg",
    },
    {
        class: "mushroom",
        image: "https://thumbs.dreamstime.com/b/isolated-pixelated-mushroom-icon-isolated-pixelated-mushroom-icon-vector-illustration-design-122327840.jpg",
    },
    {
        class: "flower",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGc7soikV4yU4_Pb_s3mkkqPrmpHbqf51q2KWAf_9wp1J9pzEKMjaeYsuSTX2juP4kW6E&usqp=CAU",
    },
    {
        class: "flower",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGc7soikV4yU4_Pb_s3mkkqPrmpHbqf51q2KWAf_9wp1J9pzEKMjaeYsuSTX2juP4kW6E&usqp=CAU",
    },
    {
        class: "coin",
        image: "https://www.pngitem.com/pimgs/m/135-1352730_download-pixel-coin-png-png-images-8-bit.png",
    },
    {
        class: "coin",
        image: "https://www.pngitem.com/pimgs/m/135-1352730_download-pixel-coin-png-png-images-8-bit.png",
    },
    {
        class: "star",
        image: "https://image.shutterstock.com/image-vector/bright-yellow-star-pixel-card-260nw-1055624126.jpg",
    },
    {
        class: "star",
        image: "https://image.shutterstock.com/image-vector/bright-yellow-star-pixel-card-260nw-1055624126.jpg",
    },
    {
        class: "cheest",
        image: "https://img.freepik.com/free-vector/treasure-chest-pixel-art-style_505135-49.jpg?w=2000",
    },
    {
        class: "cheest",
        image: "https://img.freepik.com/free-vector/treasure-chest-pixel-art-style_505135-49.jpg?w=2000",
    },
    {
        class: "spade",
        image: "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/efddc8e73f64aac.png",
    },
    {
        class: "spade",
        image: "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/efddc8e73f64aac.png",
    },
    {
        class: "heart",
        image: "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/fc7fcc0d81117ec.png",
    },
    {
        class: "heart",
        image: "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/fc7fcc0d81117ec.png",
    },
    {
        class: "mario",
        image: "https://i.pinimg.com/originals/cb/05/15/cb0515b14ba9490e96a681156166aca4.png",
    },
    {
        class: "mario",
        image: "https://i.pinimg.com/originals/cb/05/15/cb0515b14ba9490e96a681156166aca4.png",
    },
    {
        class: "club",
        image: "https://thumbs.dreamstime.com/b/clubs-playing-pixel-cards-poker-gambling-cartoon-retro-game-style-set-101579639.jpg",
    },
    {
        class: "club",
        image: "https://thumbs.dreamstime.com/b/clubs-playing-pixel-cards-poker-gambling-cartoon-retro-game-style-set-101579639.jpg",
    },
];
//Ismaisome koreteles
const shuffled = data.sort(() => 0.5 - Math.random());
//uzkrauname imsaisyta array
shuffled.map((x, i) => {
    let divas = document.createElement("div");
    divas.classList.add("flip-card");
    divas.classList.add(x.class);
    divas.innerHTML = `
    <div id=${i} class="flip-card-inner">
        <div  class="flip-card-front">?</div>
        <div class="flip-card-back ">
            <img class="star" src="${x.image}" alt="">
        </div>
    </div>

    `;
    placeholder.append(divas);
});
//surnadame korteles
const card = document.querySelectorAll(".flip-card");
let counter = 0;
let values = [];
let ids = [];
//pasiklausimas kortelems
for (let x of card) {
    x.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.offsetParent.classList.add("turn");
        counter++;
        let value = e.target.offsetParent.offsetParent.className;
        let id = e.target.offsetParent.id;
        ids.push(id);
        values.push(value);
        if (counter == 2) {
            if (values[0] == values[1]) {
                let firstgood = document.getElementById(`${ids[0]}`);
                firstgood.classList.add("turn_forewer");
                let secondgood = document.getElementById(`${ids[1]}`);
                secondgood.classList.add("turn_forewer");
                counter = 0;
                values = [];
                ids = [];
            }
            else {
                setTimeout(() => {
                    let turned_bad = document.querySelectorAll(".flip-card-inner");
                    for (let x of turned_bad) {
                        x.classList.remove("turn");
                    }
                }, 800);
                counter = 0;
                values = [];
                ids = [];
            }
        }
    });
}
