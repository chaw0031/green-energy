 // resources
    let resources = {
    p1: {
        title: 'Solar Home Systems (SHS)',
        bodyText: 'Solar home systems are revolutionizing access to clean electricity by providing affordable,renewable energy to millions of households. These systems utilize solar power to generate electricity which helps in reducing dependency on fossil fuels and cutting greenhouse gas emissions. They offer a clean energy source, particularly in remote locations or off-grid areas where traditional infrastructure is lacking.',
        url: 'img/01.webp'
    },
    p2: {
        title: 'Mini-Grids for Rural Electrification',
        bodyText: 'Mini-grids are an emerging transformative solution for electrifying rural areas in South Africa, where traditional grid infrastructure is often inadequate.These systems work in a distributed manner, typically exploiting renewable energy sources such as solar or wind, in order to provide a sustainable electricity supply to small communities.',
        url: 'img/02.webp'
    },
    p3: {
        title: 'Biogas Systems for Rural Households and Small Farms',
        bodyText: 'Biogas, produced from the anaerobic digestion of organic waste, is a significant source of clean renewable electricity. By converting agricultural residues, food waste, and animal manure into methane-rich biogas, it provides a clean and sustainable energy source. This biogas can be used to generate electricity through combustion, reducing reliance on fossil fuels and lowering emissions from greenhouse gas.',
        url: 'img/03.webp'
    }
};

// get the references to the active parts of html
    let dc = document.getElementById('dynamic-content');
    let controls = document.getElementById('controls');
    let btns = controls.children;

// event handler
    function selectPage(ev) {
    let currentButton = ev.currentTarget;
    // console.log(currentButton);
    // styling the active button here: 

    for (let btn of btns) {
        // if id-attribute exists in the currently accessed button
        if (btn.hasAttribute('class')) {
            // remove it!
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
            btn.removeAttribute('class');
        }
    }

// add the attribute id="active" to the currently clicked element
// https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
    currentButton.setAttribute('class', 'active');
    /*
    currentButton.style.borderWidth = '5px';
    currentButton.style.borderColor = '#000';
    */

// pushing the corresponding data inside the div#dynamic-content: 

    dc.innerHTML = `
    <h2>${resources[currentButton.id].title}</h2> 
    <img src="${resources[currentButton.id].url}">
    <p>${resources[currentButton.id].bodyText}</p>
        `;
    }
    document.addEventListener('DOMContentLoaded', (event) => {
    dc.innerHTML = `
    <h2>${resources.p1.title}</h2> 
    <img src="${resources.p1.url}">
    <p>${resources.p1.bodyText}</p>
        `;
    });
// registering buttons for click event
    btns[0].addEventListener('click', selectPage);
    btns[1].addEventListener('click', selectPage);
    btns[2].addEventListener('click', selectPage);