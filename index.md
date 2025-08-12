---
layout: default
title: Alig Lab
---

<section class="hero">
  <div class="hero-inner">
    <h1>The Alig Lab</h1>
    <p>Liquid biopsy and precision medicine in lymphoma</p>
  </div>
</section>

<section id="about" class="py-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-9">
        <h2 class="text-center">About us</h2>
        <p class="mt-4" style="text-align: justify;">
          The Alig Lab advances liquid biopsy and precision medicine to better understand, monitor, and treat lymphoma. 
          Based at the West German Cancer Center and NCT West, University Hospital Essen, we develop ultrasensitive 
          ctDNA technologies to improve diagnosis, disease monitoring, and treatment strategies. We integrate liquid 
          biopsy–based genomic profiling, computational analysis, and pre-clinical functional models to decipher 
          molecular heterogeneity, track clonal evolution, and detect minimal residual disease, aiming to uncover 
          resistance mechanisms and guide individualized patient care.
        </p>
      </div>
    </div>
  </div>
</section>

<section id="team" class="py-5 bg-body">
  <div class="container text-center">
    <h2>Team</h2>

    {%- assign leader = site.members | where: "role", "Group Leader" -%}
    <div class="row justify-content-center mb-4">
      {%- for person in leader -%}
      <div class="col-6 col-md-4 col-lg-3">
        <div class="card h-100">
          {%- if person.image -%}
          <img class="card-img-top" src="{{ person.image | relative_url }}" alt="{{ person.name }}">
          {%- endif -%}
          <div class="card-body">
            <h5 class="card-title">{{ person.name }}</h5>
            <p class="card-text small text-muted">{{ person.role }}</p>
            <div class="d-flex justify-content-center gap-3 mt-2">
              {%- if person.email -%}
              <a href="mailto:{{ person.email }}" title="Email"><i class="bi bi-envelope-fill fs-5"></i></a>
              {%- endif -%}
              {%- if person.linkedin -%}
              <a href="{{ person.linkedin }}" target="_blank" title="LinkedIn"><i class="bi bi-linkedin fs-5"></i></a>
              {%- endif -%}
              {%- if person.twitter or person.X -%}
              <a href="{{ person.twitter | default: person.X }}" target="_blank" title="X"><i class="bi bi-twitter-x fs-5"></i></a>
              {%- endif -%}
            </div>
          </div>
        </div>
      </div>
      {%- endfor -%}
    </div>

    {%- assign others = site.members | where_exp: "p", "p.role != 'Group Leader'" | sort: "order" -%}
    <div class="row g-3 justify-content-center">
      {%- for person in others -%}
      <div class="col-6 col-md-4 col-lg-3">
        <div class="card h-100">
          {%- if person.image -%}
          <img class="card-img-top" src="{{ person.image | relative_url }}" alt="{{ person.name }}">
          {%- endif -%}
          <div class="card-body">
            <h5 class="card-title">{{ person.name }}</h5>
            <p class="card-text small text-muted">{{ person.role }}</p>
            <div class="d-flex justify-content-center gap-3 mt-2">
              {%- if person.email -%}
              <a href="mailto:{{ person.email }}" title="Email"><i class="bi bi-envelope-fill fs-5"></i></a>
              {%- endif -%}
              {%- if person.linkedin -%}
              <a href="{{ person.linkedin }}" target="_blank" title="LinkedIn"><i class="bi bi-linkedin fs-5"></i></a>
              {%- endif -%}
              {%- if person.twitter or person.X -%}
              <a href="{{ person.twitter | default: person.X }}" target="_blank" title="X"><i class="bi bi-twitter-x fs-5"></i></a>
              {%- endif -%}
            </div>
          </div>
        </div>
      </div>
      {%- endfor -%}
    </div>
  </div>
</section>

<section id="publications" class="py-5">
  <div class="container">
    <div class="row justify-content-start">
      <div class="col-lg-9 offset-lg-1">
        <h2>Selected publications</h2>
        <ul class="list-unstyled">
          {% for pub in site.data.selected_pubs %}
          <li class="mb-3">
            {% if pub.url %}<a href="{{ pub.url }}" target="_blank" rel="noopener">{% endif %}
              {{ pub.title }}
            {% if pub.url %}</a>{% endif %}
            <div class="small text-muted">
              {%- assign txt = pub.authors_display -%}
              {%- if txt contains " and " -%}
                {%- assign parts = txt | split: " and " -%}
                {%- assign first_part = parts[0] | replace: "*", "" -%}
                {%- assign second_rest = parts[1] | split: " et al." -%}
                {%- assign second_part = second_rest[0] | replace: "*", "" -%}
                {{ first_part }}* and {{ second_part }}* et al. · {{ pub.venue }} · {{ pub.year }}
              {%- elsif txt contains "Sworder BJ" or txt contains "Esfahani MS" or txt contains "Kurtz DM" -%}
                {%- assign name_only = txt | replace: "*", "" | replace: " et al.", "" -%}
                {{ name_only }}* et al. · {{ pub.venue }} · {{ pub.year }}
              {%- else -%}
                {{ txt }} · {{ pub.venue }} · {{ pub.year }}
              {%- endif -%}
            </div>
          </li>
          {% endfor %}
        </ul>

      <h5 class="mt-4">All Publications</h5>
      <p>
        <a href="{{ site.scholar_url }}" target="_blank" rel="noopener">
          <i class="bi bi-mortarboard-fill me-1"></i>Google Scholar
        </a>
        <span class="text-muted mx-2">|</span>
        <a href="{{ site.ncbi_url }}" target="_blank" rel="noopener">
          <i class="bi bi-journal-text me-1"></i>NCBI My Bibliography
        </a>
      </p>
    </div>
  </div>
  </div>
</section>


<section id="funding" class="py-5">
  <div class="container">
    <!-- Heading aligned like Contact/Publications -->
    <h2>Funding</h2>
    
    <!-- Logo centered independently -->
    <div class="row">
      <div class="col-12 text-center">
        <img src="{{ '/assets/img/max-eder.png' | relative_url }}"
             alt="Funding Organization Logo"
             class="img-fluid d-inline-block"
             style="max-height: 120px;">
      </div>
    </div>

    <!-- Text block -->
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <p class="mt-4" style="text-align: justify;">
          Was für funding, kleiner text?
        </p>
      </div>
    </div>
  </div>
</section>





<section id="contact" class="py-5">
  <div class="container">
    <div class="row justify-content-start">
      <div class="col-lg-9 offset-lg-1">
        <h2>Contact</h2>
        <address class="mb-3">
          West German Cancer Center<br>
          Department of Hematology and Stem Cell Transplantation<br>
          University Hospital Essen<br>
          Hufelandstrasse 55<br>
          D-45147 Essen<br>
          <a href="mailto:{{ site.email }}">{{ site.email }}</a>
        </address>
      </div>
    </div>
  </div>
</section>

