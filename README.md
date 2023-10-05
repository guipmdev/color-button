<!-- ===== HEADER ===== -->
<p align="right">
  <img
    src="https://img.shields.io/badge/lang-en-gray?style=flat-square&labelColor=202024"
    alt="lang-en"
  />
  <a href="./README.pt-br.md" title="Ler o README em português brasileiro">
    <img
      src="https://img.shields.io/badge/lang-pt--br-green?style=flat-square&labelColor=202024"
      alt="lang-pt-br"
    />
  </a>
</p>

<h1 align="center">
  <a
    href="https://guipmdev-color-button.vercel.app/"
    title="Go to the web application"
  >
    color-button
  </a>
</h1>

<p align="center">
  <img
    src="https://img.shields.io/github/languages/count/guipmdev/color-button?color=%2304D361&labelColor=202024"
    alt="Repository language count"
  />
  <img
    src="https://img.shields.io/github/repo-size/guipmdev/color-button?labelColor=202024"
    alt="Repository size"
  />
  <a
    href="https://github.com/guipmdev/color-button/actions/workflows/node.js.yml"
    title="View GitHub workflow runs"
  >
    <img
      src="https://img.shields.io/github/actions/workflow/status/guipmdev/color-button/node.js.yml?labelColor=202024&label=Node.js CI"
      alt="GitHub workflow status"
    />
  </a>
  <img
    src="https://img.shields.io/endpoint?labelColor=202024&url=https://gist.githubusercontent.com/guipmdev/f415beafbd82e43ad177dd807ee49681/raw/color-button-junit-tests.json"
    alt="Tests report"
  />
  <img
    src="https://img.shields.io/endpoint?labelColor=202024&url=https://gist.githubusercontent.com/guipmdev/f415beafbd82e43ad177dd807ee49681/raw/color-button-cobertura-coverage.json"
    alt="Tests coverage"
  />
  <a
    href="https://github.com/guipmdev/color-button/commits/main"
    title="View repository commits"
  >
    <img
      src="https://img.shields.io/github/last-commit/guipmdev/color-button?labelColor=202024"
      alt="Last commit"
    />
  </a>
  <a href="./LICENSE" title="View project license">
    <img
      src="https://img.shields.io/badge/license-MIT-brightgreen?labelColor=202024"
      alt="Project license"
    />
  </a>
  <a href="https://bonnie.dev/" title="Go to Bonnie's website">
    <img
      src="https://img.shields.io/badge/Layout_by-Bonnie_Schulkin-182734?labelColor=202024"
      alt="Layout designer"
    />
  </a>
</p>

![Screenshot of the application initial page](./src/assets/images/cover.webp)

<p align="center">
  <a href="https://guipmdev-color-button.vercel.app/"
    >Go to the web application ↗</a
  >
</p>

<details>
  <summary>
    <h2>📒 Table of Contents</h2>
  </summary>

- [📍 Overview](#-overview)
- [✨ Features](#-features)
- [🤖 Demo](#-demo)
- [🛠 Technologies](#-technologies)
  - [Website](#website)
  - [Utils](#utils)
- [🚀 Getting Started](#-getting-started)
  - [✔️ Prerequisites](#️-prerequisites)
  - [📦 Installation](#-installation)
  - [⚙️ Usage](#️-usage)
  - [🧪 Running tests](#-running-tests)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)
</details>

<!-- ===== PROJECT INFOS ===== -->

## 📍 Overview

The **color-button** projectis a web application developed in _React_ that consists of a button and a checkbox. The button allows users to toggle between two colors, Medium Violet Red and Midnight Blue, and the checkbox can disable and enable the button.

The main purpose of this app is to showcase a basic functionality in React with Jest and Testing Library tests.

## ✨ Features

🎨 **Switch between two colors** at the click of a button

🔛 **Deactivate and reactivate the button** via checkbox

🧪 Project **focused on** Jest and Testing Library **tests**

## 🤖 Demo

## 🛠 Technologies

The following tools were used to build the project:

### Website

<p>
  <a href="https://react.dev/">
    <img
      src="https://img.shields.io/badge/React-23272f?style=for-the-badge&logo=React"
      alt="React"
    />
  </a>
  <a href="https://eslint.org/">
    <img
      src="https://img.shields.io/badge/ESLint-101828?style=for-the-badge&logo=ESLint"
      alt="ESLint"
    />
  </a>
</p>

<p>
  <a href="https://testing-library.com/">
    <img
      src="https://img.shields.io/badge/Testing_Library-242526?style=for-the-badge&logo=testing-library"
      alt="Testing Library"
    />
  </a>
  <a href="https://www.npmjs.com/package/jest-junit">
    <img
      src="https://img.shields.io/badge/jest--junit-gray?style=for-the-badge"
      alt="jest-junit"
    />
  </a>
</p>

_\* See the [<kbd>package.json</kbd>](./package.json) file_

### Utils

<p>
  <a href="https://git-scm.com/">
    <img
      src="https://img.shields.io/badge/Git-f1f1e9?style=for-the-badge&logo=git"
      alt="Git"
    />
  </a>
  <a href="https://nodejs.org/">
    <img
      src="https://img.shields.io/badge/Node.js-233056?style=for-the-badge&logo=node.js"
      alt="Node.js"
    />
  </a>
  <a href="https://code.visualstudio.com/">
    <img
      src="https://img.shields.io/badge/VSCode-005293?style=for-the-badge&logo=visual-studio-code"
      alt="VSCode"
    />
  </a>
</p>

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following tools installed on your machine: [Git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/en/download). It's also good to have an editor to work with the code, such as [VSCode](https://code.visualstudio.com/Download).

### 📦 Installation

1. Clone the repository:

```sh
git clone https://github.com/guipmdev/color-button/
```

2. Change to the project directory:

```sh
cd color-button
```

3. Install the dependencies:

```sh
npm install
```

### ⚙️ Usage

1. Start the web application:

```sh
npm run start
```

2. Access https://localhost:3000/ to view the application

### 🧪 Running tests

```sh
npm run test
```

## 📄 License

This project is licensed under the terms of the `MIT` license. See the
[LICENSE](./LICENSE) file for additional info.

## 👏 Acknowledgments

> - Many thanks to [Bonnie Schulkin](https://bonnie.dev/) for the layout and tips when putting this project together

<!-- ===== FOOTER ===== -->

---

<p align="center">
  Made with 💙 by
  <a href="https://www.guipm.dev/"> @guipm.dev </a>
  - Feel free to
  <a href="mailto:guipm.dev@gmail.com">contact me</a>!
</p>

<br />

<p align="center">
  <a href="#top">
    <b>↑&nbsp;&nbsp; Return to the top &nbsp;&nbsp;↑</b>
  </a>
</p>
