---
title: "More Jewelry"
date: "2024-03-17"
featured: false
project_num: 20
type: "personal"
description: "A collection of handmade jewelry."
excerpt: "A collection of handmade jewelry."
categories: ["Jewelry Making"]
tags: ["Crafts"]
thumbnail: '/images/Necklaces/brown-hoops.jpg'
---
## Overview
Here is a handful of some of the handmade jewelry pieces that I have made.

<div class="photo-row" style="grid-template-columns: repeat(3, 1fr);">
  <figure>
    <img src="/images/Necklaces/random-necklace.jpg" alt="Necklace 1">
  </figure>
  <figure>
    <img src="/images/Necklaces/citrine-necklace.jpg" alt="Citrine necklace">
  </figure>
  <figure>
    <img src="/images/Necklaces/brown-hoops.jpg" alt="Brown beaded hoops">
  </figure>
  <figure>
    <img src="/images/Necklaces/amber-necklace.jpg" alt="Brown beaded hoops">
  </figure>
  <figure>
    <img src="/images/Necklaces/multi-color-pearl-necklace.jpg" alt="Brown beaded hoops">
  </figure>
  <figure>
    <img src="/images/Necklaces/blue-necklace.jpg" alt="Brown beaded hoops">
  </figure>
  <figure>
    <img src="/images/Necklaces/pink-yellow-beaded-necklace.jpg" alt="Brown beaded hoops">
  </figure>
  <figure>
    <img src="/images/Necklaces/simple-greyscale-necklace.jpg" alt="Brown beaded hoops">
  </figure>
  <figure>
    <img src="/images/Necklaces/purple-scheme-necklace.jpg" alt="Brown beaded hoops">
  </figure>
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
  height: 350px;
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