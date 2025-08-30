---
title: "Optimal Design of a Bike Wrench"
date: "2025-06-08"
featured: true
featured_order: 3
project_num: 2
type: "engineering"
description: "Exploring the fascinating intersection between Bauhaus functionalism and monumental design"
excerpt: "Reducing material usage in a wrench design through topology optimization using ANSYS Mechanical."
categories: ["ANSYS", "FEA", "Product Design", "Topology Optimization"]
tags: ["Geometry Optimization", "Product Design"]
thumbnail: '/images/Bike Wrench/WrenchThumbnail.jpg'
---

## Aim
- Optimize the design of a bike wrench to minimize mass while ensuring that maximum stress remains below 160 MPa and total deformation is under 1 mm.
- Apply topology optimization to refine the design to reduce material usage while maintaining structural integrity.

## Approach
- Conducted static structural analysis in ANSYS Mechanical with a 500N applied force and fixed support at the wrench head.
- Parameterized the fillet radius (5–20 mm) and thickness (5–10 mm) and analyzed their effects on stress, deformation, and mass.
- Performed response surface optimization to determine the most effective combination of parameters.
- Modified the wrench in ANSYS SpaceClaim and verified the results by performing another static structural analysis with the updated geometry.

## Result
- Topology optimization suggested removing material from the middle of the handle, leading to a redesigned wrench weighing 34.2 g.
- The final CAD model, validated through static analysis, resulted in a maximum stress of 143.01 MPa and deformation of 0.81 mm, meeting all design objectives.
- Demonstrated that geometry and topology optimization effectively reduced weight while maintaining structural performance.

## Ansys Topology Optimization
Removed material based on these results.
<div class="my-12 text-center">
  <a href="/images/Bike Wrench/Surface Topology Optimization.png" class="inline-block">
    <img src="/images/Bike Wrench/Surface Topology Optimization.png" alt="Topology optimization" class="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" style="width: 60%; height: auto;" />
  </a>
</div>

## Ansys Results on Redesigned Geometry
<div class="photo-row">
  <figure>
    <img src="/images/Bike Wrench/WrenchDeformationResults.png" alt="Ansys Mechanical deformation results">
    <figcaption>Wrench total deformation results</figcaption>
  </figure>
  <figure>
    <img src="/images/Bike Wrench/WrenchStressResults.png" alt="Ansys Mechanical stress results">
    <figcaption>Wrench von Mises stress results</figcaption>
  </figure>
</div>

<style>
.photo-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: start;
  margin: 2rem 0;
}

.photo-row figure {
  margin: 0 !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px; /* Adjust this value - try 0px, 2px, 4px, etc. */
}

.photo-row img {
  width: 700px;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  margin: 0 !important; /* Override any markdown img margins */
  margin-bottom: 0 !important; /* Specifically override bottom margin */
}

/* Target figcaption more specifically */
.photo-row figure figcaption {
  font-style: italic;
  font-size: 0.9rem;
  color: var(--color-text-muted);
  text-align: center;
  margin: 0 !important; /* Override all margins */
  margin-top: 0 !important; /* Specifically override top margin */
  margin-bottom: 0 !important; /* Specifically override bottom margin */
  padding: 0 !important; /* Override any padding */
}

/* Responsive: stack on mobile */
@media (max-width: 768px) {
  .photo-row {
    grid-template-columns: 1fr;
  }
  
  .photo-row img {
    height: 200px;
  }
}
</style>