---
title: "Time travelling through your commits with git "
tags: git
category: tutorial
excerpt: "In this article I'm going to walk through undoing changes and
  switching between versions in a git enabled project lets do it."
created: 2020-06-03T01:56:16.737Z
image: /time-travel_k3hzp9.jpg
image_caption: Picture of a time capsule for time travel
author: vince
---
Git(not to be confused with Github) is an open source version control system that helps manage small and large projects for efficiency and speed in terms of development. One of the things it helps manage is the history of your changes in a particular project, it keeps record these changes through commits. So when working on a project with git initialized it is common practice to frequently save new changes(or versions) you make with git commits to allow git keep track of the different versions for you. Basically what happens when you commit is that git saves the current state of your project as a new version, So you have a backlog of different versions of your project that you can easily navigate to in the future which is what I'm going to show you how to do in this article.

To initialize git in a project you would navigate to the root directory of that project in your preferred terminal and run

```
git init

```

you should get a message like

```
initialized empty Git repository in /Path/to/your/project

```

then consequently to save new changes you'd first add all the changes with this command:

```
git add .

```

then you would commit them with this shortcut command with a commit message of a description of the changes made

```
git commit -m "short commit message on the changes made on this version"

```

Great now git is keeping track of the changes in your project, And you can see the different saved versions of your project by running

```
git log --oneline
#You should get a response similar to this 
14039d6 (HEAD -> master) Initial commit
15079d6 (HEAD -> master) Commit message you entered when you made the commit for this version
```

you should get an output like the one above indicating the different commits in your project.

the first thing you seen on each line of commit is that weird looking key of numbers and letters (see `**14039d6**` above)

this is called a Git commit ID, its a unique identifier for your commits used it is very important, it is used to get particular versions of the project. you will want to take note of this as we will need it later on.

Now its awesome that git is helping us keep track of our changes but how exactly do we access these different versions of our project lets say for example we have somehow deleted an important part of our project and we would like to get it back or we would just like to navigate to a different version of our project to see how things worked differently in that version Git gives the ability to time travel back and and forth through our commits to any version of our choosing .

Now there are different ways this can be done namely **Checkout, Reset and Revert.** lets go over them one by one

**Git Checkout**

The checkout command is traditionally used to switch branches in your repo(which is out of the scope of this article but you can read about it [here](https://www.atlassian.com/git/tutorials/using-branches)) but it can also be switch between different versions of your project , to do this you would run the command git checkout \*Git commit ID\* (remember the git commit ID we talked about earlier this is where we'd use it)

```
git checkout 14039d6

```

now this command will load up the state of our project at the time of this commit making everything exactly the same way it was when the commit was made. But this is just temporary and any changes made on the project at this time wont be saved or tracked it's mainly for viewing purposes you can also run tests on it, and when you are done you can switch back to the current state of your project by running this command

```
git checkout HEAD

```

**Git Resest**

The reset command (as the name implies) completely resets your project to a particular version you choose it is important to note that when this is done it deletes all the versions after the chosen version. So lets say our commit history looks like this :

```
$ git log --oneline
1061e79 deleted content from demo file
86bb32e prepend content to demo file
3602d88 add new content to demo file
299b15f initial commit
```

(Quick note: git log presents your commit history in in order of last to first so your last commit is on top)

and we would like to completely reset our project to the second commit (ie:602d88 add new content to demo file) we would run this command

```
git reset --hard 602d88

```

now when we check our commit history again it looks like this

```
$ git log --oneline
3602d88 add new content to demo file
299b15f initial commit
```

we have basically moved back in time to the commit where we 'add new content to demo file '

it is important to note that this is a very dangerous command to use as there is no going back after a Hard reset you must be absolutely sure that you don't need the versions that are going to be deleted. (it can end in tears if care is not taken)

**Git Revert**

Finally we have the git revert command now the way this one works is it takes a commit ID (ie the one you want to go to ) and inverses it then creates a new 'revert commit' and appends it to the commit history.

so lets say our commit history still looks like this

```
$ git log --oneline
1061e79 deleted content from demo file
86bb32e prepend content to demo file
3602d88 add new content to demo file
299b15f initial commit
```

and we want to revert to the third commit (ie: 86bb32e prepend content to demo file) we would do so by running

```
git revert 86bb32e

```

now when we check our commit history it looks like this

```
$ git log --oneline
1061e79 Revert "prepend content to demo file"
1061e79 deleted content from demo file
86bb32e prepend content to demo file
3602d88 add new content to demo file
299b15f initial commit
```

as you see a new commit has been added to the commit tree (1061e79 Revert "prepend content to demo file") and our project now looks as it did when we made the 'prepend content to demo file' commit .

And thats basically it of course there is more to it like other techniques of moving through your commit history but this is the basics of time travel with git, feel free to read up on it on the [official git documentation](https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things). I hope this resource was helpful and i hope to see you in the next post, thanks.