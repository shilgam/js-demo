# Capybara tests

Demo: Capybara acceptance test framework with Selenium Webdriver

## Prerequisites

1. Docker and docker-compose installed

1. [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/) installed - to set up VNC connection with browser session

## Usage

1. Clone the repo

1. cd into `capybara` dir

1. Download & build docker images

        $ docker-compose -f ../app/docker-compose.yml -f docker-compose.yml build

1. Run test suite

    * **In headless mode**

        1. Run tests

                $ docker-compose -f ../app/docker-compose.yml -f docker-compose.yml run --rm tests

        1. Clean up containers after tests

                $ docker-compose -f ../app/docker-compose.yml -f docker-compose.yml down

    * **In interactive mode**

        1. Run tests

                $ docker-compose -f ../app/docker-compose.yml -f docker-compose.yml -f docker-compose-gui.yml run --rm tests

        1. Create connection to VNC Server `localhost:5900` to visually see what the browser is doing

        1. Clean up containers after tests

                $ docker-compose -f ../app/docker-compose.yml -f docker-compose.yml down

## Notes

- Selenium Grid accessible via URL: http://0.0.0.0:4444/
