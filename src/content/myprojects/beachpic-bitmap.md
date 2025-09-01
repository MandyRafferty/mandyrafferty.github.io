---
title: "Beach Photo Bitmap"
date: "2025-06-12"
featured: false
project_num: 11
type: "personal"
description: "Portable, handheld device that allows surgeons to measure bone density of patients cost effectively."
excerpt: "Turned a childhood photo into an engineered Father's Day gift."
categories: ["Laser Engraving", "Inkscape"]
tags: ["Inkscape"]
thumbnail: '/images/Beach Engraved/bitmap_IMG_3254.jpeg'
---
## Inkscape
Turning the original photo into a bitmap for engraving using Inkscape.
<div style="display: flex; justify-content: center; margin: 3rem 0;">
  <video 
    src="/videos/bitmap-inkscape.mp4" 
    muted
    loop
    autoplay
    style="width: 70%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
    class="rounded-lg shadow-md"
  >
    Your browser does not support the video tag.
  </video>
</div>

## Photo Transformation
<div class="photo-row">
  <figure>
    <img src="/images/Beach Engraved/SDC10760.jpg" alt="Original photo">
    <figcaption>Original photo</figcaption>
  </figure>
  <figure>
    <img src="/images/Beach Engraved/IMG_3254.jpeg" alt="B&W photo">
    <figcaption>Black and white photo</figcaption>
  </figure>
  <figure>
    <img src="/images/Beach Engraved/bitmap_IMG_3254.jpeg" alt="Bitmap">
    <figcaption>Bitmap</figcaption>
  </figure>
</div>

## Final Product
Product was engraved and cut with an Epilog Fusion Pro laser cutter using 1/4" birch plywood.
<div class="my-12 text-center">
  <a href="/images/Beach Engraved/final-engraving.jpg" class="inline-block">
    <img src="/images/Beach Engraved/final-engraving.jpg" alt="Final product" class="rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity" style="width: 30%; height: auto;" />
  </a>
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

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('my-video');
    video.playbackRate = 0.5; // 0.5 = half speed, 2.0 = double speed, 1.0 = normal
  });
</script>