//==== Calculation functions ====
function hardnessByEDTA(volmofEDTA, molarityofEDTA, volmofwater) {
    return ((volmofEDTA * molarityofEDTA * 100000) / volmofwater);
}

function alkalinity(V1, V2, V, con_acid) {
    const P = ((V1 * con_acid * 50 * 1000) / V);
    const M = ((V2 * con_acid * 50 * 1000) / V);
    return { P, M };
}

function Dissolved_oxygen(normality, volm_titr, volm_sample) {
    return ((8 * 100 * normality * volm_titr) / volm_sample);
}

function biochemical(initialDO, finalDO, P1) {
    return ((initialDO - finalDO) / P1);
}

function chemical(vol_b, vol_s, conofFE, Volm) {
    return (((vol_b - vol_s) * conofFE * 8000) / Volm);
}

function chlorine_content(blank, back) {
    return (((back - blank) * 0.02 * 35.5 * 1000) / 50);
}

//==== HTML Inputs ====
const inputsDiv = document.getElementById("inputs");
const choiceSelect = document.getElementById("choice");

choiceSelect.addEventListener("change", showInputs);
showInputs();

function showInputs() {
    const choice = choiceSelect.value;
    let html = "";

    if (choice == "1") {
        html = `
            <label>● Volume of EDTA (ml):</label><input id="volmofEDTA" type="number"><br>
            <label>● Concentration of EDTA (M):</label><input id="molarityofEDTA" type="number"><br>
            <label>● Volume of sample water (ml):</label><input id="volmofwater" type="number"><br>
        `;
    } else if (choice == "2") {
        html = `
            <label>● Volume of acid V1 (phenolphthalein, ml):</label><input id="V1" type="number"><br>
            <label>● Volume of acid V2 (methyl orange, ml):</label><input id="V2" type="number"><br>
            <label>● Volume of sample water V (ml):</label><input id="V" type="number"><br>
            <label>● Concentration of acid:</label><input id="con_acid" type="number"><br>
        `;
    } else if (choice == "3") {
        html = `
            <label>● Normality of titrant:</label><input id="normality" type="number"><br>
            <label>● Volume of titrant (ml):</label><input id="volm_titr" type="number"><br>
            <label>● Volume of sample water (ml):</label><input id="volm_sample" type="number"><br>
        `;
    } else if (choice == "4") {
        html = `
            <label>● Initial DO:</label><input id="initialDO" type="number"><br>
            <label>● Final DO:</label><input id="finalDO" type="number"><br>
            <label>● Dilution factor (P1):</label><input id="P1" type="number"><br>
        `;
    } else if (choice == "5") {
        html = `
            <label>● Volume added to blank (ml):</label><input id="vol_b" type="number"><br>
            <label>● Volume added to sample (ml):</label><input id="vol_s" type="number"><br>
            <label>● Concentration of Fe(NH4)2(SO4)2:</label><input id="conofFE" type="number"><br>
            <label>● Volume of sample water (ml):</label><input id="Volm" type="number"><br>
        `;
    } else if (choice == "6") {
        html = `
            <label>● Constant burette reading for BACK titration (ml):</label><input id="back" type="number"><br>
            <label>● Constant burette reading for BLANK titration (ml):</label><input id="blank" type="number"><br>
        `;
    }

    inputsDiv.innerHTML = html;
}

//==== Main Calculation ====
function calculate() {
    const choice = choiceSelect.value;
    const resultDiv = document.getElementById("result");
    let output = "";

    if (choice == "1") {
        const volmofEDTA = parseFloat(document.getElementById("volmofEDTA").value);
        const molarityofEDTA = parseFloat(document.getElementById("molarityofEDTA").value);
        const volmofwater = parseFloat(document.getElementById("volmofwater").value);

        const hardness = hardnessByEDTA(volmofEDTA, molarityofEDTA, volmofwater);
        output = `Total Hardness of water = ${hardness.toFixed(2)} ppm<br>`;

        if (hardness >= 0 && hardness <= 25) output += "NATURE: Very Soft Water.";
        else if (hardness <= 50) output += "NATURE: Soft Water.";
        else if (hardness <= 100) output += "NATURE: Moderately Soft Water.";
        else if (hardness <= 150) output += "NATURE: Slight Hard Water.";
        else if (hardness <= 200) output += "NATURE: Moderately Hard Water.";
        else if (hardness <= 250) output += "NATURE: Hard Water.";
        else output += "NATURE: Very Hard Water.";
    }

    else if (choice == "2") {
        const V1 = parseFloat(document.getElementById("V1").value);
        const V2 = parseFloat(document.getElementById("V2").value);
        const V = parseFloat(document.getElementById("V").value);
        const con_acid = parseFloat(document.getElementById("con_acid").value);

        const { P, M } = alkalinity(V1, V2, V, con_acid);
        output = `P = ${P.toFixed(2)} ppm<br>M = ${M.toFixed(2)} ppm<br>`;

        if (P === 0) output += "Only Bicarbonate alkalinity is present.";
        else if (P === M) output += "Only Hydroxide alkalinity is present.";
        else if (P === 0.5 * M) output += "Only Carbonate alkalinity is present.";
        else if (P >= 0.5 * M) {
            output += `Hydroxide alkalinity = ${(2 * P - M).toFixed(2)}<br>`;
            output += `Carbonate alkalinity = ${(2 * (M - P)).toFixed(2)}`;
        } else {
            output += `Carbonate alkalinity = ${(2 * P).toFixed(2)}<br>`;
            output += `Bicarbonate alkalinity = ${(M - (2 * P)).toFixed(2)}`;
        }
    }

    else if (choice == "3") {
        const normality = parseFloat(document.getElementById("normality").value);
        const volm_titr = parseFloat(document.getElementById("volm_titr").value);
        const volm_sample = parseFloat(document.getElementById("volm_sample").value);

        const DO = Dissolved_oxygen(normality, volm_titr, volm_sample);
        output = `DO = ${DO.toFixed(2)} mg/L<br>`;
    }

    else if (choice == "4") {
        const initialDO = parseFloat(document.getElementById("initialDO").value);
        const finalDO = parseFloat(document.getElementById("finalDO").value);
        const P1 = parseFloat(document.getElementById("P1").value);

        const BOD = biochemical(initialDO, finalDO, P1);
        output = `BOD = ${BOD.toFixed(2)} mg/L<br>`;

        if (BOD <= 2) output += "Water is safe for drinking purpose.";
        else if (BOD <= 4) output += "Water is safe for domestic use.";
        else if (BOD <= 30) output += "Water is permissible.";
        else output += "Water is not permissible.";
    }

    else if (choice == "5") {
        const vol_b = parseFloat(document.getElementById("vol_b").value);
        const vol_s = parseFloat(document.getElementById("vol_s").value);
        const conofFE = parseFloat(document.getElementById("conofFE").value);
        const Volm = parseFloat(document.getElementById("Volm").value);

        const COD = chemical(vol_b, vol_s, conofFE, Volm);
        output = `COD = ${COD.toFixed(2)} mg/L<br>`;
        output += COD < 250 ? "Water is permissible." : "Water is not permissible.";
    }

    else if (choice == "6") {
        const back = parseFloat(document.getElementById("back").value);
        const blank = parseFloat(document.getElementById("blank").value);

        const chlorine = chlorine_content(blank, back);
        output = `Chlorine content = ${chlorine.toFixed(2)} ppm<br>`;
    }

    document.getElementById("result").innerHTML = output;
}
