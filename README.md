# Water-Profile
This is a simple Frontend Project which calculates various water quality parameters and determines its quality for its usage and consumption.

# 💧 Water Profile

[![Netlify Status](https://img.shields.io/badge/Netlify-Online-brightgreen)](https://waterprofile.netlify.app/)  
[View Live App](https://waterprofile.netlify.app/)

---

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technical Stack](#technical-stack)
- [Usage](#usage)
- [Interpretation Notes](#interpretation-notes)
- [Why This App?](#why-this-app)
- [Installation / Development](#installation--development)
- [Future Enhancements](#future-enhancements)
- [License & Credits](#license--credits)

---

## 🧪 Project Overview
**Water Profile** is a web application to calculate key water-quality parameters including:

- Hardness  
- Alkalinity  
- Dissolved Oxygen (DO)  
- Biochemical Oxygen Demand (BOD)  
- Chemical Oxygen Demand (COD)  
- Chlorine Content  

It provides instant results with interpretation messages, helping students, lab technicians, and hobbyists assess water safety and quality.

---

## 🛠 Features
- Dynamic form fields that change based on selected parameter.  
- Instant calculations using built-in JavaScript functions.  
- Results include correct units (ppm, mg/L) and interpretation messages.  
- Responsive, clean, and lightweight interface.  
- Hosted online and accessible anywhere without backend requirements.

---

## 🧱 Technical Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Hosting:** Netlify ([waterprofile.netlify.app](https://waterprofile.netlify.app/))  
- **Modular JS functions** for calculations:
  - `hardnessByEDTA`
  - `alkalinity`
  - `Dissolved_oxygen`
  - `biochemical` (BOD)
  - `chemical` (COD)
  - `chlorine_content`

---

## 🎯 Usage
1. Open the web app: [https://waterprofile.netlify.app/](https://waterprofile.netlify.app/)  
2. Select a water-quality parameter from the dropdown.  
3. Fill in the input values (volume, molarity, normality, dilution factor, etc.).  
4. Click **Calculate**.  
5. View the results and interpretation messages.

---

## ➕ Interpretation Notes
- **Hardness:** ppm value with classification (Very Soft → Very Hard).  
- **Alkalinity:** P and M in ppm; type (bicarbonate, carbonate, hydroxide) determined.  
- **DO, BOD, COD, Chlorine:** mg/L or ppm calculated using standard formulas.  
  - **BOD safety thresholds:**  
    - ≤2 mg/L → Safe for drinking  
    - ≤4 mg/L → Safe for domestic use  
    - ≤30 mg/L → Permissible  
    - >30 mg/L → Not permissible  
  - **COD threshold:** <250 mg/L → Permissible  

---

## 🌟 Why This App?
Water-quality testing is crucial for environmental monitoring and lab analysis. This web app:

- Simplifies calculations without manual formula work.  
- Provides immediate interpretation of results.  
- Is free, accessible, and educational.

---

## 🔧 Installation / Development
1. Clone or download the project repository.  
2. Ensure HTML contains the elements:
   ```html
   <select id="choice"></select>
   <div id="inputs"></div>
   <button onclick="calculate()">Calculate</button>
   <div id="result"></div>

📄 License & Credits

This project is open for personal/educational use. Feel free to reuse or adapt the code for non‑commercial purposes, providing attribution.
