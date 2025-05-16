---
title: "Dealing with Dependencies"
dateWritten: 2025-05-16
dateEdited: 2025-05-16
slug: dealing-with-dependencies
tags: [development]
---

## Dependencies!!

I am quite done with dealing with dependencies… Especially when the project was running perfectly fine before and then I had to install another version of the same language for another project and after this and that, the original project environment is broken. Not to mention having spent 2 hours to get the new project started only to find afew days later that the old project is not working and had to figure out for 1 hour what to do. I admit that I am not a proficient software developer and especially not good at handling dependencies, so I am going to try to write down the steps that I think worked for me, at least it works right now. 

For working with multiple version of the same programming languages, I was recommended a tool version manager [asdf](https://asdf-vm.com). How it works is that the various versions are installed as executables and we then select the version for the project, creating a `.tool-versions` file. From this file, we can check which version is used for the project and asdf can also identify which executable to run. 

## An Example

### Setting Up

The [asdf documentation](https://asdf-vm.com/guide/getting-started.html) is pretty much what we would need to do to install and configure asdf. 

### Installing Plugin

As an example, I will use Python (obviously). So first, we would need to install the Python plugin.

```bash
asdf plugin add python
```

### Installing Python Version

Then, we can install all the version of Python that we need, or just the one that we need for now.

```bash
asdf install python 3.10.13
```

To check that it has been successfully installed, we run `asdf list`. This shows all the versions that are installed.

To check which version is used for the current directory, we run `asdf current`. At this point, it should not show any version since we have not configured it. 

### Configuring For Local Project

To set local version of Python

```bash
asdf set python 3.10.13
```

If that does not work, we can manually create our own `.tool-versions` file like this:

```bash
echo "python 3.10.13" >> .tool-versions
```

Now when we run `asdf current`, it should show the version of Python that we just selected.

### Configuring For Global

To set the global version:

```bash
asdf set -u python 3.10.13
```

Alternatively, we can create the same file in the home directory, so that when the version is not specified for a particular project, asdf looks for the file in a parent directory until it finds one.

```bash
echo "python 3.10.13" >> $HOME/.tool-versions
```

### Using Virtual Environment

After this, we can create our usual virtual environment for Python. These are the steps that I typically take:

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```
