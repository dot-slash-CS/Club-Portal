You need to have node.js installed before you try to run this server.
If you do not have node, here is a writeup for iOS.
https://github.com/taro220/guides

If you have nodejs installed, you should have access to npm.
Fork and pull this project and then type in the terminal

npm install

This will install all the dependencies listed in the package-lock.json file

Now you can run the server using nodemon

nodemon server.js

You should see "Port 8000" in your console.
Now you can go to localhost:8000 in your browser to pull up the webpage.

You can test out the static route localhost:8000/main.html
You can test the route localhost:8000/home

nodemon will automatically reload your code whenever you make a save which makes
testing very easy.

Play around with the server, make new routes, make new HTML forms, ect.
You can push your forked code and I can look over it if you have questions.
