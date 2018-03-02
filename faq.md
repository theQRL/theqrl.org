---
layout: default
title: FAQ
permalink: /faq/
---

<div class="wrapper hero">
  <div class="grid">
    <div class="w12">
      <h1>FAQ's</h1>
      <p>These are some Frequently asked questions from the community.</p>
    </div>
  </div>
</div> 


<div class="wrapper">
	<div class="grid w12">
		<div class="filter">
			{% comment %}			
			<div class="btn-group" data-filter="faqs">
				Filter
				<label class="btn"><input type="radio" name="frequency" value="popular">popular</label>
				<label class="btn"><input type="radio" name="frequency" value="all" checked="checked">all</label>
			</div>

			<div class="btn-group" data-filter="faqs">
				Toggle
				<label class="btn"><input type="radio" name="difficulty" value="advanced" checked="checked">Advanced</label>
				<label class="btn"><input type="radio" name="difficulty" value="basics">Basic</label>
			</div>
			{% endcomment %}
			<div class="grid w12">
				<div>

					<input type="text" placeholder="Filter FAQ list">	
					<div class="filter-results"></div>								
				</div>

			</div>

	    </div>
	    <div>
	    	<div class="faqs grid collapse no-padding w12">
				{% assign faqs = site.faq | sort:'hierarchy' | reverse %}
				{% for faq in faqs %}
				<div data-tags="all basic">
					<div class="question grid no-padding">
						<div>
							<h2>
								{{ faq.title }}
							</h2>							
						</div>

						<div class="arrow">
							<div></div>				
						</div>
					</div>
					<div class="answer">
						{{ faq.content }}
						<div style="display:none;">
							{{ faq.search }}
						</div>
					</div>
				</div>
				{% endfor %}	    
	    	</div>
	    </div>
	</div>
</div>