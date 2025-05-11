//Standard for weight is gram
//Standard for lenght is millimeter
const standard_units_vals = {
    weight: {
        grams: 1,
        decagrams: 10,
        kilokilograms: 1000,
        tonnes: 1e+6,
        milligrams: 0.001,
        micrograms: 1e-6,
        "imperial tones": 1.016e+6,
        "us tones": 907185,
        stones: 6350.29,
        pounds: 453.592,
        ounces: 28.3495,
    },

    lenght: {
        millimeters: 1,
        kilometers: 1e+6,
        meters: 1000,
        micrometers: 0.001,
        nanometers: 1e-6,
        miles: 1.609e+6,
        yards: 914.4,
        foots: 304.8,
        inches: 25.4,
        "nautical miles": 1.852e+6,
        centimetres: 10
    }
}

export function populateSelectOptions(){
    const from_unit = document.getElementById("from-unit");
    const to_unit = document.getElementById("to-unit");
    from_unit.innerHTML = "";
    to_unit.innerHTML = "";

    populateSelectOptionsHelper(standard_units_vals.weight)
    populateSelectOptionsHelper(standard_units_vals.lenght)

}

function populateSelectOptionsHelper(units) {
    const from_unit = document.getElementById("from-unit");
    const to_unit = document.getElementById("to-unit");


    for (const unit in units) {
        const option_to_unit = document.createElement("option");
        option_to_unit.value = unit;
        option_to_unit.textContent = unit;

        const option_from_unit = option_to_unit.cloneNode(true);

        to_unit.appendChild(option_to_unit);
        from_unit.appendChild(option_from_unit);
    }
}



export function findConversionScope(unit) {
    for (let category in standard_units_vals) {
        if (unit in standard_units_vals[category]) {
            return category;
        }
    }
    console.log(`function findConversionScope could not find unit ${unit} in standard_units_vals object`)
    return undefined; 
}


export function convertFromTo(initial_val ,from_unit, to_unit){
    let converted_to_grams = initial_val * standard_units_vals[findConversionScope(from_unit)][from_unit]

    return converted_to_grams / standard_units_vals[findConversionScope(from_unit)][to_unit] + 0
}
