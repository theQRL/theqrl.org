---
layout: default
title: In the media
permalink: /media/
---

<div class="wrapper hero">
  <div class="particles">
     <div class="magnifyingglass" 
      data-attach-class=".wrapper.hero" 
      data-attach-position="center center" 
      data-child-anchor="bottom left" 
      data-offset-left="300" 
      data-offset-top="250"
      data-scale="1.1">
    </div>
    <div class="bw1000" 
      data-attach-class=".wrapper.events" 
      data-attach-position="top right" 
      data-child-anchor="bottom right" 
      data-offset-left="50" 
      data-offset-top="-110"
      data-scalex="-1"
      data-scale="1">
    </div>
  </div>
  <div class="grid">
    <div class="w12">
      <h1>In the Media</h1>
      <p>Mentions, Quantum Computing news, Education, and other related matters</p>
    </div>
  </div>
</div>


<div class="wrapper media">
	<div class="grid">
		<div class="w12">

      <div class="grid options">
        <div class="w6">
          <ul id="filteringModeSingle">
            <li data-filter="all">All</li>
            <li data-filter="quantum-news">Quantum News</li>
            <li data-filter="mentions">Mentions</li>
          </ul>
        </div>
        <div class="w6 filterSearch">
          <input type="text" name="search" placeholder="Search..." data-search>          
        </div>
      </div>
      

      <ul class="filtr-container">
        {% assign sorted = site.media | sort: 'date' | reverse %}
        {% for item in sorted %}
          <li class="filtr-item" data-category="{{ item.tags | join:"," }}" data-sort="value">
            <a href="{{ item.link }}" target="_blank" class="media type-{{ item.media }}">
              <span class="date"> 
                <span class="month">{{ item.date | date: '%b' }}</span>
                <span class="day">{{ item.date | date: '%d' }}</span>
              </span>
              <h3>{{ item.title }}</h3>

              <span class="categories">
                Tags: <span>{{ item.tags | join:", " }}</span>, 
                Media: <span>{{ item.media }}</span></span>
              <span class="description">
                {{ item.content }}
              </span>
            </a>
          </li>
        {% endfor %}
      </ul>
      

		</div>
	</div>
</div>
