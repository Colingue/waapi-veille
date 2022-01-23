const starCount = 500;

const maxTime = 31;

const width = 600;

const height = 600;

const universe = document.getElementById('universe');

for (let i = 0; i < starCount; ++i) {

    let ypos = Math.round(Math.random() * height);

    let star = document.createElement('div');

    let speed = 1000 * (Math.random() * maxTime + 1);

    star.setAttribute('class', 'star');

    universe.appendChild(star);

    star.animate([{transform: 'translate3d(' + width + 'px, ' + ypos + 'px, 0)'},

            {transform: 'translate3d(-' + 0 + 'px, ' + ypos + 'px, 0)'}],

        {

            delay: Math.random() * -speed,

            duration: speed,

            iterations: 1000}

    );

}