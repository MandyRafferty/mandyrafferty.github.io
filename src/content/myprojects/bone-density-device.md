---
title: "Bone Density Indicator"
date: "2025-06-08"
featured: false
project_num: 6
type: "engineering"
description: "Portable, handheld device that allows surgeons to measure bone density of patients cost effectively."
excerpt: "Portable, handheld device that allows surgeons to measure bone density of patients cost effectively."
categories: ["MATLAB GUI", "SolidWorks", "3D Printing", "Product Design"]
tags: ["Product Design"]
thumbnail: '/images/Bone Density Device/BoneDensityDevice.jpg'
---

<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; margin: 1rem 0;">
  <!-- Left Column - Text -->
  <div style="font-size: 1.0rem; line-height: 1.0;">
    <h2>Aim</h2>
     <ul>
      <li><p>Develop a cost-effective, portable device to assess bone density for orthopedic surgeons prior to implant surgery.</p></li>
      <li><p>Improve implant longevity by enabling real-time bone density assessment to reduce implant failure due to osteoporosis.</p></li>
      </ul>
    <h2>Approach</h2>
     <ul>
      <li><p>Designed a handheld device using a displacement sensor, pressure transducer, metal rod, Arduino, and 3D printed housing (modeling in SolidWorks) to measure bone stiffness.</p></li>
      <li><p>Implemented a MATLAB-based graphical user interface (GUI) to translate force and displacement data into bone density classifications.</p></li>
      <li><p>Performed compressive tests using an Instron on bone density modeling blocks with known densities in pounds per cubic feet (5, 8, 10, and 15 PCF) to create an equation relating stiffness and bone density.</p></li>
     </ul>
    <h2>Result</h2>
     <ul>
      <li><p>Integrated a mechanical system with electronic sensors, resulting in a low cost instrument that measures bone density.</p></li>
      <li><p>Confirmed device functionality and identified improvements, including a more sensitive displacement sensor and refined design to conceal wiring during use.</p></li>
      <li><p>Demonstrated potential as a low-cost, radiation-free alternative to current bone density assessment methods.</p></li>
     </ul>
  </div>

  <!-- Right Column - Images -->
  <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 1rem;">
    <img src="/images/Bone Density Device/inside-wiring.jpg" alt="Arduino and wiring" style="width: 90%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
    <figure style="margin: 0 !important; width: 90%; display: flex; flex-direction: column; align-items: center; gap: 4px;">
      <img src="/images/Bone Density Device/BoneDensityGUI.png" alt="MATLAB user interface" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin: 0 !important;" />
      <figcaption style="text-align: center; margin: 0 !important; padding: 0 !important; width: 100%;">MATLAB user interface for bone density analysis</figcaption>
    </figure>
  </div>
</div>

<div class="photo-row">
  <figure>
    <img src="/images/Bone Density Device/Arduino.jpg" alt="Arduino">
    <figcaption>Arduino</figcaption>
  </figure>
  <figure>
    <img src="/images/Bone Density Device/CAD-arduino-housing.png" alt="Arduino box">
    <figcaption>CAD model of box Arduino housing and wiring</figcaption>
  </figure>
  <figure>
    <img src="/images/Bone Density Device/bonedensity-final-assembly.png" alt="CAD assembly">
    <figcaption>Final SolidWorks assembly</figcaption>
  </figure>
</div>

## Product Demo Video
Prototype is being tested on a Bone Density Modeling block in combination with our MATLAB GUI.
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 my-12" align="center">
  <div>
    <video 
      src="/videos/bonedensity-demo-video.mp4" 
      controls
      muted
      style="width: 70%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
      class="rounded-lg shadow-md"
    >
      Your browser does not support the video tag.
    </video>
  </div>
</div>

<style>
.photo-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  width: 100%;
  height: 325px;
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