# Docker Crash Course

![docker crash](website/pictures/intro.png)

Docker is everywhere but nobody knows what to do with it.
The goal of this session is to provide you with everything you need to get started.

We'll discuss and demonstrate the following:

* What is Docker?
* What does docker solve?
* How to use it for development work flow?
* How to use it for deployment/production work flow?

Let's skip the boring concepts - we will look at a real-world Node.js application that uses multiple Docker containers.


## References

* Strangler Application:  http://martinfowler.com/bliki/StranglerApplication.html
* Docker Ecosystem series:  https://www.digitalocean.com/community/tutorial_series/the-docker-ecosystem
* Conway Law:
http://www.thoughtworks.com/insights/blog/demystifying-conways-law
* Inverse Conway Maneuver: http://www.thoughtworks.com/radar/techniques
* http://12factor.net/build-release-run
* Deploy with Deis: https://asciinema.org/a/17792
* Scale App with Deis: https://asciinema.org/a/17793

## Run this presentation

    docker run -p 3000:80 sanguinebio/docker-crash-course

open [http://localhost:3000](http://localhost:3000)

## Push this presentation to Dockerhub

    bin/push

## Deploy with Deis

    bin/deploy
