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

function convertWeight(value, fromUnit, toUnit) {
    const units = {
        milligram: 0.000001,
        gram: 0.001,
        kilogram: 1,
        ounce: 0.0283495,
        pound: 0.453592
    };

    const result = (value * units[fromUnit]) / units[toUnit];
    return result.toFixed(1);
}

function convertTemperature(value, fromUnit, toUnit) {
    switch (fromUnit) {
        case 'Celsius':
            return fromCelsius(value, toUnit);
        case 'Fahrenheit':
            return fromFahrenheit(value, toUnit);
        case 'Kelvin':
            return fromKelvin(value, toUnit);
        default:
            return value;
    }
}

function fromCelsius(value, toUnit) {
    let result;
    if (toUnit === 'Fahrenheit') {
        result = (value * 9 / 5) + 32;
    } else if (toUnit === 'Kelvin') {
        result = value + 273.15;
    }

    return result.toFixed(0);;
}

function fromFahrenheit(value, toUnit) {
    let result;
    if (toUnit === 'Celsius') {
        result = (value - 32) * 5 / 9;
    } else if (toUnit === 'Kelvin') {
        result = (value + 459.67) * 5 / 9;
    }

    return result.toFixed(0);
}

function fromKelvin(value, toUnit) {
    if (toUnit === 'Celsius') {
        result = value - 273.15;
    } else if (toUnit === 'Fahrenheit') {
        result = value * 9 / 5 - 459.67;
    }

    return result.toFixed(0);
}

document.querySelector('#Temperature form').addEventListener('submit', (event) => {
    event.preventDefault();
    const value = document.querySelector('#temperature-value').value;
    const fromUnit = document.querySelector('#from-unit-temperature').value;
    const toUnit = document.querySelector('#to-unit-temperature').value;
    const result = convertTemperature(value, fromUnit, toUnit);
    document.querySelector('#Temperature .result').textContent = `Converted Value: ${result} ${toUnit}`;
});

document.querySelector('#Length form').addEventListener('submit', (event) => {
    event.preventDefault();
    const value = document.querySelector('#length-value').value;
    const fromUnit = document.querySelector('#from-unit-length').value;
    const toUnit = document.querySelector('#to-unit-length').value;
    const result = convertLength(value, fromUnit, toUnit);
    document.querySelector('#Length .result').textContent = `Converted Value: ${result} ${toUnit}`;
});

document.querySelector('#Weight form').addEventListener('submit', (event) => {
    event.preventDefault();
    const value = document.querySelector('#weight-value').value;
    const fromUnit = document.querySelector('#from-unit-weight').value;
    const toUnit = document.querySelector('#to-unit-weight').value;
    const result = convertWeight(value, fromUnit, toUnit);
    document.querySelector('#Weight .result').textContent = `Converted Value: ${result} ${toUnit}`;
});

document.getElementsByClassName('tablinks')[0].click();