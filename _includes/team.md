
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
            <div class="lazy-bg" data-src="/assets/team/{{ team.image }}"></div>
          </div>
          <div class="name">{{ team.title }}</div>
        </div>  
        {% endif %}

      {% endfor %}
  </div>
