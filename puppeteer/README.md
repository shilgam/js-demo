# Puppeteer

## Prerequisites

1. Docker and docker-compose installed
1. For Mac: [XQuartz](https://www.xquartz.org/) X11 server installed - to see chrome in headful mode ([instructions](https://sourabhbajaj.com/blog/2017/02/07/gui-applications-docker-mac/))

## Usage

1. Clone the repo

1. cd into `puppeteer` dir

1. Run tests

    * in headless mode

            $ docker-compose run --rm tests

    * in interactive mode

        1. Start XQuartz

                $ open -a XQuartz

        1. Allow the Host Machine to access to an X server

                $ IP=$(ipconfig getifaddr en0)
                $ xhost + $IP


        1. Run tests in headful chrome inside a container

                $ DISPLAY=$IP:0  # to instruct browser where to send their GUI output
                $ docker-compose -f docker-compose.yml -f docker-compose-gui.yml run --rm tests

1. Clean up containers after tests

        $ docker-compose down
