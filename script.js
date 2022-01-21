// let layerCount = 4;
// let starCount = 500;
// let maxTime = 31;
//
// let universe = document.getElementById('universe');
//
// let width = universe.style.width;
// let height = universe.style.height;
//
// for (let i = 0; i < starCount; i++){
//     let ypos = Math.round(Math.random() * height);
//     let star = document.createElement('div');
//     let speed = 1000 * (Math.random() * maxTime * height);
//     // star.setAttribute('class', 'star' + (3 - Math.floor((speed / 1000 ) / 8)));
//     star.setAttribute('class', 'star');
//     star.style.backgroundColor = 'white';
//     universe.appendChild(star);
//     star.animate([
//         {transform: 'translate3d(' + width + 'px, ' + ypos + 'px, 0)'},
//         {transform: 'translate3d(-' + Math.random() * 256 + 'px, ' + ypos + 'px, 0)'}
//     ],
//         {delay: Math.random() * -speed, duration: speed, iterations: 1000})
// }

let starCount = 500;
let maxTime = 31;
let universe = document.getElementById('universe');
let w = window;
let d = document;
let e = d.documentElement;
let g = d.getElementsByTagName('#universe')[0];
let width = 600;
let height = 600;
for (let i = 0; i < starCount; ++i) {
    let ypos = Math.round(Math.random() * height);
    let star = document.createElement('div');
    let speed = 1000 * (Math.random() * maxTime + 1);
    star.setAttribute('class', 'star'); // + (3 - Math.floor((speed / 1000) / 8)));
    star.style.backgroundColor = 'white';//rgb(' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ')';
    universe.appendChild(star);
    star.animate([{transform: 'translate3d(' + width + 'px, ' + ypos + 'px, 0)'},
            {transform: 'translate3d(-' + Math.random() * 256 + 'px, ' + ypos + 'px, 0)'}],
        {delay: Math.random() * -speed, duration: speed, iterations: 1000});
}
