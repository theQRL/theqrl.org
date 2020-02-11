<ul class="contributors list">
  {% assign users = site.data.contributions | sort:'contributions' | reverse %}
  {% for user in users %}

      <li>
        <a href="https://github.com/{{ user.login }}">
        <img data-src="https://avatars3.githubusercontent.com/u/{{ user.id }}?s=26" alt="{{user.login}} picture">
        <span>{{ user.login }}</span>
        </a>
      </li>
  {% endfor %}
</ul>
<p>7,888 total contributions between {{ users | size }} contributors over 29 repositories</p>
