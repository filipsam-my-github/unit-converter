import * as mo_ConversionLogic from './conversion_logic.js';

function createResult(){
    const ENTERED_VAL = document.getElementById("input-value").value
    const FROM_UNIT = document.getElementById("from-unit").value
    const TO_UNIT = document.getElementById("to-unit").value

    let result = "It's "
    result += mo_ConversionLogic.convertFromTo(ENTERED_VAL, FROM_UNIT, TO_UNIT);
    result += ` ${TO_UNIT}`

    document.getElementById("result").querySelector("h2").textContent  = result
}

mo_ConversionLogic.populateSelectOptions()

document.getElementById("convert-btn").addEventListener("click", function() {
    createResult()
});