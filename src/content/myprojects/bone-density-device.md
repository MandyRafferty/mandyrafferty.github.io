---
title: "Bone Density Indicator"
date: "2025-06-08"
featured: false
project_num: 6
type: "engineering"
description: "Portable, handheld device that allows surgeons to measure bone density of patients cost effectively."
excerpt: "Portable, handheld device that allows surgeons to measure bone density of patients cost effectively."
categories: ["MATLAB GUI", "3D Printing", "Product Design"]
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
      <li><p>Designed a handheld device using a displacement sensor, pressure transducer, metal rod, Arduino, and 3D printed housing to measure bone stiffness.</p></li>
      <li><p>Implemented a MATLAB-based user interface to translate force and displacement data into bone density classifications.</p></li>
      <li><p>Performed compressive tests on bone density modeling blocks with known densities in pounds per cubic feet (5, 8, 10, and 15 PCF) to create an equation relating stiffness and bone density.</p></li>
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
    <img src="/images/Bone Density Device/BoneDensityGUI.png" alt="MATLAB user interface" style="width: 90%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
  </div>
</div>

## Product Demo Video
Prototype is being tested on a Bone Density Modeling block.
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 my-12">
  <div>
    <video 
      src="/videos/bonedensity-demo-video.mp4" 
      controls
      muted
      style="width: 70%; margin: 0 auto; display: block;"
      class="rounded-lg shadow-md"
    >
      Your browser does not support the video tag.
    </video>
  </div>
</div>