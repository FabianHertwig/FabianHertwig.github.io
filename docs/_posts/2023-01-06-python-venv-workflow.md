---
title: "Python Virtual Environments: The best workflow"
date: 2023-01-07 12:00:00 +0200
description: "Why uv is now the best tool for Python environments, plus the pyenv + venv workflow that keeps each project isolated with its own Python version."
categories:
  - blog
tags:
  - Python
  - Environments
  - Developing
---

## Update: A Simpler Workflow with `uv`

**Note:** The workflow described below using `pyenv` and `venv` is now largely superseded by a fantastic new tool called [`uv`](https://github.com/astral-sh/uv). While the principles discussed in this post remain relevant, `uv` offers a significantly faster and more streamlined experience.

`uv` acts as a replacement for `pip`, `pip-tools`, `virtualenv`, and `venv`, all rolled into one incredibly fast Rust-based package manager and resolver.

With `uv`, creating a virtual environment is as simple as running:

```bash
uv init
```

And adding packages is straightforward:

```bash
uv add <package>
# or using the familiar pip install command
uv pip install <package>
```

Crucially, when using `uv add`, it modifies your `pyproject.toml` to record the direct dependencies and their version constraints (similar to `package.json` in Node.js). `uv` then automatically maintains a lock file (`uv.lock`) which records the exact versions of all dependencies (direct and transitive) needed for your project. This lock file brings a level of dependency consistency similar to what you might be familiar with from the JavaScript ecosystem (e.g., `npm` and `package-lock.json`), something I've come to appreciate greatly. It ensures reproducible builds across different environments.

Given its speed and simplicity, I now recommend `uv` as the primary tool for managing Python virtual environments and dependencies. The rest of this post remains for historical context or if you encounter situations where `uv` isn't suitable.

## Original post

When I start a new Python project I use `pyenv install 3.11` and `pyenv shell 3.11` to install and set the Python version (here to 3.11) and then `python -m venv .venv` to create a virtual environment that sits in my project folder. At last it gets activated with `source .venv/bin/activate`. I bundled these commands into a function, so that I only need to run `mkpyvenv 3.11` and the virtual environment is created and activated.

## The reasons for this workflow

Every project should have its own virtual environment, so that each project is independent.

I want to be able to control the Python version for each project, eg. use 3.8 for one project and 3.11 for another.

I want my virtual environment to be in the project folder, so that when I delete the project folder, that virtual environment is also gone. Like that my system does not get littered with virtual environments that I have long forgotten about, as conda or virtualenvwrapper does.

Another benefit is, that my virtual environment does not have a name that I need to remember. I can always activate it with `source .venv/bin/activate` in the project folder. VSCode automatically activates a virtual environment in a `.venv` folder, so I don't even have to do that.

I want to install all my dependencies with `pip` and a `requirements.txt` or `pyproject.toml` file (and not with `conda` and an `environment.yml`), as often a project ends up running in a Docker container. As a Docker container is its own virtual environment, I don't want to have to install another virtual environment manager in that docker container. Also pip is the Python standard, and conda is only common in the scientific community.

## The workflow in practice

This is for MacOS.

### Installation

Use [brew](https://brew.sh/index_de) to install [pyenv](https://github.com/pyenv/pyenv#homebrew-in-macos)

    brew update
    brew install pyenv

Then follow the instructions of `pyenv init` to load pyenv when starting a shell. For the zsh shell that is:

    # Load pyenv automatically by appending
    # the following to
    ~/.zprofile (for login shells)
    and ~/.zshrc (for interactive shells) :

    export PYENV_ROOT="$HOME/.pyenv"
    command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
    eval "$(pyenv init -)"

    # Restart your shell for the changes to take effect.

Then install the Python versions that you want to use. With `pyenv versions` you can see which ones are already installed.

    pyenv install 3.8.16
    pyenv install 3.11
    ...

### Creating a virtual environment

Now let us assume we start a new project:

    mkdir my_awesome_tool
    cd my_awesome_tool

Now we set the Python version for the current shell session:

    pyenv shell 3.11

When you run `python --version` you will see that the `Python 3.11.1` version is used (or a newer patch version, as we have not been specific there). With `which python` you see that the python executable is in the `.pyenv/shims` directory. With `pyenv which python` you see that the python executable is stored in the pyenv directory `/Users/fabian.hertwig/.pyenv/versions/3.11.1/bin/python`.

So let us create a virtual environment in a `.venv` folder:

    python -m venv .venv
    source .venv/bin/activate

Now `which python` points to the virtual environment: `/Users/fabian.hertwig/Projects/my_awesome_tool/.venv/bin/python`. And again if you run `python --version` you will see that the `Python 3.11.1` version is used. If you install a package, eg. `pip install numpy` then it will be stored in the `.venv/lib/python3.11/site-packages/numpy` directory.

## Making shortcuts

To easily run through that process with just one command `mkpyvenv 3.11`, you can add the function below to your shell configuration file, e.g. `.zshrc`. Or you can use the awesome [fig tool to create a dot file there](https://fig.io/blog/post/dotfiles-launch) which gets shared across all your fig installations.

    mkpyvenv() {
        # Check if an argument was given
        if [ -z "$1" ]; then
            echo "Please specify a Python version to use, e.g. mkpyvenv 3.9.4"
            return 1
        fi
        PYTHON_VERSION=$1

        # Check if pyenv is installed
        if ! command -v pyenv > /dev/null; then
            echo "pyenv is not installed. Please install it, e.g. by running `brew install pyenv`"
            return 1
        fi

        # Install the python version if it does not exist
        pyenv install --skip-existing $PYTHON_VERSION

        # Create the virtual environment and activate it
        pyenv shell $PYTHON_VERSION
        python -m venv .venv
        pyenv shell --unset
        source .venv/bin/activate
    }
