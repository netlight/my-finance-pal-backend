<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield-alex]][linkedin-url-alex]
[![LinkedIn][linkedin-shield-saadi]][linkedin-url-saadi]
[![LinkedIn][linkedin-shield-arda]][linkedin-url-arda]


<!-- PROJECT LOGO -->
<br />
<div align="center">
<h3 align="center">My Finance Pal</h3>

  <p align="center">
    Example Typescript Node.js webserivce showcasing best practices in software development
    <br />
    <a href="https://github.com/ungaralex/my-finance-pal-backend"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ungaralex/my-finance-pal-backend/issues">Report Bug</a>
    ·
    <a href="https://github.com/ungaralex/my-finance-pal-backend/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a standalone best practice web application developed for an engineering bootcamp
for a lecture at the Technical University of Munich.

Please bear in mind that also this is not a perfect version of an application as one would
imagine it running in production in a real world scenario. However, we tried to incorporate
as many best practices as possible, but as few as needed to get students, who are
on a beginner level, started. The goal is to have this is a toolbox for developing a state-of-the
art Node.js Typescript business application.

**Don't take everything we do in this application literally. It is important to also always think
for yourself and consider which of the presented techniques and frameworks you actually
need for your use case!**

At the end, we hope that this helps you on your journey on becoming an amazing software
developer and we hope you have fun exploring the universe of backend engineering :)

**Disclaimer: A lot of the standard Node.js/Express code was to some parts inspired, to some
copied over from [PracticaJS](https://github.com/practicajs/practica). Please have a look at their work and
examples as it gives you a great starting point and references when it comes to best practices
with Node.js development. Also have a look at the [Express Typescript Generator](https://www.npmjs.com/package/express-generator-typescript),
which we also used to create the initial setup of our app.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![NodeJs][Nodejs]][Node-url]
* [![Express.js][Expressjs]][Express-url]
* [![Typescript][Typescript]][Typescript-url]
* [![MongoDB][MongoDB]][Mongodb-url]
* [![Jest][Jest]][Jest-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

In order to be able to start the service locally, follow these required steps.

### Prerequisites

Needed toolings and frameworks you should install before building the project:

* [Node.js](https://nodejs.org/en/download) (if not already installed)

* Update npm

  ```sh
  npm install npm@latest -g
  ```

* Yarn

  ```shell
  npm install yarn -g
  ```

* GitHub CLI (optional but recommended)

  ```shell
  brew install gh
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/ungaralex/my-finance-pal-backend.git
   ```

2. Install NPM packages

   ```sh
   yarn install
   ```

### Run Locally

To run/debug the service locally in dev mode, only the following is needed:

1. Start the `mongo` service of the `docker-compose` file

   ```shell
    docker-compose up -d mongo
   ```

2. Start the `my-finance-pal` service.

   ```shell
   yarn dev
   ```

The service now runs on port 3000 and listens to requests

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## CI/CD Pipelines Using GitHub Actions

## Authenticating to GCP using a Service Account Key

TODO: add details

### Populating Secrets

The GCP service account key need to be stored as a secret in the GitHub repo. Alongside, we store a few other GCP-related
configuration values, such as project ID and region. Secrets can be accessed in the GitHub Actions workflows.

We advise using `gh` to create the secrets:

```shell
gh secret set GCP_PROJECT_ID --body '<gcp_project_id>'
gh secret set GCP_REGION --body '<gcp_region>'
gh secret set GCP_SA_KEY --body $(cat <gpc_service_account_key.json> | base64)
```

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/netlight/my-finance-pal-backend.svg?style=for-the-badge
[contributors-url]: https://github.com/netlight/my-finance-pal-backend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/netlight/my-finance-pal-backend.svg?style=for-the-badge
[forks-url]: https://github.com/netlight/my-finance-pal-backend/network/members
[stars-shield]: https://img.shields.io/github/stars/ungaralex/my-finance-pal-backend.svg?style=for-the-badge
[stars-url]: https://github.com/netlight/my-finance-pal-backend/stargazers
[issues-shield]: https://img.shields.io/github/issues/ungaralex/my-finance-pal-backend.svg?style=for-the-badge
[issues-url]: https://github.com/netlight/my-finance-pal-backend/issues
[linkedin-shield-alex]: https://img.shields.io/badge/-Alexander%20Ungar-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-shield-saadi]: https://img.shields.io/badge/-Saadi%20Myftija-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-shield-arda]: https://img.shields.io/badge/-Arda%20Özdere-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url-alex]: https://www.linkedin.com/in/alexander-ungar
[linkedin-url-saadi]: https://www.linkedin.com/in/saadimyftija
[linkedin-url-arda]: https://www.linkedin.com/in/arda-%C3%B6zdere-85058a91

[Expressjs]: https://img.shields.io/badge/Express-grey?style=for-the-badge&logo=express&logoColor=red
[Express-url]: https://expressjs.com/
[Nodejs]: https://img.shields.io/badge/Node.js-black?style=for-the-badge&logo=nodedotjs&logoColor=green
[Node-url]: https://nodejs.org/en
[Typescript]: https://img.shields.io/badge/Typescript-white?style=for-the-badge&logo=typescript&logoColor=blue
[Typescript-url]: https://www.typescriptlang.org/
[MongoDB]: https://img.shields.io/badge/MongoDB-purple?style=for-the-badge&logo=mongodb&logoColor=green
[Mongodb-url]: https://www.mongodb.com/
[Jest]: https://img.shields.io/badge/Jest-orange?style=for-the-badge&logo=jest&logoColor=white
[Jest-url]: https://jestjs.io/
