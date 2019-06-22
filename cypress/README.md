# Cypress e2e testing framework

## Prerequisites

1. Docker and docker-compose installed
1. [XQuartz](https://www.xquartz.org/) X11 server installed - to see Cypress in interactive mode

## Usage

1. Clone the repo

1. cd into `cypress` dir

1. Run tests

    1. in headless mode

            $ docker-compose --file docker-compose.yml run --rm cypress

    1. via Test Runner in interactive mode

        1. Set up X11 server on the host machine, for example using [XQuartz](https://www.xquartz.org/) following the [Running GUI applications using Docker for Mac](https://sourabhbajaj.com/blog/2017/02/07/gui-applications-docker-mac/)

        1. Set the `IP` variable and allow X11 server to accept incoming connections from that network address (see [docker-compose-open.yml](docker-compose-open.yml) for commands)

        1. Set the `DISPLAY` variable and pass it to the `docker-compose`

        1. Open Cypress in interactive mode

                $ docker-compose -f docker-compose.yml -f docker-compose-open.yml run --rm cypress
            You should see Cypress open and be able to run tests, change files, see tests rerun.




## More information

* [Running full interactive Cypress Test Runner using docker](https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/) ([repo](https://github.com/bahmutov/demo-docker-cypress-included))
