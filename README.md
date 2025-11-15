# Water-Profile
This is a simple Frontend Project which calculates various water quality parameters and determines its quality for its usage and consumption.

🧪 Project Overview

Water Profile is a web application that allows users to calculate important water‑quality parameters (hardness, alkalinity, dissolved oxygen, BOD, COD, chlorine content) through a clean and intuitive interface. The app is hosted at https://waterprofile.netlify.app/
.

🛠 Features

Select a parameter (Hardness, Alkalinity, DO, BOD, COD, Chlorine) from a dropdown menu.

Dynamic form fields change depending on the selected parameter to request only relevant inputs.

In‑browser calculations using JavaScript functions for each parameter.

Instant display of result with appropriate units (ppm, mg/L) and conditional messages (e.g., “Water is safe for drinking”).

Responsive, simple UI suitable for desktop/web use.

🧱 Technical Stack

Front‑end: HTML + CSS + JavaScript (no backend required)

Hosted via Netlify on waterprofile.netlify.app

Modular JavaScript functions for calculations:

hardnessByEDTA

alkalinity

Dissolved_oxygen

biochemical (BOD)

chemical (COD)

chlorine_content

🎯 Usage

Open the web app at https://waterprofile.netlify.app/

From the dropdown, select the water‑quality parameter you want to calculate.

Fill in the prompted values (volumes, molarity, normality, dilution factor etc.).

Click Calculate.

View the result and any interpretation message (such as classification of hardness or whether water is permissible).

➕ Interpretation Notes

For Hardness, the output is expressed in ppm (parts per million) and includes a “nature” classification (Very Soft, Soft, Moderately Soft, Slight Hard, etc.).

For Alkalinity, both P (phenolphthalein endpoint) and M (methyl orange endpoint) are computed in ppm; the app then attempts to interpret the type of alkalinity (bicarbonate, carbonate, hydroxide) based on those values.

For DO, BOD, COD, and Chlorine Content, standard formulae are used to compute mg/L or ppm values.

BOD includes safety messages: e.g., ≤2 mg/L → safe for drinking; ≤4 → safe for domestic use; ≤30 → permissible; otherwise not permissible.

COD uses a threshold (e.g., <250 mg/L = permissible) as a quick check.

🌟 Why This App?

Water‑quality testing is a key part of environmental monitoring, lab analysis, and regulatory compliance. By putting quick calculators in a web interface, this app helps students, lab technicians, or hobbyists perform preliminary calculations without needing offline spreadsheets or repeating formula memorization. It’s lightweight, accessible, and free.

🔧 Installation / Development

If you want to develop further or host your own copy:

Clone or download the source files (HTML + JS + CSS).

Ensure you have the HTML file with <select id="choice">, <div id="inputs">, <button onclick="calculate()">Calculate</button>, and <div id="result">.

Link the JavaScript file (e.g., script.js) in the HTML:

<script src="script.js"></script>


Open the HTML file in your browser and test by selecting each parameter and providing input values.

Optionally, you can deploy on Netlify (or any static‑hosting service) by pointing it to the project directory.

🧩 Future Enhancements

Add input validation (e.g., non‑negative values, required fields) and error messages.

Provide a history/log of calculations (so users can refer back to previous results).

Add export/download (e.g., CSV or PDF) of results.

Improve UI/UX: responsive layout, better styling, icons.

Allow units conversion (ml ↔ L, ppm ↔ mg/L) and internationalization (multiple languages).

Add educational tooltips explaining each parameter and typical water‑quality ranges.

📄 License & Credits

This project is open for personal/educational use. Feel free to reuse or adapt the code for non‑commercial purposes, providing attribution.
