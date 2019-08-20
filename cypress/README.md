# Cypress e2e testing framework

## Prerequisites

1. Docker and docker-compose installed
1. [XQuartz](https://www.xquartz.org/) X11 server installed - to see Cypress in interactive mode

## Usage

1. Clone the repo

1. cd into `cypress` dir

1. Run tests

    * in headless mode

        1. launch tests

                $ docker-compose -f ../app/docker-compose.yml -f docker-compose.yml run --rm tests

        1. clean up containers after tests

                $ docker-compose -f ../app/docker-compose.yml -f docker-compose.yml down

    * in interactive mode

        1. Set up X11 server on the host machine, for example using [XQuartz](https://www.xquartz.org/) following the [Running GUI applications using Docker for Mac](https://sourabhbajaj.com/blog/2017/02/07/gui-applications-docker-mac/)

        1. Start XQuartz

                $ open -a XQuartz

        1. Set the `IP` variable and allow X11 server to accept incoming connections from that network address

                $ IP=$(ipconfig getifaddr en0)
                $ xhost + $IP

        1. Instruct browser where to send their GUI output

                $ DISPLAY=$IP:0

        1. Open Cypress

                $ docker-compose -f ../app/docker-compose.yml -f docker-compose.yml -f docker-compose-gui.yml run --rm tests
            You should see Cypress open and be able to run tests, change files, see tests rerun.

        1. Clean up containers after tests

                $ docker-compose -f ../app/docker-compose.yml -f docker-compose.yml down


## More information

* [Running full interactive Cypress Test Runner using docker](https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/) ([repo](https://github.com/bahmutov/demo-docker-cypress-included))
