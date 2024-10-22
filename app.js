function openTab(event, tabName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.visibility = 'hidden';
        tabcontent[i].style.opacity = '0';
        tabcontent[i].style.position = 'absolute';
    }

    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    let selectedTab = document.getElementById(tabName);
    selectedTab.style.visibility = 'visible';
    selectedTab.style.opacity = '1';
    selectedTab.style.position = 'relative';

    event.currentTarget.className += ' active';
}

function convertLength(value, fromUnit, toUnit) {
    const units = {
        millimeter: 0.001,
        centimeter: 0.01,
        meter: 1,
        kilometer: 1000,
        inch: 0.0254,
        foot: 0.3048,
        yard: 0.9144,
        mile: 1609.34
    };

    const result = (value * units[fromUnit]) / units[toUnit];
    return result.toFixed(1);
}

document.querySelector('#Length form').addEventListener('submit', (event) => {
    event.preventDefault();
    const value = document.querySelector('#length-value').value;
    const fromUnit = document.querySelector('#from-unit-length').value;
    const toUnit = document.querySelector('#to-unit-length').value;
    const result = convertLength(value, fromUnit, toUnit);
    document.querySelector('#Length .result').textContent = `Converted Value: ${result}`;
});

document.getElementsByClassName('tablinks')[0].click();