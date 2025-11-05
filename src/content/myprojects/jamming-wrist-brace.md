---
title: "Granular Jamming Wrist Brace"
date: "2025-06-07"
featured: true
featured_order: 1
project_num: 3
type: "engineering"
description: "A wrist cast utilizing granular jamming properties."
excerpt: "Wrist brace that integrates granular jamming to achieve a custom fit in its soft state while providing stabilizion in its rigid state."
categories: ["Product Design", "Soft Robotics", "Prototyping"]
tags: ["Soft Robotics", "Granular Jamming", "Product Design", "Fabrication"]
thumbnail: '/images/Granular Jamming Wrist Brace.jpg'
---

<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem; margin: 1rem 0;">
  <!-- Left Column - Text -->
  <div style="font-size: 1.0rem; line-height: 1.0;">
    <h2>Aim</h2>
     <ul>
      <li><p>Develop a functional prototype of a medical cast incorporating granular jamming to enhance comfort, adaptability, and rigidity of traditional casts for individuals with wrist injuries.</p></li>
      <li><p>Evaluate the stiffness and comfort of the cast by measuring its Young’s modulus in both soft and rigid states through mechanical testing and user feedback.</p></li>
      </ul>
    <h2>Approach</h2>
     <ul>
      <li><p>Designed and fabricated a cast that incorporates a granular jamming layer consisting of coffee grounds enclosed in a latex membrane.</p></li>
      <li><p>Conducted three-point bend tests on jamming layer to evaluate applied force and extension, then calculate energy dissipation and Young’s modulus.</p></li>
      <li><p>Qualitatively validated the cast’s comfort in its soft state and its effectiveness in restricting wrist motion when rigid through user testing.</p></li>
     </ul>
    <h2>Result</h2>
     <ul>
      <li><p>Young’s modulus of the cast increased by approximately 47 times when in the rigid state compared to the soft state.</p></li>
      <li><p>Rigid state demonstrated significantly higher energy dissipation, suggesting improved impact resistance.</p></li>
      <li><p>User testing confirmed that the cast was comfortable in its soft state and successfully restricted wrist motion in its rigid state.</p></li>
      </ul>
  </div>

  <!-- Right Column - Images -->
  <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 1rem;">
    <img src="/images/Jamming Brace/WristBraceBack.jpg" alt="Granular jamming layer of cast" style="width: 90%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
    <img src="/images/Jamming Brace/WristBraceFront.jpg" alt="Outside layer of cast" style="width: 90%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
  </div>
</div>

<!-- Section 3: Poster -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 my-12">
  <div class="lg:col-span-2 prose prose-lg max-w-none">
    <h2>Granular Jamming Proof of Concept</h2>
    <p>Testing coffee granules in a latex balloon - notice it gets stiff when a vacuum is applied!</p>
  </div>
    <div style="text-align: center;">
      <a href="/images/Jamming Brace/GranularJamming.gif">
        <img src="/images/Jamming Brace/GranularJamming.gif" alt="Proof of concept" class="w-full h-full object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" />
      </a>
    </div>
</div>

## Fabrication Process

