---
title: "Welded Steel Flower"
date: "2025-12-04"
featured: false
project_num: 24
type: "personal"
description: "Steel flower made from welding together washers and rods."
excerpt: "Steel flower made from welding together washers and rods."
categories: ["Welding"]
tags: ["Welding"]
thumbnail: '/images/Weld Flower/12-final.jpg'
---

## Fabrication Process
- Hammered washers to fold them into petals
- Used a cut off saw to cut the stem to the desired length
- Used a waterjet cutter to cut the base plate after preparing a .dxf file in Fusion360
- Tack welded petals onto the nut, then welded the stem to the flower and base plate
- Welded a couple of additional washers as leaves along the stem

<div class="slideshow">
  <div class="slides">
    <div class="slide active">
      <img src="/images/Weld Flower/1-washer.jpg" alt="Image 1">
    </div>
    <div class="slide">
      <img src="/images/Weld Flower/2-bent.jpg" alt="Image 2">
      <div class="caption">Bending washers into petals using a vice and hammer</div>
    </div>
    <div class="slide">
      <img src="/images/Weld Flower/3-cutoff_saw.jpg" alt="Image 3">
      <div class="caption">Using cutoff saw to cut steel rod to desired length for stem</div>
    </div>
    <div class="slide">
      <img src="/images/Weld Flower/4-stem.jpg" alt="Image 4">
    </div>
    <div class="slide">
      <img src="/images/Weld Flower/5-petal.jpg" alt="Image 5">
      <div class="caption">Tack welding petals onto nut</div>
    </div>
    <div class="slide">
      <img src="/images/Weld Flower/6-petals.jpg" alt="Image 6">
    </div>
    <div class="slide">
      <img src="/images/Weld Flower/7-petals.jpg" alt="Image 7">
    </div>
    <div class="slide">
      <img src="/images/Weld Flower/8-petals.jpg" alt="Image 8">
    </div>
    <div class="slide">
      <img src="/images/Weld Flower/9-waterjet.jpg" alt="Image 9">
      <div class="caption">Cutting base plate using a waterjet cutter</div>
    </div>
    <div class="slide">
      <img src="/images/Weld Flower/10-stem.jpg" alt="Image 10">
    </div>
    <div class="slide">
      <img src="/images/Weld Flower/11-base.jpg" alt="Image 11">
    </div>
    <div class="slide">
      <img src="/images/Weld Flower/12-final.jpg" alt="Image 12">
    </div>
</div>

  <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
  <button class="next" onclick="moveSlide(1)">&#10095;</button>
  <button class="play" onclick="togglePlay()">&#9658;</button>

  <div class="thumbnails">
    <img src="/images/Weld Flower/1-washer.jpg" alt="Thumbnail 1" onclick="currentSlide(0)" class="thumbnail active">
    <img src="/images/Weld Flower/2-bent.jpg" alt="Thumbnail 2" onclick="currentSlide(1)" class="thumbnail">
    <img src="/images/Weld Flower/3-cutoff_saw.jpg" alt="Thumbnail 3" onclick="currentSlide(2)" class="thumbnail">
    <img src="/images/Weld Flower/4-stem.jpg" alt="Image 4" onclick="currentSlide(3)" class="thumbnail">
    <img src="/images/Weld Flower/5-petal.jpg" alt="Image 5" onclick="currentSlide(4)" class="thumbnail">
    <img src="/images/Weld Flower/6-petals.jpg" alt="Image 6" onclick="currentSlide(5)" class="thumbnail">
    <img src="/images/Weld Flower/7-petals.jpg" alt="Image 7" onclick="currentSlide(6)" class="thumbnail">
    <img src="/images/Weld Flower/8-petals.jpg" alt="Image 8" onclick="currentSlide(7)" class="thumbnail">
    <img src="/images/Weld Flower/9-waterjet.jpg" alt="Image 9" onclick="currentSlide(8)" class="thumbnail">
    <img src="/images/Weld Flower/10-stem.jpg" alt="Image 10" onclick="currentSlide(9)" class="thumbnail">
    <img src="/images/Weld Flower/11-base.jpg" alt="Image 11" onclick="currentSlide(10)" class="thumbnail">
    <img src="/images/Weld Flower/12-final.jpg" alt="Image 12" onclick="currentSlide(11)" class="thumbnail">
  </div>
</div>

## Final Product
Inspiration vs Final Product
<div class="photo-row" style="display: flex; justify-content: center;">
  <figure>
    <img src="/images/Weld Flower/flower-inspo.png" alt="Final pic 1">
  </figure>
  <figure>
    <img src="/images/Weld Flower/12-final.jpg" alt="Final pic 2">
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
  display: flex;
  justify-content: flex-start; /* Ensures thumbnails are aligned to the left */
  margin-top: 6px;
  padding: 8px 0;
  background: transparent;
  border-radius: 0 0 8px 8px;
  overflow-x: auto; /* Enables horizontal scrolling */
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For IE 10 */
  gap: 8px;
}

.thumbnails::-webkit-scrollbar {
  display: none; /* Hide scrollbar for a cleaner look */
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
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }
}
</style>

<script>
let slideIndex = 0;
let autoPlay = false;
let autoPlayInterval;
const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelector('.thumbnails'); // This targets the .thumbnails container
const thumbnailImages = document.querySelectorAll('.thumbnail');
const playButton = document.querySelector('.play');

// Function to display the current slide and update active thumbnails
function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === n);
  });
  thumbnailImages.forEach((thumb, i) => {
    thumb.classList.toggle('active', i === n);
  });
}

// Function to change slide by the given step
function moveSlide(step) {
  slideIndex = (slideIndex + step + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Function to jump to a specific slide
function currentSlide(n) {
  slideIndex = n;
  showSlide(slideIndex);
}

// Function to toggle autoplay functionality
function togglePlay() {
  autoPlay = !autoPlay;
  playButton.innerHTML = autoPlay ? "&#10074;&#10074;" : "&#9658;"; // Pause/Play symbols
  if (autoPlay) {
    autoPlayInterval = setInterval(() => moveSlide(1), 2500);
  } else {
    clearInterval(autoPlayInterval);
  }
}

// Function to handle thumbnail hover and scrolling
function handleThumbnailHover(event) {
  const thumbnailsWidth = thumbnails.scrollWidth;
  const containerWidth = thumbnails.offsetWidth;
  const mouseX = event.clientX - thumbnails.getBoundingClientRect().left;

  // Determine the scroll direction based on mouse position
  if (mouseX < containerWidth / 3) {
    // Mouse is on the left side - scroll left
    thumbnails.scrollLeft -= 30; // Adjust this number to control scroll speed
  } else if (mouseX > 2 * containerWidth / 3) {
    // Mouse is on the right side - scroll right
    thumbnails.scrollLeft += 30; // Adjust this number to control scroll speed
  }
}

// Attach event listener to detect mouse movements over thumbnails
thumbnails.addEventListener('mousemove', handleThumbnailHover);

// Initialize the first slide
showSlide(slideIndex);
</script>