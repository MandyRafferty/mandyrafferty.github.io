---
title: "2D Robot Trajectory Visualizer"
date: "2025-06-04"
project_num: 4
description: "Mapping 2D trajectory grids and cost maps in C++."
excerpt: "C++ visualizer for robot movements in 2D grid worlds to visualize simple trajectories and their cost map."
categories: ["C++", "Design", "UI/UX"]
tags: ["C++"]
thumbnail: '/images/costMapVisualizer.png'
---
<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; margin: 1rem 0;">
  <!-- Left Column - Text -->
  <div style="font-size: 1.0rem; line-height: 1.0;">
    <h2>Aim</h2>
     <ul>
      <li><p>Work collaboratively in a team with four other people to create individual C++ source files to generate a user facing graphic interface that could plot the movements of a single point robot.</p></li>
      <li><p>This can be applied across multiple robotic systems and aid researchers with simple trajectory visualization.</p></li>
      </ul>
    <h2>Approach</h2>
     <ul>
      <li><p>The project was divided into different source files: Map Reader, Trajectory Reader, Robot Position/Type Reader, Map Visualizer, and Trajectory Visualizer.</p></li>
      <li><p>Each team member completed their individual C++ source and header file. Team leads integrated the components together and each member made adjustments to their code to make the final compiled code functional.</p></li>
      <li><p>My individual contribution was the Map Visualizer, which inputs the 2D map data vector from the Map Reader, calculates the dimensions of the grid needed to visualize the map, and the labels needed to display on the grid. These dimensions are also used to dynamically size the window to open. The Map Visualizer can also plot a gradient of costs in addition to binary values.</p></li>
     </ul>
    <h2>Result</h2>
     <ul>
      <li><p>A program that reads a simple point robot trajectory and visualizes a binary cost map.</p></li>
     </ul>
  </div>

  <!-- Right Column - Images -->
  <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 1rem;">
    <img src="/images/trajectoryVisualizerGradient.png" alt="Map that displays cost map with color gradient" style="width: 90%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
    <img src="/images/roboViz.png" alt="Map that shows most efficient robot trajectory" style="width: 90%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
  </div>
</div>