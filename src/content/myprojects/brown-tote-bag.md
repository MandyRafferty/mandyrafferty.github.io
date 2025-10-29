---
title: "Tote Bag from Thrifted Fabric"
date: "2022-10-02"
featured: false
project_num: 40
type: "personal"
description: "Simple tote bag created from thrifted fabric, made for a friend's birthday gift."
excerpt: "Simple tote bag created from thrifted fabric, made for a friend's birthday gift."
categories: ["Sewing"]
tags: ["Sewing", "Crafts"]
thumbnail: '/images/Brown Tote/brown-tote-thumbnail.jpg'
---

## Start vs Finish
<div class="photo-row">
  <figure>
    <img src="/images/Brown Tote/fabric.jpg" alt="Thrifted fabric">
  </figure>
  <figure>
    <img src="/images/Brown Tote/brown-tote-thumbnail.jpg" alt="Overview">
  </figure>
</div>

## Fabrication Process
Checkout the fabrication process for my first big sewing project!
<div class="slideshow">
  <div class="slides">
    <div class="slide active">
      <img src="/images/Brown Tote/fabric.jpg" alt="Image 1">
    </div>
    <div class="slide">
      <img src="/images/Brown Tote/cut-fabric.jpg" alt="Image 2">
      <div class="caption">Cut fabric into pieces</div>
    </div>
    <div class="slide">
      <img src="/images/Brown Tote/pocket.jpg" alt="Image 3">
      <div class="caption">Pocket for the inside</div>
    </div>
    <div class="slide">
    <video controls>
        <source src="/videos/video-inside.mp4" type="video/mp4">
        <source src="/videos/video-inside.mp4" type="video/webm">
        Your browser does not support the video tag.
    </video>
    </div>
    <div class="slide">
      <img src="/images/Brown Tote/straps.jpg" alt="Image 5">
      <div class="caption">Remade straps to be longer</div>
    </div>
    <div class="slide">
      <img src="/images/Brown Tote/tote-sewn.jpg" alt="Image 6">
      <div class="caption">Almost done, just need to box corners</div>
    </div>
    <div class="slide">
      <img src="/images/Brown Tote/brown-tote-final.jpg" alt="Image 7">
      <div class="caption">Inside of bag</div>
    </div>
    <div class="slide">
    <video controls>
        <source src="/videos/tote-completed-video.mp4" type="video/mp4">
        <source src="/videos/tote-completed-video.mp4" type="video/webm">
        Your browser does not support the video tag.
    </video>
    </div>
    <div class="slide">
      <img src="/images/Brown Tote/brown-tote-thumbnail.jpg" alt="Image 9">
      <div class="caption">Final product</div>
    </div>
  </div>

  <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
  <button class="next" onclick="moveSlide(1)">&#10095;</button>
  <button class="play" onclick="togglePlay()">&#9658;</button>

  <div class="thumbnails">
    <img src="/images/Brown Tote/fabric.jpg" alt="Thumbnail 1" onclick="currentSlide(0)" class="thumbnail active">
    <img src="/images/Brown Tote/cut-fabric.jpg" alt="Thumbnail 2" onclick="currentSlide(1)" class="thumbnail">
    <img src="/images/Brown Tote/pocket.jpg" alt="Thumbnail 3" onclick="currentSlide(2)" class="thumbnail">
    <img src="/images/Brown Tote/video-inside-thumbnail.png" alt="Image 4" onclick="currentSlide(3)" class="thumbnail">
    <img src="/images/Brown Tote/straps.jpg" alt="Image 5" onclick="currentSlide(4)" class="thumbnail">
    <img src="/images/Brown Tote/tote-sewn.jpg" alt="Image 6" onclick="currentSlide(5)" class="thumbnail">
    <img src="/images/Brown Tote/brown-tote-final.jpg" alt="Image 7" onclick="currentSlide(6)" class="thumbnail">
    <img src="/images/Brown Tote/tote-completed-vid-thumbnail.png" alt="Image 8" onclick="currentSlide(7)" class="thumbnail">
    <img src="/images/Brown Tote/brown-tote-thumbnail.jpg" alt="Image 9" onclick="currentSlide(8)" class="thumbnail">
  </div>
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
  width: 400px;
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