# docker crash course

The session will be hands-on, everyone bring his/her laptop.

Goal: to help anyone to run his projects using docker.

Agenda:
5 minutes - docker basics (what's the value, the use-cases and some docker terminology).
5 minutes - demo of setting up YPLabs and deploying to mesos.
20 minutes - attendees will setup and run YPLabs on their laptop.

Outcome: Attendies will get familiar with docker and will be able to use it for their own projects.

intro
-----
use-cases
  setup a project
  deploy to production

value
  fast dev cycle
  fast deploy
  quality (dev env identical to prod)
  all team can take part (since it's trivial to setup a project)
  laptop is clean (isolation)
  easy to switch projects
  entrepreneur mindset - autonomous teams
  micro services
  immutable infrastructure
  decrease risk of change

terminology
  image - template for container
  container - chroot on steroids (isolated storage, networking, mounts, etc)
  registry - a server that stores images
  push - upload image to a repository
  pull - download image from a repository
  commit - create new image

  build                                  # Dockerfile -> image
  docker build -t web_server .           # create an image

  run                                    # image -> container
  docker run web_server web_server       # create a container

demo
----
make docker
ssh labs
sudo docker tag 9360a67aabce ypcom/labs_db
sudo docker push ypcom/labs_db

hands-on
--------
Attendees set up YPLabs on their laptops
curl -sSL http://0.0.0.0:8000/setup | sudo sh

before the session
------------------
Please install docker before the session. It's available on all platforms - https://docs.docker.com/installation/#installation
You know it's working when running 'Docker' prints the help. If you have any issues or questions email me - ogolan@yp.com.

## notes

There's no virtualization going on at all, it's cgroups and namespaces.
containers share the same kernel with the host OS.
CentOS and Ubuntu are not different operating systems. They are just different collections of packages that use Linux (the OS)
Linux = OS
Debian/Ubuntu/CentOS = distros
Docker starts up a process, and it uses cgroups, namespaces, etc to give that process disks, network, etc.
The fact that the process wakes up and sees CentOS or Debian or whatever around is has to do with which "disk" gets handed to it.

Imagine you work at Walmart. Regular processes can walk around the store and see all the things you sell.
Docker lets you put somebody in the Vegetable isle and prevent them from leaving it.
As far as that process knows, there is only the vegetable isle, and your store is just a vegetable isle.
If you asked that process what the stores sells, it would tell you "well it clearly sells vegetables"
does the vegetable section have its own checkout lanes?
No, if the store owner wants that process to be able to get vegetables in and out of the store, they need to set up an aisle forward with the -p flag

vegetable section = chroot / container

cgroups allow you to set resource limits for processes, and docker has options to control cgroups



on ssvm
sudo yum install docker-io

git revert --no-commit a7a140cb82e3e4e817a59429fb31456b247a3843; git reset
cp -r labs /tmp
cd /tmp && tar czf labs.tar.gz labs
put on desktop or mogway
setup: wget -O- http://0.0.0.0:8000/labs.tar.gz | tar xzf - && cd labs
curl -sSL http://0.0.0.0:8000/setup | sudo sh

git-export <branch-name>
