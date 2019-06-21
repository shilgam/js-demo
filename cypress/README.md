# Cypress e2e testing framework

## Prerequisites

1. Docker and docker-compose installed

## Usage

1. Clone the repo

1. cd into `cypress` dir

1. Download & build docker images

        $ docker-compose build

1. Run test suite

        $ docker-compose run --rm cypress

1. Clean up containers after tests

        $ docker-compose down

## More information

* [Running full interactive Cypress Test Runner using docker](https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/) ([repo](https://github.com/bahmutov/demo-docker-cypress-included))
