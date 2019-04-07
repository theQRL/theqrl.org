{% 
assign tracked = "" 
assign total_contributions = ""
assign unique_contributions = ""
%}


{% for contributor in site.data.contributors %}
  {% if tracked contains contributor.login %}

  {% else %}
    {% if contributor.contributions >= 3 %}
      {% assign tracked = tracked | append: contributor.login | append:":" | append:contributor.id | append: ","%}
    {% endif %}
  {% endif %}
{% endfor %}


{% assign contributors = tracked | replace:',,',',' | replace:',,',',' | split:',' %}

<ul class="contributors list">
  {% for contributor in contributors %}
    {% assign user = contributor | split:':' %}
    {% if user[0] %}
      <li>
        <a href="https://github.com/{{ user[0] }}">
        <img src="https://avatars3.githubusercontent.com/u/{{ user[1] }}?s=26">
        <span>{{ user[0] }}</span>
        </a>
      </li>
    {% endif %}
  {% endfor %}
</ul>