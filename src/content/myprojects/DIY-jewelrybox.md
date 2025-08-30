---
title: "Jewelry Box"
date: "2025-06-06"
featured: false
project_num: 9
type: "DIY"
description: "How CSS Grid enables us to create layouts inspired by Bauhaus and constructivist design"
excerpt: "Prototyped, developed a CAD model, and assembled laser cut plywood."
categories: ["Product Design", "Prototyping", "Laser Cutting", "SolidWorks"]
tags: ["Product Design", "Fabrication", "CAD"]
thumbnail: '/images/jewelryBoxThumbail.jpg'
---

<div style="display: grid; grid-template-columns: 1.8fr 1fr; gap: 2rem; margin: 1rem 0;">
  <!-- Left Column - Text -->
  <div style="font-size: 1.0rem; line-height: 1.0;">
    <h2>Aim</h2>
     <ul>
      <li><p>To fabricate a product of our choice that makes you or someone else happy.</p></li>
      </ul>
    <h2>Approach</h2>
     <ul>
      <li><p>Developed design concepts through sketching and ideation.</p></li>
      <li><p>Created a cardboard prototype to test design concepts.</p></li>
      <li><p>Developed a CAD model in SolidWorks to ensure pieces fit together and to create files for laser cutting.</p></li>
      </ul>
    <h2>Result</h2>
     <ul>
      <li><p>Designed a jewelry box with a multiple compartments for organization with dimensions small enough to be portable.</p></li>
      </ul>
  </div>

  <!-- Right Column - Images -->
  <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 1rem;">
    <img src="/images/DIY Jewelry Box/jewelrybox-CAD1.png" alt="CAD model of closed jewelry box" style="width: 90%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
    <img src="/images/DIY Jewelry Box/jewelrybox-CAD2.png" alt="CAD model of jewelry box opened" style="width: 90%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
  </div>
</div>

## Fabrication Process

<div class="slideshow">
  <div class="slides">
    <div class="slide active">
      <img src="/images/DIY Jewelry Box/jewelrybox-sketches.jpg" alt="Image 1">
      <div class="caption">Initial ideation design sketches</div>
    </div>
    <div class="slide">
      <img src="/images/DIY Jewelry Box/jewelrybox-prototype.jpg" alt="Image 2">
      <div class="caption">Small scale cardboard prototype</div>
    </div>
    <div class="slide">
      <img src="/images/DIY Jewelry Box/jewelrybox-CAD2.png" alt="Image 3">
      <div class="caption">CAD assembly</div>
    </div>
    <div class="slide">
      <img src="/images/DIY Jewelry Box/jewelrybox-finalsketch.jpg" alt="Image 4">
      <div class="caption">Final concept sketch</div>
    </div>
    <div class="slide">
      <img src="/images/DIY Jewelry Box/jewelrybox-fab1.jpg" alt="Image 5">
      <div class="caption">Drilling holes to attach the hinges</div>
    </div>
    <div class="slide">
      <img src="/images/DIY Jewelry Box/jewelrybox-fab2.jpg" alt="Image 6">
      <div class="caption">Putting pieces together using wood glue</div>
    </div>
    <div class="slide">
      <img src="/images/DIY Jewelry Box/jewelrybox-fab3.jpg" alt="Image 7">
    </div>
    <div class="slide">
      <img src="/images/DIY Jewelry Box/jewelrybox-fab4.jpg" alt="Image 8">
    </div>
    <div class="slide">
      <img src="/images/DIY Jewelry Box/jewelrybox-fab5.jpg" alt="Image 9">
      <div class="caption">Base assembled without drawer</div>
    </div>
    <div class="slide">
      <img src="/images/DIY Jewelry Box/jewelrybox-fab6.jpg" alt="Image 10">
    </div>
    <div class="slide">
      <img src="/images/DIY Jewelry Box/jewelrybox-fab7.jpg" alt="Image 10">
      <div class="caption">Fully assembled jewelry box</div>
    </div>
    <div class="slide">
      <img src="/images/DIY Jewelry Box/jewelrybox-fab8.jpg" alt="Image 11">
    </div>
  </div>

  <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
  <button class="next" onclick="moveSlide(1)">&#10095;</button>
  <button class="play" onclick="togglePlay()">&#9658;</button>

  <div class="thumbnails">
    <img src="/images/DIY Jewelry Box/jewelrybox-sketches.jpg" alt="Thumbnail 1" onclick="currentSlide(0)" class="thumbnail active">
    <img src="/images/DIY Jewelry Box/jewelrybox-prototype.jpg" alt="Thumbnail 2" onclick="currentSlide(1)" class="thumbnail">
    <img src="/images/DIY Jewelry Box/jewelrybox-CAD.png" alt="Thumbnail 3" onclick="currentSlide(2)" class="thumbnail">
    <img src="/images/DIY Jewelry Box/jewelrybox-finalsketch.jpg" alt="Image 4" onclick="currentSlide(3)" class="thumbnail">
    <img src="/images/DIY Jewelry Box/jewelrybox-fab1.jpg" alt="Image 5" onclick="currentSlide(4)" class="thumbnail">
    <img src="/images/DIY Jewelry Box/jewelrybox-fab2.jpg" alt="Image 6" onclick="currentSlide(5)" class="thumbnail">
    <img src="/images/DIY Jewelry Box/jewelrybox-fab3.jpg" alt="Image 7" onclick="currentSlide(6)" class="thumbnail">
    <img src="/images/DIY Jewelry Box/jewelrybox-fab4.jpg" alt="Image 8" onclick="currentSlide(7)" class="thumbnail">
    <img src="/images/DIY Jewelry Box/jewelrybox-fab5.jpg" alt="Image 9" onclick="currentSlide(8)" class="thumbnail">
    <img src="/images/DIY Jewelry Box/jewelrybox-fab6.jpg" alt="Image 10" onclick="currentSlide(9)" class="thumbnail">
    <img src="/images/DIY Jewelry Box/jewelrybox-fab7.jpg" alt="Image 11" onclick="currentSlide(10)" class="thumbnail">
    <img src="/images/DIY Jewelry Box/jewelrybox-fab8.jpg" alt="Image 12" onclick="currentSlide(11)" class="thumbnail">
  </div>
