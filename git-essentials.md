# Git/Github Essentials

## A few things/commands we need for webdev.

Git is a version tracking software to organize our code and track versions. It makes it
easier to roll back errors. It is client/server software that together keep track of all your files
and manage the code base. git you installed on your computer can be called client.

Github is a website that keeps the remotely available server that all clients can acccess to. To download files from the server you don't need to register. But to upload files you do need to register.
It is free to register and to publish any project on github.

## Terms:
Repository: Project or organized package or code that are saved on a separate directory. (local- on your computer) (remote- server/github)

Cloning: Downloading and saving the repository from remote to local.

adding: tagging a file in local repository to be included for saving (either locally or remotely)

commit: save is performed for the above added/tagged files to the Repository

pushing: push and publish the committed file(s) from the local Repository to remote (github)

More git tutorial:
https://github.com/dot-slash-CS/Git-Tutorial


## Downloading our project/repository to local directory

We can clone the whole project with a simple line (no need to register)

`git clone https://github.com/dot-slash-CS/Club-Portal`

Once you get the git clone working, now you may want to upload files to it.
First please make sure you register on github.

go to newly acquired repository in command line:
```cd Club-Portal
copy new files: cp ~/Desktop/newfile.txt .
```
Add the file to local git repo:

`git add newfile.txt`

Commit the new file:

`git commit -m "new file added"`

If you cloned the github repository and you are uploading the newfile back to it, you don't need to run the following. This command set up connection from local repository to the github (remote repository):

`git remote add remote_name`

(when git creates a local repository <directory>, its default name is master. we need a new name for remote : we give it origin )

Now it is ready to be pushed to remote server, we just named: origin. in fact, the following command is enough.

`git push`

`git` understands that you are pushing your current repository(the current directory you are in) to a remote repository (it remembers if you `git clone` from github; so no need to specify where it is pushing to.)

---------
