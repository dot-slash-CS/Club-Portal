# Softwares for our club-creation website
```
git
node

brew (osx)
chocolatey (win)

editors:
atom
sublime
```

## Windows:
```
Using cmd admin shell:
powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

choco install -y git
choco install -y nodejs
(optional)
choco install -y atom
```


## Mac:
```
mkdir homebrew && curl -L https://github.com/Homebrew/brew/tarball/master | tar xz --strip 1 -C homebrew
brew install node
brew install git (not needed if xcode installed)
brew install atom (optional)

You can follow the detailed instructions here:
https://github.com/taro220/guides/blob/master/macinstall.txt
```

## Linux:
```
sudo apt install node
sudo apt install github
```
## Npm:
```
npm install express
npm install ejs
```

## project (git)
```
in a separate directory:
git clone https://github.com/taro220/Node-express-ejs-template
git clone https://github.com/dot-slash-CS/Club-Portal
```
