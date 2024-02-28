# Tell us about one of your commercial projects with Vue.js.

## Project Overview

The project is a B2B, cloud based, back-office solution for transport agencies called [The Hub](https://www.masabi.com/justride-hub/). Our biggest client is the MTA transport agency in New York that owns the trains and metro network in New York.

It gave the agencies real-time reporting and analytics, customer service tools (refunds, ticket management, rider history, etc), user administration, travel fare updates, real-time vehicle tracking, fraud prevention and more. The new features were written in Vue.js where we spent most of our time. A smaller section of the app was written in AngularJS which we gradually migrated to the latest Vue.js.

My initial role was an individual contributor, working in a team of 3 FE developers, 2 BE developers and 1 QA where I developed and extended many of the above features. Some worth mentioning are the real-time vehicle tracking (WebSockets and GoogleMaps), user live search (ElasticSearch), created a reusable component library (VueDS).

I later became the tech lead and engineering manager of the team where I continued to have hands-on coding 50% of my time while leading the technical decisions, organising and delegating work to meet deadlines and pastoral care of my team.

## Technical Challenges and Solutions

Some challenges that we faced were: fragmented UI and design across the products, performance, accesibility and old technologies.
I led and developed solutions for the above.

- I used VueDS to kickstart a design system for reusable components which is now successfully used across company products.
- Improved performance using Vue Router lazy loading to lazily load routes and enable code splitting. Opimistically updating sections of the app where the result was known and APIs were slower.
- Set examples to improve accessible features and integrated with Pa11y CI to automate accessibility testing in our CI/CD pipelines.
- Created a plan for the migration from old tech (AngularJS) to Vue.js. The most important lesson learned here is that when faced with a huge task it's important to break it down and plan it for gradual non-blocking iterations.

## Collaboration and Teamwork

I regularly collaborated with in-house Product Owners and Designers on how to best implement and tackle features. This involved me suggesting the best approaches for re-usability of existing components, pros and cons of different approaches, and proposing technical solutions for new features.

## Outcome and Impact

Our mission and goals were driven by identifing our clients needs for new features along with market research. The most successful features combined both of these aspects where it increased the happines of our existing clients while also bringing us ahead in the market with our new offering.
