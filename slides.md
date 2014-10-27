# Intro to Docker

image of a whale with containers

---

# History

* PAAS
* Heroku
* DotCloud -> Docker

---

# Containers

* chroot on steroids
* isolation of filesystem, network, mounts etc
* Walmart metaphor

---

# Containers vs VMs

* isolated process vs isolated OS
* uses the host's kernel vs got it's own kernel
* low I/O over head (disk and network) vs high overhead

---

# use-cases

* development
* ops/deployment

---

# value

Development

* fast dev cycle
* quality (dev env identical to prod)
* all team can take part (since it's trivial to setup a project)
* laptop is clean (isolation)
* easy to switch projects
* entrepreneur mindset - autonomous teams
* micro services

ops

* fast deploy
* immutable infrastructure
* decrease risk of change

---

# terminology

* image     - template for container
* container - chroot on steroids (isolated storage, networking, mounts, etc)
* registry  - a server that stores images
* push      - upload image to a repository
* pull      - download image from a repository
* build     - Dockerfile -> image
* run       - image -> container

Examples

```
docker build -t web_server .             # create an image, name it web_server
docker run --name web_server web_server  # create a container, name it web_server and use the web_server image
```

---

# Let's run our first container

```
sudo docker run private.registry.com:5000/labs_webserver
docker run -d -p 80:2368 dockerfile/ghost
```

---

