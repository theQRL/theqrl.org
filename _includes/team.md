
  <div class="grid team-members">
      {% assign membership = site.team | sort:'title' | reverse | sort: 'hierarchy' | reverse %}
      {% for team in membership limit:100 %}
        {% assign show_team = true %}

        {% if include.team_members %}
          {% assign team_member = team.id | replace:'/team/','' %}
          {% if include.team_members contains team_member %}
            {% assign show_team = true %}
          {% else %}
            {% assign show_team = false %}
          {% endif %}
        {% endif %}

        {% if show_team == true %}
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
        {% endif %}

      {% endfor %}
  </div>
