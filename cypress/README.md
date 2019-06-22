# Cypress e2e testing framework

## Prerequisites

1. Docker and docker-compose installed
1. [XQuartz](https://www.xquartz.org/) X11 server installed - to see Cypress in interactive mode

## Usage

1. Clone the repo

1. cd into `cypress` dir

1. Download & build docker images

        $ docker-compose build

1. Run Cypress in interactive mode

      ### Launch XQuartz app
      $ open -a XQuartz

      ### grab the IP of the host machine and add it to the allowed X11 hosts
      $ IP=$(ipconfig getifaddr en0)
      $ xhost + $IP

      ### set $DISPLAY env var to pass it to docker container
      $ DISPLAY=$IP:0
      $ docker-compose --file cypress/docker-compose.yml up --exit-code-from cypress

## More information

* [Running full interactive Cypress Test Runner using docker](https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/) ([repo](https://github.com/bahmutov/demo-docker-cypress-included))
