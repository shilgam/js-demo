# Capybara tests

Demo: Capybara acceptance test framework with Selenium Webdriver

## Prerequisites

1. Docker and docker-compose installed

1. [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/) installed - to set up VNC connection with browser session

## Usage

1. Clone the repo

1. cd into `capybara` dir

1. Build the Docker image

        $ docker-compose build

1. Run test suite

        $ docker-compose run --rm app rspec             # headful mode
        $ HEADLESS=1 docker-compose run --rm app rspec  # headless mode

    Notes:
    - Selenium Grid URL: http://0.0.0.0:4444/
    - To visually see what the browser is doing you will need to create connection to VNC Server `localhost:5900`


1. Clean up containers after tests

        $ docker-compose down
