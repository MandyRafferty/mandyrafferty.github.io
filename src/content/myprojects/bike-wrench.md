---
title: "Optimal Design of a Bike Wrench"
date: "2025-06-08"
featured: true
featured_order: 3
project_num: 2
type: "engineering"
description: "Exploring the fascinating intersection between Bauhaus functionalism and monumental design"
excerpt: "Reducing material usage in a wrench design through topology optimization using ANSYS Mechanical."
categories: ["ANSYS", "FEA", "Design"]
tags: ["Geometry Optimization", "Product Design"]
thumbnail: '/images/WrenchThumbnail.jpg'
---

<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; margin: 1rem 0;">
  <!-- Left Column - Text -->
  <div style="font-size: 1.0rem; line-height: 1.0;">
    <h2>Aim</h2>
     <ul>
      <li><p>Optimize the design of a bike wrench to minimize mass while ensuring that maximum stress remains below 160 MPa and total deformation is under 1 mm.</p></li>
      <li><p>Apply topology optimization to refine the design to reduce material usage while maintaining structural integrity.</p></li>
      </ul>
    <h2>Approach</h2>
     <ul>
      <li><p>Conducted static structural analysis in ANSYS Mechanical with a 500N applied force and fixed support at the wrench head.</p></li>
      <li><p>Parameterized the fillet radius (5–20 mm) and thickness (5–10 mm) and analyzed their effects on stress, deformation, and mass.</p></li>
      <li><p>Performed response surface optimization to determine the most effective combination of parameters.</p></li>
      <li><p>Modified the wrench in ANSYS SpaceClaim and verified the results by performing another static structural analysis with the updated geometry.</p></li>
     </ul>
    <h2>Result</h2>
     <ul>
      <li><p>Topology optimization suggested removing material from the middle of the handle, leading to a redesigned wrench weighing 34.2 g.</p></li>
      <li><p>The final CAD model, validated through static analysis, resulted in a maximum stress of 143.01 MPa and deformation of 0.81 mm, meeting all design constraints.</p></li>
      <li><p>Demonstrated that geometry and topology optimization effectively reduced weight while maintaining structural performance.</p></li>
     </ul>
  </div>

  <!-- Right Column - Images -->
  <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 1rem;">
    <img src="/images/Surface Topology Optimization.png" alt="Surface Topology Optimization" style="width: 90%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
    <img src="/images/WrenchDeformationResults.png" alt="Outside layer of cast" style="width: 90%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
  </div>
</div>