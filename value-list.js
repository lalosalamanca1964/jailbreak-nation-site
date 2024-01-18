"use strict";

const urlParams = new URLSearchParams(window.location.search);
  
let burgerBtn = document.getElementById('burger');

const dropdownContent = document.querySelector("#burger-container");

document.addEventListener("click", function (event) {
    if (!burgerBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.style.display = "none";
    }
});

burgerBtn.addEventListener("click", function () {
    dropdownContent.style.display = (dropdownContent.style.display === "flex") ? "none" : "flex";
});

let itemsOrdArr;

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loaded");
});

const itemGroups =  {
items: {
    agent: {
        value: 2500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    airtail: {
        value: 1500000,
        dupedValue: 'N/A',
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    aperture: {
        value: 2500000,
        dupedValue: 'N/A',
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    arach: {
        value: 25000000,
        dupedValue: 17500000,
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Extremely rare'
    },
    banana: {
        value: 22500000,
        dupedValue: 'N/A',
        demand: 'Very High',
        status: 'Stable',
        monthlyUnique: 'Extremely rare'
    },
    bandit: {
        value: 2500000,
        dupedValue: 'N/A',
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    beam: {
        value: 35000000,
        dupedValue: 25000000,
        demand: 'Low',
        status: 'Dropping',
        monthlyUnique: 'Extremely rare'
    },
    beig: {
        value: 20000000,
        dupedValue: 20000000,
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    hawk: {
        value: 850000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    bloxy: {
        value: 1250000,
        dupedValue: 'N/A',
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    brulee: {
        value: 8000000,
        dupedValue: 6500000,
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    cel: {
        value: 22500000,
        dupedValue: 20000000,
        demand: 'Very High',
        status: 'Stable',
        monthlyUnique: 'Very rare'
    },
    classic: {
        value: 200000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    concept: {
        value: 2500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    crew: {
        value: 12500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Extremely rare'
    },
    drone: {
        value: 850000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    escape: {
        value: 200000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    fiasco: {
        value: 100000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    goliath: {
        value: 2500000,
        dupedValue: 'N/A',
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    ice: {
        value: 30000000,
        dupedValue: 25000000,
        demand: 'Low',
        status: 'Dropping',
        monthlyUnique: 'Extremely rare'
    },
    jack: {
        value: 850000,
        dupedValue: 'N/A',
        demand: 'Lower',
        status: 'Stable',
        monthlyUnique: 'rare'
    },
    jav: {
        value: 12500000,
        dupedValue: 10000000,
        demand: 'High',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    jb8: {
        value: 7500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    laviolette: {
        value: 250000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'rare'
    },
    mac: {
        value: 4000000,
        dupedValue: 'N/A',
        demand: 'High',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    megalodon: {
        value: 850000,
        dupedValue: 'N/A',
        demand: 'Lower',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    mighty: {
        value: 150000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    m12: {
        value: 5500000,
        dupedValue: 'N/A',
        demand: 'High',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    nascar: {
        value: 100000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    parisian: {
        value: 3250000,
        dupedValue: 'N/A',
        demand: 'High',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    poseidon: {
        value: 2500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    posh: {
        value: 400000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    power1: {
        value: 5500000,
        dupedValue: 'N/A',
        demand: 'Very High',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    proto: {
        value: 12500000,
        dupedValue: 10000000,
        demand: 'High',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    raptor: {
        value: 15000000,
        dupedValue: 'N/A',
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Extremely rare'
    },
    rattler: {
        value: 2500000,
        dupedValue: 'N/A',
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Very rare'
    },
    shell: {
        value: 850000,
        dupedValue: 'N/A',
        demand: 'Lower',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    shogun: {
        value: 3000000,
        dupedValue: 'N/A',
        demand: 'High',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    snake: {
        value: 1500000,
        dupedValue: 'N/A',
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    steed: {
        value: 250000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    suv: {
        value: 350000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    tiny: {
        value: 1250000,
        dupedValue: 'N/A',
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    torero: {
        value: 2500000,
        dupedValue: 'N/A',
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    torpedo: {
        value: 35000000,
        dupedValue: 30000000,
        demand: 'Decent',
        status: 'Rising',
        monthlyUnique: 'Very rare'
    },
    volt4x4: {
        value: 4000000,
        dupedValue: 'N/A',
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Very rare'
    },
    volt: {
        value: 850000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
},
textures: {
    armor: {
        value: 2500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    bacon: {
        value: 500000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'black ice': {
        value: 2000000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'blue pixel': {
        value: 2000000,
        dupedValue: 'N/A',
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    checkers: {
        value: 35000000,
        dupedValue: 32500000,
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Very Rare'
    },
    circuits: {
        value: 800000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'crimson racer': {
        value: 1250000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'digital confetti': {
        value: 400000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    drip: {
        value: 5500000,
        dupedValue: 'N/A',
        demand: 'High',
        status: 'Stable',
        monthlyUnique: 'Very Rare'
    },
    earth: {
        value: 1250000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    earthquake: {
        value: 1250000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    field: {
        value: 1250000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    fire: {
        value: 5500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Very Rare'
    },
    flaming: {
        value: 600000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    'galactic carbon': {
        value: 4500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Very Rare'
    },
    'glowing yellow': {
        value: 1250000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    gulf: {
        value: 500000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'hot dog': {
        value: 1250000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    lightning: {
        value: 1250000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'liquid lava': {
        value: 200000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    money: {
        value: 800000,
        dupedValue: 'N/A',
        demand: 'Very low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'orange pixel': {
        value: 2000000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    pixel: {
        value: 1250000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'radar camo': {
        value: 200000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    snowstorm: {
        value: 8000000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Very Rare'
    },
    'super star': {
        value: 100000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    tiger: {
        value: 1250000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'winter camo': {
        value: 2500000,
        dupedValue: 'N/A',
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'wooden toy': {
        value: 400000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
},
rims: {
        '4 billion': {
            value: 150000,
            dupedValue: 'N/A',
            demand: 'Extremely Low',
            status: 'Stable',
            monthlyUnique: 'Common'
        },
        brickset: {
            value: 5500000,
            dupedValue: 'N/A',
            demand: 'Low',
            status: 'Stable',
            monthlyUnique: 'Very Rare'
        },
        compass: {
            value: 500000,
            dupedValue: 'N/A',
            demand: 'Very Low',
            status: 'Stable',
            monthlyUnique: 'Common'
        },
        hypno: {
            value: 5500000,
            dupedValue: 'N/A',
            demand: 'Low',
            status: 'Stable',
            monthlyUnique: 'Very Rare'
        },
        icicle: {
            value: 5000000,
            dupedValue: 'N/A',
            demand: 'Medium',
            status: 'Stable',
            monthlyUnique: 'Very Rare'
        },
        ionize: {
            value: 2500000,
            dupedValue: 'N/A',
            demand: 'Low',
            status: 'Stable',
            monthlyUnique: 'Very Rare'
        },
        piggy: {
            value: 300000,
            dupedValue: 'N/A',
            demand: 'Very Low',
            status: 'Stable',
            monthlyUnique: 'Common'
        },
        'retro racer': {
            value: 250000,
            dupedValue: 'N/A',
            demand: 'Extremely Low',
            status: 'Stable',
            monthlyUnique: 'Common'
        },
        'roll-x': {
            value: 300000,
            dupedValue: 'N/A',
            demand: 'Very Low',
            status: 'Stable',
            monthlyUnique: 'Common'
        },
        rtx: {
            value: 15000000,
            dupedValue: 12500000,
            demand: 'Low',
            status: 'Stable',
            monthlyUnique: 'Very Rare'
        },
        sawblade: {
            value: 150000,
            dupedValue: 'N/A',
            demand: 'Extremely Low',
            status: 'Stable',
            monthlyUnique: 'Common'
        },
        scope: {
            value: 250000,
            dupedValue: 'N/A',
            demand: 'Extremely Low',
            status: 'Stable',
            monthlyUnique: 'Common'
        },
        'ship wheel': {
            value: 250000,
            dupedValue: 'N/A',
            demand: 'Extremely Low',
            status: 'Stable',
            monthlyUnique: 'Common'
        },
        snowface: {
            value: 5000000,
            dupedValue: 'N/A',
            demand: 'Low',
            status: 'Stable',
            monthlyUnique: 'Very Rare'
        },
        snowflake: {
            value: 5500000,
            dupedValue: 'N/A',
            demand: 'Low',
            status: 'Stable',
            monthlyUnique: 'Very Rare'
        },
        spinner: {
            value: 40000000,
            dupedValue: 30000000,
            demand: 'Very Low',
            status: 'Dropping',
            monthlyUnique: 'Extremely Rare'
        },
        teddybear: {
            value: 100000,
            dupedValue: 'N/A',
            demand: 'Extremely Low',
            status: 'Stable',
            monthlyUnique: 'Common'
        },
        trion: {
            value: 300000,
            dupedValue: 'N/A',
            demand: 'Very Low',
            status: 'Stable',
            monthlyUnique: 'Common'
        },
        void: {
            value: 42500000,
            dupedValue: 37500000,
            demand: 'Below Average',
            status: 'Dropping',
            monthlyUnique: 'Extremely Rare'
        },
    },
colors: {
    'fall chrome': {
        value: 200000,
        dupedValue: 'N/A',
        demand: 'Very Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    gold: {
        value: 2500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'rad green': {
        value: 200000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'rad ice': {
        value: 800000,
        dupedValue: 'N/A',
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'rad orange': {
        value: 500000,
        dupedValue: 'N/A',
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'rad purple': {
        value: 350000,
        dupedValue: 'N/A',
        demand: 'Very low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    'rad red': {
        value: 200000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'rad yellow': {
        value: 400000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'vanta black': {
        value: 15000000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    }
},
hypers: {
    'diamond lvl 1': {
        value: 350000,
        dupedValue: 'N/A',
        demand: 'Extremely Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    'diamond lvl 2': {
        value: 2000000,
        dupedValue: 'N/A',
        demand: 'Mid',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'diamond lvl 3': {
        value: 15000000,
        dupedValue: 'N/A',
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Very Rare'
    },
    'diamond lvl 4': {
        value: 62500000,
        dupedValue: 57500000,
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Extremely Rare'
    },
    'diamond lvl 5': {
        value: 120000000,
        dupedValue: 55000000,
        demand: 'Medium',
        status: 'Unstable',
        monthlyUnique: 'Rare-ish'
    },
    'green lvl 1': {
        value: 450000,
        dupedValue: 'N/A',
        demand: 'Extremely Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    'green lvl 2': {
        value: 3000000,
        dupedValue: 'N/A',
        demand: 'Mid',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'green lvl 3': {
        value: 30000000,
        dupedValue: 'N/A',
        demand: 'Below Average',
        status: 'Stable',
        monthlyUnique: 'Very Rare'
    },
    'green lvl 4': {
        value: 100000000,
        dupedValue: 97500000,
        demand: 'Mid',
        status: 'Stable',
        monthlyUnique: 'Extremely Rare'
    },
    'green lvl 5': {
        value: 230000000,
        dupedValue: 60000000,
        demand: 'Mid',
        status: 'Unstable',
        monthlyUnique: 'Rare-ish'
    },
    'hyper blue lvl 1': {
        value: 400000,
        dupedValue: 'N/A',
        demand: 'Extremely Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    'hyper blue lvl 2': {
        value: 3500000,
        dupedValue: 'N/A',
        demand: 'Mid',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'hyper blue lvl 3': {
        value: 37500000,
        dupedValue: 'N/A',
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Very Rare'
    },
    'hyper blue lvl 4': {
        value: 120000000,
        dupedValue: 117500000,
        demand: 'Above Average',
        status: 'Stable',
        monthlyUnique: 'Extremely Rare'
    },
    'hyper blue lvl 5': {
        value: 240000000,
        dupedValue: 70000000,
        demand: 'Mid',
        status: 'Unstable',
        monthlyUnique: 'Extremely Rare'
    },
    'hyper pink lvl 1': {
        value: 350000,
        dupedValue: 'N/A',
        demand: 'Extremely Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    'hyper pink lvl 2': {
        value: 2500000,
        dupedValue: 'N/A',
        demand: 'Mid',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'hyper pink lvl 3': {
        value: 15000000,
        dupedValue: 'N/A',
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Very Rare'
    },
    'hyper pink lvl 4': {
        value: 65000000,
        dupedValue: 60000000,
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Extremely Rare'
    },
    'hyper pink lvl 5': {
        value: 140000000,
        dupedValue: 55000000,
        demand: 'Medium',
        status: 'Unstable',
        monthlyUnique: 'Extremely Rare'
    },
    'hypered lvl 5': {
        value: 220000000,
        dupedValue: 65000000,
        demand: 'Mid',
        status: 'Unstable',
        monthlyUnique: 'Very Rare'
    },
    'hyperred lvl 1': {
        value: 500000,
        dupedValue: 'N/A',
        demand: 'Extremely Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    'hyperred lvl 2': {
        value: 3250000,
        dupedValue: 'N/A',
        demand: 'Mid',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'hyperred lvl 3': {
        value: 35000000,
        dupedValue: 'N/A',
        demand: 'Below Average',
        status: 'Stable',
        monthlyUnique: 'Very Rare'
    },
    'hyperred lvl 4': {
        value: 110000000,
        dupedValue: 107500000,
        demand: 'Mid',
        status: 'Stable',
        monthlyUnique: 'Extremely Rare'
    },
    'hypershift': {
        value: 1500000000,
        dupedValue: '400-450m',
        demand: 'Very High',
        status: 'Unstable',
        monthlyUnique: 'Extremely Rare'
    },
    'orange lvl 1': {
        value: 250000,
        dupedValue: 'N/A',
        demand: 'Extremely Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    'orange lvl 2': {
        value: 1250000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'orange lvl 3': {
        value: 10000000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Very Rare'
    },
    'orange lvl 4': {
        value: 42500000,
        dupedValue: 45000000,
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Extremely Rare'
    },
    'orange lvl 5': {
        value: 75000000,
        dupedValue: 40000000,
        demand: 'Low',
        status: 'Unstable',
        monthlyUnique: 'Rare'
    },
    'purple lvl 1': {
        value: 300000,
        dupedValue: 'N/A',
        demand: 'Extremely Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    'purple lvl 2': {
        value: 1500000,
        dupedValue: 'N/A',
        demand: 'Mid',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'purple lvl 3': {
        value: 12500000,
        dupedValue: 'N/A',
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Very Rare'
    },
    'purple lvl 4': {
        value: 60000000,
        dupedValue: 52500000,
        demand: 'Medium',
        status: 'Stable',
        monthlyUnique: 'Extremely Rare'
    },
    'purple lvl 5': {
        value: 100000000,
        dupedValue: 50000000,
        demand: 'Medium',
        status: 'Unstable',
        monthlyUnique: 'Rare'
    },
    'yellow lvl 1': {
        value: 200000,
        dupedValue: 'N/A',
        demand: 'Extremely Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    'yellow lvl 2': {
        value: 1000000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'yellow lvl 3': {
        value: 7500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Very Rare'
    },
    'yellow lvl 4': {
        value: 35000000,
        dupedValue: 32500000,
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Extremely Rare'
    },
    'yellow lvl 5': {
        value: 65000000,
        dupedValue: 37500000,
        demand: 'Low',
        status: 'Unstable',
        monthlyUnique: 'Rare'
    }
},
spoilers: {
    '2 billion': {
        value: 7500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Dropping',
        monthlyUnique: 'Very Rare'
    },
    '3 billion': {
        value: 750000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    '5 star': {
        value: 4500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Very Rare'
    },
    'after burner': {
        value: 700000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'bicycle rack': {
        value: 3000000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Very Rare'
    },
    'blue chute': {
        value: 1250000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'brickset': {
        value: 6500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Very Rare'
    },
    'cash spitter': {
        value: 2500000,
        dupedValue: 'N/A',
        demand: 'Mid',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'click bait': {
        value: 2500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'death trap': {
        value: 600000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'deathray': {
        value: 600000,
        dupedValue: 'N/A',
        demand: 'Extremely Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    'do you lift?': {
        value: 300000,
        dupedValue: 'N/A',
        demand: 'Extremely Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    'dual flags': {
        value: 1250000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'dual rockets': {
        value: 2500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'eight leg': {
        value: 3500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Very Rare'
    },
    'endurance wing': {
        value: 500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'flamethrower': {
        value: 700000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'glider wing': {
        value: 1250000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'jdm': {
        value: 1000000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'jetpack': {
        value: 700000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'live glider': {
        value: 500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'mecha arms': {
        value: 1250000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'orange chute': {
        value: 1000000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'overdrive': {
        value: 500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'rc antenna': {
        value: 400000,
        dupedValue: 'N/A',
        demand: 'Extremely Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'robowing': {
        value: 500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'sail wing': {
        value: 500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'snow log': {
        value: 500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'snow shovel': {
        value: 3000000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Very Rare'
    },
    'spare': {
        value: 1250000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Very Rare'
    },
    'star wing': {
        value: 550000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'thrusters': {
        value: 45000000,
        dupedValue: 40000000,
        demand: 'Mid',
        status: 'Dropping',
        monthlyUnique: 'Extremely Rare'
    },
    'tiki torch': {
        value: 2500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'trophy wings': {
        value: 200000,
        dupedValue: 'N/A',
        demand: 'Extremely Low',
        status: 'Stable',
        monthlyUnique: 'Common'
    },
    'tuner': {
        value: 500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'turning key': {
        value: 250000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
    'ufo': {
        value: 1250000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'velocity': {
        value: 2500000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Rare'
    },
    'volt wing': {
        value: 3000000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Very Rare'
    },
    'water gun': {
        value: 850000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Uncommon'
    },
},
};

const items = itemGroups.items;
const rims = itemGroups.rims;
const textures = itemGroups.textures;
const colors = itemGroups.colors;
const hypers = itemGroups.hypers;
const spoilers = itemGroups.spoilers;

function generateItemHTML(itemKey, itemDetails) {

    const specialCases = {
        tiny: 'Tiny Toy',
        proto: 'Proto 8',
        nascar: 'Nascar 75',
        mac: 'Macaron',
        jav: 'Javelin',
        jack: 'Jack Rabbit',
        ice: 'Ice Breaker',
        escape: 'Escape Bot',
        crew: 'Crew Capsule',
        cel: 'Celsior',
        hawk: 'Blackhawk',
        beig: 'Beignet',
        beam: 'Beam Hybrid',
        banana: 'Banana Car',
        arach: 'Arachnid',
    }

    const displayName = specialCases[itemKey] || (itemKey.charAt(0).toUpperCase() + itemKey.slice(1));

    const html = `
        <div class="item-container" id="${itemKey}">
            <div class="item-container-left">
                <h1>${displayName}</h1>                
            </div>
            <div class="item-container-right">
                <p>Value - ${itemDetails.value.toLocaleString()}</p>
                <p>Duped Value - ${itemDetails.dupedValue.toLocaleString()}</p>
                <p>Demand - ${itemDetails.demand}</p>
                <p>Status - ${itemDetails.status}</p>
                <p>Rarity - ${itemDetails.monthlyUnique}</p>
                <img src="images/${itemKey}.png" onerror="this.onerror=null; this.src='images/fallback.png'">
            </div>
        </div>
    `;

    return html;
}

function loadHTML(type) {
if (type === items) {
for (const [key, details] of Object.entries(items)) {
    const itemHTML = generateItemHTML(key, details);
    const containerFlex = document.getElementById('items-flex');
    containerFlex.insertAdjacentHTML("beforeend", itemHTML);
}
}
if (type === rims) {
for (const [key, details] of Object.entries(rims)) {
    const itemHTML = generateItemHTML(key, details);
    const containerFlex = document.getElementById('items-flex');
    containerFlex.insertAdjacentHTML("beforeend", itemHTML);
}
}
if (type === textures) {
for (const [key, details] of Object.entries(textures)) {
    const itemHTML = generateItemHTML(key, details);
    const containerFlex = document.getElementById('items-flex');
    containerFlex.insertAdjacentHTML("beforeend", itemHTML);
}
}
if (type === colors) {
for (const [key, details] of Object.entries(colors)) {
    const itemHTML = generateItemHTML(key, details);
    const containerFlex = document.getElementById('items-flex');
    containerFlex.insertAdjacentHTML("beforeend", itemHTML);
}
}
if (type === hypers) {
for (const [key, details] of Object.entries(hypers)) {
    const itemHTML = generateItemHTML(key, details);
    const containerFlex = document.getElementById('items-flex');
    containerFlex.insertAdjacentHTML("beforeend", itemHTML);
}
}
if (type === spoilers) {
for (const [key, details] of Object.entries(spoilers)) {
    const itemHTML = generateItemHTML(key, details);
    const containerFlex = document.getElementById('items-flex');
    containerFlex.insertAdjacentHTML("beforeend", itemHTML);
}
}

}

var valuesArr = [];

function getValuesArr(type) {
    const itemsValueArr = Object.values(type);
    valuesArr = [];
    for (let i = 0; i < itemsValueArr.length; i++) {
        const value = itemsValueArr[i].value;
        valuesArr.push(value);
    }
    return valuesArr;
}

function getOrder(type) {
    const itemsOrdArr = Object.keys(type);
    itemsOrdArr.sort((a, b) => type[b].value - type[a].value);

    for (let i = 0; i < itemsOrdArr.length; i++) {
        const element = itemsOrdArr[i];
        const itemElement = document.getElementById(element);
        if (itemElement) {
            itemElement.style.order = i;
        } else {
            console.error(`Element with ID ${element} not found`);
        }
    }
}

function loadContent(type) {
    loadHTML(type);
    getValuesArr(type);
    getOrder(type);
}

if (urlParams.has('items')) {
    loadContent(items);
    itemsOrdArr = Array.from(Object.keys(items));
}

if (urlParams.has('colors')) {
    loadContent(colors);
    itemsOrdArr = Array.from(Object.keys(colors));
}

if (urlParams.has('textures')) {
    loadContent(textures);
    itemsOrdArr = Array.from(Object.keys(textures));
}

if (urlParams.has('rims')) {
    loadContent(rims);
    itemsOrdArr = Array.from(Object.keys(rims));
}

if (urlParams.has('hypers')) {
    loadContent(hypers);
    itemsOrdArr = Array.from(Object.keys(hypers));
}

if (urlParams.has('spoilers')) {
    loadContent(spoilers);
    itemsOrdArr = Array.from(Object.keys(spoilers));
}

function getOffset(el) {
    console.log('Input value:', el);
    for (let i = 0; i < itemsOrdArr.length; i++) {
        console.log('Checking element:', itemsOrdArr[i]);
        if (/^[a-zA-Z0-9\-_]+$/.test(el)) {
            if (el.toLowerCase().includes(itemsOrdArr[i]) || itemsOrdArr[i].includes(el.toLowerCase())) {
                let el = itemsOrdArr[i];
                const rect = document.getElementById(el).getBoundingClientRect();
                window.scrollTo({ top: (rect.top - 200) + window.scrollY, behavior: 'smooth' });
                return
            }
        }
    }
    console.log('Element not found for input:', el);
}

let listContainers = document.getElementsByClassName('item-container');

let topButton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}
