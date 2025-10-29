---
title: "Ukelele"
date: "2019-11-13"
featured: false
project_num: 39
type: "personal"
description: "Constructed and painted a ukelele."
excerpt: "Constructed and painted a ukelele."
categories: ["Fabrication"]
tags: ["Crafts"]
thumbnail: '/images/ukelele-painted.jpg'
---
## Spongebob-Themed Ukelele
I created and learned how to play ukelele using the one that I made!
<div class="photo-row">
  <figure>
    <img src="/images/ukelele-constructing.jpg" alt="In progress">
    <figcaption>In progress</figcaption>
  </figure>
  <figure>
    <img src="/images/ukelele-painted.jpg" alt="Ukelele minus strings">
    <figcaption>Finished product minus strings</figcaption>
  </figure>
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
  width: 100%;
  height: 550px;
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