<div class="slideshow">
  <div class="slides">
    <div class="slide active">
      <img src="/images/Jamming Brace/prototype-1.jpg" alt="Image 1">
      <div class="caption">Glue latex to create pocket</div>
    </div>
    <div class="slide">
      <img src="/images/Jamming Brace/prototype-2.jpg" alt="Image 2">
      <div class="caption">Insert coffee granules and seal with pump to enable vacuum</div>
    </div>
    <div class="slide">
      <img src="/images/Jamming Brace/prototype-3.png" alt="Image 3">
      <div class="caption">Initial prototype</div>
    </div>
    <div class="slide">
      <img src="/images/Jamming Brace/creating-TPU-prototype.jpg" alt="Image 4">
      <div class="caption">Testing thermoplastic polyurethane (TPU) for jamming layer</div>
    </div>
    <div class="slide">
      <img src="/images/Jamming Brace/TPUprototype.jpg" alt="Image 5">
      <div class="caption">TPU layer too thin, continued with latex sheets</div>
    </div>
    <div class="slide">
      <img src="/images/Jamming Brace/testing.jpg" alt="Image 6">
    </div>
    <div class="slide">
      <img src="/images/Jamming Brace/block-test.jpg" alt="Image 7">
      <div class="caption">Block test</div>
    </div>
    <div class="slide">
      <img src="/images/Jamming Brace/3-point-bend-test.jpg" alt="Image 8">
      <div class="caption">Three point bend test</div>
    </div>
    <div class="slide">
      <img src="/images/Jamming Brace/WristBraceBack.jpg" alt="Image 9">
      <div class="caption">Final prototype - jamming layer</div>
    </div>
    <div class="slide">
      <img src="/images/Jamming Brace/WristBraceFront.jpg" alt="Image 10">
      <div class="caption">Final prototype - top layer with 3D printed enforcements</div>
    </div>
    <div class="slide">
      <img src="/images/Jamming Brace/brace-layers.png" alt="Image 11">
      <div class="caption">Visual of four-layered final prototype</div>
    </div>
  </div>

  <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
  <button class="next" onclick="moveSlide(1)">&#10095;</button>
  <button class="play" onclick="togglePlay()">&#9658;</button>

  <div class="thumbnails">
    <img src="/images/Jamming Brace/prototype-1.jpg" alt="Thumbnail 1" onclick="currentSlide(0)" class="thumbnail active">
    <img src="/images/Jamming Brace/prototype-2.jpg" alt="Thumbnail 2" onclick="currentSlide(1)" class="thumbnail">
    <img src="/images/Jamming Brace/prototype-3.png" alt="Thumbnail 3" onclick="currentSlide(2)" class="thumbnail">
    <img src="/images/Jamming Brace/creating-TPU-prototype.jpg" alt="Image 4" onclick="currentSlide(3)" class="thumbnail">
    <img src="/images/Jamming Brace/TPUprototype.jpg" alt="Image 5" onclick="currentSlide(4)" class="thumbnail">
    <img src="/images/Jamming Brace/testing.jpg" alt="Image 6" onclick="currentSlide(5)" class="thumbnail">
    <img src="/images/Jamming Brace/block-test.jpg" alt="Image 7" onclick="currentSlide(6)" class="thumbnail">
    <img src="/images/Jamming Brace/3-point-bend-test.jpg" alt="Image 8" onclick="currentSlide(7)" class="thumbnail">
    <img src="/images/Jamming Brace/WristBraceBack.jpg" alt="Image 9" onclick="currentSlide(8)" class="thumbnail">
    <img src="/images/Jamming Brace/WristBraceFront.jpg" alt="Image 10" onclick="currentSlide(9)" class="thumbnail">
    <img src="/images/Jamming Brace/brace-layers.png" alt="Image 11" onclick="currentSlide(10)" class="thumbnail">
  </div>
</div>

## Test Results
Testing revealed that in the soft state, the jamming layer represented flexible polymer foams at a higher density. In the rigid state, it was within the same range as cork or rigid polymer foams.
<div class="single-photo">
  <figure>
    <img src="/images/Jamming Brace/brace-material-classification.png" alt="Jamming wrist brace final product">
  </figure>
</div>

## Final Product
<div class="single-photo">
  <figure>
    <img src="/images/Jamming Brace/granjam-finalbrace.png" alt="Jamming wrist brace final product" style="width: 700px;">
  </figure>
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

.slide img, .slide video {
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

.single-photo {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;     /* Center vertically (if needed) */
  margin: 2rem 0;
  width: 100%; /* Ensure full width */
  text-align: center; /* Optional: centers the caption if there is one */
}

/* Figure setup */
.single-photo figure {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centers content vertically */
  align-items: center;     /* Centers content horizontally */
  gap: 4px; /* Adjust the gap between image and caption */
}

/* Image styling */
.single-photo img {
  width: 450px; /* Set image width */
  height: auto; /* Let the height adjust automatically based on width */
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  margin: 0 !important;
  margin-bottom: 0 !important; /* Remove any extra bottom margin */
}

/* Figcaption styling */
.single-photo figure figcaption {
  font-style: italic;
  font-size: 0.9rem;
  color: var(--color-text-muted);
  text-align: center;
  margin: 0;
  padding: 0;
}

/* Responsive behavior: adjust image size on smaller screens */
@media (max-width: 768px) {
  .single-photo img {
    width: 100%; /* Make the image full width on smaller screens */
    max-width: 500px; /* Optional: limit the maximum width */
    height: auto;
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

<!-- Section 3: Single Large Image -->
<!-- <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 my-12">
  <div class="lg:col-span-2 prose prose-lg max-w-none">
    <h2>Fabrication Process</h2>
  </div>
  <div>
    <img src="/images/Semi-Autonomous De-Icing Robot.png" alt="Hero" class="w-full h-full object-cover rounded-lg shadow-md" />
  </div>
</div> -->