</div>

<style>
.slideshow {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px;
  background: transparent;
}
.slideshow * { margin-top: 0 !important; margin-bottom: 0 !important; }

/* Slides container with fixed height */
.slides { 
  display: flex; 
  flex-direction: column; 
  gap: 0; 
  height: 450px; /* Set a fixed height for consistency */
  position: relative;
  background: #f5f5f5; /* Optional: background color for letterboxed areas */
}

.slide { 
  display: none; 
  position: relative;
  height: 100%; /* Take full height of container */
  width: 100%;
}

.slide.active { display: block; }

.slide img {
  width: 100%;
  height: 100%; /* Fill the container height exactly */
  object-fit: contain; /* Show full image with letterboxing if needed */
  /* Use object-fit: cover; if you prefer to crop images to fill the space */
  object-position: center; /* Center the image within the container */
  display: block;
  vertical-align: top;
  border-radius: 8px 8px 0 0;
  margin: 0 !important;
  line-height: 0 !important;
  font-size: 0 !important;
  background: #fff; /* Background for letterboxed areas */
}

/* Caption with black transparent background */
.caption {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  padding: 6px 8px;
  font-size: 0.9rem;
  border-radius: 0 0 8px 8px;
  box-sizing: border-box;
  z-index: 2;
}

/* Thumbnails */
.thumbnails {
  display: flex; justify-content: center; gap: 8px;
  margin-top: 6px; padding: 8px 0;
  background: transparent; border-radius: 0 0 8px 8px;
}
.thumbnail {
  width: 60px; height: 45px; object-fit: cover;
  border-radius: 4px; cursor: pointer;
  opacity: 0.6; transition: opacity 0.3s ease, transform 0.2s ease;
  border: 2px solid transparent;
}
.thumbnail:hover { opacity: 0.8; transform: scale(1.05); }
.thumbnail.active { opacity: 1; border-color: #007bff; transform: scale(1.1); }

/* Buttons */
.prev, .next, .play {
  cursor: pointer; position: absolute;
  transform: translateY(-50%);
  padding: 0.5rem 1rem; color: white;
  background: rgba(0,0,0,0.5); border: none;
  border-radius: 4px; font-size: 1.5rem;
  user-select: none; transition: background 0.3s ease;
  z-index: 3;
}
.prev:hover, .next:hover, .play:hover { background: rgba(0,0,0,0.7); }
.prev { top: 50%; left: 10px; }
.next { top: 50%; right: 10px; }

/* Play button in top-left corner */
.play {
  top: 10px; left: 10px;
  transform: none; font-size: 1.2rem;
  padding: 0.3rem 0.6rem;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .slides {
    height: 300px; /* Smaller height on mobile */
  }
  
  .slideshow {
    max-width: 100%;
    margin: 0 10px;
  }
}
</style>

<script>
let slideIndex = 0;
let autoPlay = false;
let autoPlayInterval;
const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnail');
const playButton = document.querySelector('.play');

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === n);
  });
  thumbnails.forEach((thumb, i) => {
    thumb.classList.toggle('active', i === n);
  });
}

function moveSlide(step) {
  slideIndex = (slideIndex + step + slides.length) % slides.length;
  showSlide(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlide(slideIndex);
}

function togglePlay() {
  autoPlay = !autoPlay;
  playButton.innerHTML = autoPlay ? "&#10074;&#10074;" : "&#9658;"; // pause/play symbols
  if (autoPlay) {
    autoPlayInterval = setInterval(() => moveSlide(1), 2500);
  } else {
    clearInterval(autoPlayInterval);
  }
}

showSlide(slideIndex);
</script>