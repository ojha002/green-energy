// Load your images on page-load
function preloader() {
    const imagesPaths = [
       "./img/photovoltaic-array.jpg",
       "./img/energy.jpg",
       "./img/compact-flourescent-bulb.jpg"
    ];

    const images = [];
    for (let i = 0; i < imagesPaths.length; i++) {
        images[i] = new Image();
        images[i].src = imagesPaths[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};    

window.addEventListener("load", preloader);


// getting references

let $dc = document.getElementById('dynamic-content');


// resource

const data = {
    partial1: {
        imageURL: 'img/photovoltaic-array.jpg',
        imageAlt: '...',
        heading: 'Solar Energy',
        bodyText: 'It is important that government invests in the mass project on establishing the solar energy, so that the governemnt is able to distribute the energy to regular people. And also work with CMHC to work on gaving renuable/solar pannel in the roof of the new build houses. Should even go with providing this for the low income housing as the cost of electricityy, heating is going to more, but if they are switiched with soloar eneargy source then there is high change of improving the environment with the living standard of the normal citizens.'
    },
    partial2: {
        imageURL: 'img/energy.jpg',
        imageAlt: '...',
        heading: 'Wind Mill',
        bodyText: 'It is important that government invests in the mass project on establishing the wind mill in deiiferent part of Canada, so that the governemnt is able to distribute the energy to regular people. And also work with CMHC to work on changing the source of energy from miniral to solar. Should even go with providing this for the low income housing as the cost of electricityy, heating is going to more, but if they are switiched with green energy source then there is high change of improving the environment with the living standard of the normal citizens.'
    },
    partial3: {
        imageURL: 'img/compact-flourescent-bulb.jpg',
        imageAlt: '...',
        heading: 'Low emmersing Light source',
        bodyText: 'This goes hand in hand with the previous 2 points in regards to the energy source, that is sustainanbel, affordable and workable. Canada should put more effort in pormotting the Low emmersing Light source.'
    }
};

// create the initial page markup:
let markup = {partial1:`<img src="${data.partial1.imageURL}" alt="" />
                <h2>${data.partial1.heading}</h2>
                <p>${data.partial1.bodyText}</p>`,

            partial2:`<img src="${data.partial2.imageURL}" alt="" />
                <h2>${data.partial2.heading}</h2>
                <p>${data.partial2.bodyText}</p>`,

            partial3:`<img src="${data.partial3.imageURL}" alt="" />
                <h2>${data.partial3.heading}</h2>
                <p>${data.partial3.bodyText}</p>`,
            };

$dc.innerHTML = markup.partial1;



// creatig active-button. 
let bn = document.querySelector('controls');
let listItems = bn.children;
// console.log(listItems);

function handleClick(ev) {
    // move the id-attribute to the currently clicked button
    let currentItem = ev.target;
    // console.log(currentItem);

    // loop through the list of all button
    for (let i = 0; i < listItems.length; i++) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/hasAttribute
        // if button contains attribute type of id
        if (listItems[i].hasAttribute('id')) {
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
            // remove the attribute type of 'id'
            listItems[i].removeAttribute('id');
        }
    }

    currentItem.setAttribute('id', 'active');
    
    // check if clicked, assign data 


    if (ev.target == listItems[0] ) {
        $dc.innerHTML = markup.partial1;
    } 

    if (ev.target == listItems[1] ) {
        $dc.innerHTML = markup.partial2;
    } 

    if (ev.target == listItems[2] ) {
        $dc.innerHTML = markup.partial3;
    } 
}




// registering list items for click event:

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', handleClick)};

