<div align="center">
  <h2>Vivu</h2>

  <a href="https://app.fossa.io/projects/git%2Bgithub.com%2Flogustra%2Fvivu?ref=badge_shield">
    <img 
      src="https://app.fossa.io/api/projects/git%2Bgithub.com%2Flogustra%2Fvivu.svg?type=shield&color=brightgreen" 
      alt="FOSSA Status"
    >
  </a>

  <a href="https://standardjs.com">
    <img 
      src="https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat" 
      alt="Code Style"
    >
  </a>

  <a href="https://github.com/logustra/vivu/releases/tag/v1.0.0">
    <img 
      src="https://img.shields.io/static/v1.svg?label=version&message=1.0.0&style=flat&color=brightgreen" 
      alt="Version"
    >
  </a>

  <a href="http://commitizen.github.io/cz-cli">
    <img 
      src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat" 
      alt="Commitizen"
    >
  </a>
</div>
<br />

## Learn 7AD
Learn the design patterns [here](https://github.com/logustra/7ad)

## Requirement
  - [node.js](http://nodejs.org/)
  - [nvm](https://github.com/nvm-sh/nvm)
  - [pnpm](https://pnpm.js.org/en/installation)

## Quick Start

```bash
# install nodejs with specific version
$ nvm install 12.6.3

# using specific nodejs
$ nvm use 12.6.3

# clone repository
$ git clone https://github.com/logustra/vivu.git

# open folder vivu
$ cd vivu

# install packages
$ pnpm install

# install git hooks
$ pnpm prepare

# build and serve with vite dev server
$ pnpm dev
```

## How to Create Folder
A guide how to create a folder using `create-cli`

### Component
```bash
# create new atom component with name loading
$ node create component atoms loading
```

### Module
```bash
# create new module with name home and with all types
$ node create module home all
```

## How to Contribute
I'm delighted that you're helping make this open source project better. Here are a few quick guidelines to make this an easier and better process for everyone.

### Reporting a bug
First, **make sure the bug hasn't already been reported** by searching GitHub's issues section.

If no existing issue exists, go ahead and create one. **Please be sure to include all of the following**:

1. A clear, descriptive title (ie. "A bug" is not a good title).
2. Include the error message if have.
3. The browser and OS that you're using.

### Submitting a Pull Request
1. Fork it
2. Create your feature branch `git checkout -b new-feature`
3. Commit your changes `git commit -m "Add some feature"`
4. Push to the branch `git push origin new-feature`
5. Create new Pull Request

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Flogustra%2Fvivu.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Flogustra%2Fvivu?ref=badge_large)
