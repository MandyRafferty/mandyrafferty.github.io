---
title: "Marble Statue Transient Thermal Analysis"
date: "2025-06-03"
project_num: 5
type: "engineering"
description: "Using ANSYS for a Thermal Transient Analysis."
excerpt: "Transient thermal analysis of a marble statue stuck to a steel plate completed using ANSYS Mechanical."
categories: ["FEA", "ANSYS", "Thermal Analysis"]
tags: ["Thermal Analysis", "ANSYS", "FEA"]
thumbnail: '/images/TTAmarble_statue.png'
---
<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; margin: 1rem 0;">
  <!-- Left Column - Text -->
  <div style="font-size: 1.0rem; line-height: 1.0;">
    <h2>Aim</h2>
     <ul>
      <li><p>Perform a transient thermal analysis of a marble statue to determine what time it freezes stuck to the top of a steel plate after being left on it overnight.</p></li>
      </ul>
    <h2>Approach</h2>
     <ul>
      <li><p>Set up a transient thermal analysis system in Ansys Workbench with ¼ symmetry, then applied the proper boundary conditions, including ambient temperature and convection.</p></li>
      <li><p>Applied a temperature probe to the contact surface between the plate and statue to capture the minimum temperature at the contact surface.</p></li>
      </ul>
    <h2>Result</h2>
     <ul>
      <li><p>Found the exact time that the model reaches above freezing (>0&deg;C) in seconds.</p></li>
      </ul>
  </div>

  <!-- Right Column - Images -->
  <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 1rem;">
    <img src="/images/marble statue CAD.png" alt="Marble statue geometry in ANSYS SpaceClaim" style="width: 90%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
    <img src="/images/statue plate temp probe.png" alt="Outside layer of cast" style="width: 90%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
  </div>
</div>