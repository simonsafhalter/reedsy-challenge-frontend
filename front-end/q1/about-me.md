# 1. Tell us about one of your commercial projects with Vue.js.

## :joystick: Project Overview

The project is a B2B, SaaS, back-office solution for transport agencies called [The Hub](https://www.masabi.com/justride-hub/). The biggest client is the [MTA transport agency](https://new.mta.info/) in New York that owns the trains and metro network in New York.

The project gives the agencies:

- real-time reporting and analytics
- customer service tools (user search, refunds, ticket management, rider history, etc)
- user administration (different levels and access permissions of user roles)
- travel fare updates and scheduling
- real-time vehicle tracking
- fraud prevention

## :computer: Tech stack

- [Vue.js](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [VueDS](https://vueds.com/) for reusable UI components
- [Pinia](https://pinia.vuejs.org/) for state management
- [Jest](https://jestjs.io/) for unit testing
- [Cypress](https://www.cypress.io/) for E2E testing

The project was set up as a Single Page Vue.js Application backed by various REST APIs accross the company. Auth APIs for authentication, ElasticSearch APIs for customer search and event logs, Google Analytics APIs for analytics, WebSockets for real-time data, various custom synchronous and asynchronous APIs for other features like refunds, ticket management, etc.

## :smile: My role

My initial role was an individual contributor, working in a team of 3 FE developers, 2 BE developers and 1 QA where I developed and extended many of the above features.

Some features I built worth mentioning are:

- real-time vehicle tracking (WebSockets and GoogleMaps)
- user live search (front-end integration with ElasticSearch)
- created a reusable component library (VueDS).

I later became the tech lead and engineering manager of the team where I continued to have hands-on coding responsibilities while leading the technical decisions, organising and delegating work to meet deadlines and pastoral care of my team.

## :hammer: Technical Challenges and Solutions

Some challenges that we faced were: fragmented UI and design across the products, performance, accesibility and old technologies.
I led and developed solutions for the above.

- I used VueDS to kickstart a design system for reusable components which is now successfully used across company products.
- Improved performance using Vue Router to lazily load routes and enable code splitting. Opimistically updating sections of the app where the result was known and APIs were slower.
- Set examples to improve accessible features and integrated with Pa11y CI to automate accessibility testing in our CI/CD pipelines.
- Created a plan for the migration from old tech (AngularJS) to Vue.js. The most important lesson learned here is that when faced with a huge task it's important to break it down and plan it for gradual non-blocking iterations.

## :busts_in_silhouette: Collaboration and Teamwork

I regularly collaborated with in-house Product Owners and Designers on how to best implement and tackle features. This involved me suggesting the best approaches for re-usability of existing components, pros and cons of different approaches, and proposing technical solutions for new features.
