# Puppeteer

## Prerequisites

1. Docker and docker-compose installed

1. [XQuartz](https://www.xquartz.org/) X11 server installed - to see chrome in headful mode

## Usage

1. Clone the repo

1. cd into `puppeteer` dir

1. Download & build docker images

        $ docker-compose -f ../app/docker-compose.yml -f docker-compose.yml build

1. Run test suite

    * **In headless mode**

        1. Run tests

                $ docker-compose -f ../app/docker-compose.yml -f docker-compose.yml run --rm tests

        1. Clean up containers after tests

                $ docker-compose -f ../app/docker-compose.yml -f docker-compose.yml down

    * **In interactive mode**

        1. Set up X11 server on the host machine, for example using [XQuartz](https://www.xquartz.org/) following the [Running GUI applications using Docker for Mac](https://sourabhbajaj.com/blog/2017/02/07/gui-applications-docker-mac/)

        1. Start XQuartz

                $ open -a XQuartz

        1. Set the `IP` variable and allow X11 server to accept incoming connections from that network address

                $ IP=$(ipconfig getifaddr en0)
                $ xhost + $IP

        1. Instruct browser where to send their GUI output

                $ DISPLAY=$IP:0

        1. Run tests in headful chrome inside a container

                $ docker-compose -f ../app/docker-compose.yml -f docker-compose.yml -f docker-compose-gui.yml run --rm tests

        1. Clean up containers after tests

                $ docker-compose -f ../app/docker-compose.yml -f docker-compose.yml down

ADDITIONAL INFO:

* official guide for using Jest with Puppeteer: https://jestjs.io/docs/en/puppeteer
