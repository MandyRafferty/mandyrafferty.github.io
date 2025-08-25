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
    <img src="/images/jewelrybox-CAD1.png" alt="CAD model of closed jewelry box" style="width: 90%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
    <img src="/images/jewelrybox-CAD2.png" alt="CAD model of jewelry box opened" style="width: 90%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />
  </div>
</div>

<!-- Section 3: Poster -->
<!-- <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 my-12">
  <div class="lg:col-span-2 prose prose-lg max-w-none">
    <h2>Coffee Cup Product Flyer</h2>
  </div>
  <div class="text-center">
    <a href="/images/ps1 Poster WingWrap.jpg" class="inline-block">
      <img src="/images/ps1 Poster WingWrap.jpg" alt="Cofee cup product poster" class="w-48 h-auto object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"/>
    </a>
  </div>
</div> -->

<!-- <div class="slideshow">
  <div class="slides">
    <div class="slide active">
      <img src="/images/DIY Jewelry Box/jewelrybox-sketches.jpg" alt="Image 1">
    </div>
    <div class="slide">
      <img src="/images/DIY Jewelry Box/jewelrybox-prototype.jpg" alt="Image 2">
    </div>
    <div class="slide">
      <img src="/images/DIY Jewelry Box/jewelrybox-CAD.png" alt="Image 3">
    </div>
    <div class="slide">
      <img src="/images/DIY Jewelry Box/jewelrybox-finalsketch.jpg" alt="Image 4">
    </div>
  </div> -->

  <!-- <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
  <button class="next" onclick="moveSlide(1)">&#10095;</button> -->
  
  <!-- Thumbnail navigation -->
  <!-- <div class="thumbnails">
    <img src="/images/DIY Jewelry Box/jewelrybox-sketches.jpg" alt="Thumbnail 1" onclick="currentSlide(0)" class="thumbnail active">
    <img src="/images/DIY Jewelry Box/jewelrybox-prototype.jpg" alt="Thumbnail 2" onclick="currentSlide(1)" class="thumbnail">
    <img src="/images/DIY Jewelry Box/jewelrybox-CAD.png" alt="Thumbnail 3" onclick="currentSlide(2)" class="thumbnail">
    <img src="/images/DIY Jewelry Box/jewelrybox-finalsketch.jpg" alt="Thumbnail 4" onclick="currentSlide(3)" class="thumbnail">
  </div>
</div> -->

<!-- <style>
.slideshow {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px;
  background: var(--color-surface);
}

.slide {
  display: none;
  text-align: center;
}

.slide.active {
  display: block;
}

.slide img {
  width: 100%;
  height: auto;
  display: block;
  vertical-align: top;
  border-radius: 8px 8px 0 0;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.5rem 1rem;
  color: white;
  background: rgba(0,0,0,0.5);
  border: none;
  border-radius: 4px;
  font-size: 1.5rem;
  user-select: none;
  transition: background 0.3s ease;
}

.prev:hover, .next:hover {
  background: rgba(0,0,0,0.7);
}

.prev { left: 10px; }
.next { right: 10px; }
.thumbnails {
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 8px 0px;
  background: var(--color-surface, #fff);
  border-radius: 0 0 8px 8px;
}

.thumbnail {
  width: 60px;
  height: 45px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s ease, transform 0.2s ease;
  border: 2px solid transparent;
}

.thumbnail:hover {
  opacity: 0.8;
  transform: scale(1.05);
}

.thumbnail.active {
  opacity: 1;
  border-color: #007bff;
  transform: scale(1.1);
}

body {
  margin: 0;
  padding: 0;
  background: #f5f5f5;
}

.slideshow {
  margin-top: 0 !important;
}
</style>

<script>
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnail');

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === n) slide.classList.add('active');
  });
  
  thumbnails.forEach((thumb, i) => {
    thumb.classList.remove('active');
    if (i === n) thumb.classList.add('active');
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

showSlide(slideIndex);
</script> -->