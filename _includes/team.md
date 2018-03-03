
  <div class="grid team-members">
      {% assign membership = site.team | sort: 'hierarchy' | reverse %}
      {% for team in membership limit:include.members %}
      <div>
        <div class="image">
        <div style="background-image:url('/assets/team/{{ team.image }}');"></div>
        </div>
        <div class="name">{{ team.title }}</div>
        <div>
          <div class="role">{{ team.role }}</div>
          <div class="position">{{ team.position }}</div>
        </div>
        <div class="profile">
          <!-- <a href="{{ team.url }}" class="cta">View Profile</a> -->
        </div>
        <div class="social"></div> 
      </div>
      {% endfor %}
  </div>
