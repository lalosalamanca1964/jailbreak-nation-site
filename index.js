"use strict";

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
    itemsOrdArr = Array.from(Object.keys(items));
});

const items =  {
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
    proto: {
        value: 12500000,
        dupedValue: 10000000,
        demand: 'High',
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
    power1: {
        value: 5500000,
        dupedValue: 'N/A',
        demand: 'Very High',
        status: 'Stable',
        monthlyUnique: 'Rare'
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
    drone: {
        value: 850000,
        dupedValue: 'N/A',
        demand: 'Low',
        status: 'Stable',
        monthlyUnique: 'Common'
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
};

var valuesArr = [];

function getValuesArr() {
    const itemsValueArr = Object.values(items);
    for (let i = 0; i < itemsValueArr.length; i++) {
        const value = itemsValueArr[i].value;
        valuesArr.push(value);
    }
    return valuesArr
}

getValuesArr();

function displayItemInfo() {
    var userInput = document.getElementById("user-input").value.toLowerCase();
    if (/^[a-zA-Z0-9\-_ ]+$/.test(userInput)) {
        const userInputWords = userInput.trim().split(' ');

        for (let i = 0; i < itemsOrdArr.length; i++) {
            const itemName = itemsOrdArr[i];

            if (userInputWords.some(word => itemName.includes(word)) || userInput.includes(itemName) || userInput === itemName) {
                document.getElementById('value-box').innerHTML = (`Value - ${items[itemName].value.toLocaleString()}`);
                document.getElementById('duped-box').innerHTML = (`Duped Value - ${items[itemName].dupedValue.toLocaleString()}`);
                document.getElementById('demand-box').innerHTML = (`Demand - ${items[itemName].demand}`);
                document.getElementById('status-box').innerHTML = (`Status - ${items[itemName].status}`);
                document.getElementById('unique-box').innerHTML = (`Rarity - ${items[itemName].monthlyUnique}`);
                document.getElementById('error-box').style.display = ('none');
                document.getElementById('display-item-image').style.display = ('block');
                document.getElementById('display-item-image').src = ('images/' + `${itemName}` + '.png');
                return;
            }
        }
        console.log('Item not found');
    } else {
        console.log('Invalid Input');
        document.getElementById('error-box').style.display = ('block');
        document.getElementById('error-box').innerHTML = ('Invalid Input');
    }
}
