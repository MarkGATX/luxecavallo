# Luxe Cavallo - Ficional Luxury Brand 

## A full MERN-stack project to work on some UI/UX skills


___


I started this project to reinforce my skills in React and a full MERN stack while looking for work. I've spent so much time focusing on front-end design that I wanted to really work on databases and backend skills as well. 

My original idea came purely from a concept of a vertical header/menu that would only really work on desktop. So the project started off as mainly focusing on that challenge while maintaining backend code as well.

[You can see it live here to take a look. ](https://luxecavallo.herokuapp.com/)


___



## How to use

When you first get, you'll see a full-page video with the header/menu on the left. Click the burger icon in the header to slide open the menu for all of your links. 

When the menu is open, you'll see links to all the different item categories.

![Luxe Cavallo menus screenshot](./readme%20img/menus.jpg)

When you click on a department, you'll be show a grid of products in each category with a short description and an alert is sizes are running low of stock. If you want to see more about an item or put it in your cart, click on one of the cards.

![Mens category products](./readme%20img/category_page.jpg)

Once you click on a product you'll be taken to the details page. Here you'll find more information on available sizes, costs, sizing, and care instructions. 

![product details page](./readme%20img/product_detail.jpg)

When you hover over a project, the project will switch to full color and a box will open at the bottom right. That shows different technologies that were used to create that project. If you're not sure what an icon represents, you can hover over it with your mouse and the name will pop up as a tool-tip.

![Portfolio detail of techs used on project](./readme_images/portfolio_techs.jpg)

Once you click on the project, a modal dialog with open asking if you want to visit the live site or check under the hood with the GitHub code. Take your pick and be spirited away. NOTE: for projects I've included that don't have any connection to GitHub, clicking on the project will take you directly to the YouTube page where those projects are housed.

![Detail on choosing Live or GitHub](./readme_images/live_or_git.jpg)

In the navigation bar at the top you have other options to look at. 

- **Contact Me**: This opens up a contact page with links to my GitHub, LinkedIn, and a Contact Form. Fill out the form with valid information and a message will be sent. 

![contact form detail](./readme_images/contact_me_detail.jpg)

- **About Me**: The brief for this assignment calls for a separate About Me page, so I added more about me. When you click here you'll find some more thoughts from me as well as a small image gallery to give you an idea of who I am and what I like to do.

![about me page screenshot](./readme_images/about_me_screen.jpg)

- **Resume**: Click here and you'll be taken to an online version of my resume for you to look over. If you'd like your own copy, there's a link at the top of the page for a PDF version of my resume you can then download.
    
![resume screenshot](./readme_images/resume_screen.jpg)

___


## Changes Made and Lessons Learned

- Version 2 of my portfolio was already a fairly large construction. Reformatting it for React was daunting. That was almost enought to make me start from scratch. But at the end of the day I decided to simply break it down into smaller pieces until it made sense. Once I broke down the page into separate components, it became clear where I needed to go. Deconstructing Version 2 became easy at that point. The challenge was still making it work in React.

- Formatting everything to take advantage of React was a lesson in patience. Apart from the pain of replacing every `class` declaration with `className`, there were a lot of tiny details that tripped me up. At the end of the day I got the page back working as intended and even added some more bells and whistles. However, some things are still not working as intended.

- My original coffee animation is not working. I've hammered at it for quite some time and have gone to multiple online and in-person resources for help and so far no one has been able to get it to work as intended. I'll have to keep trying new things until I finally find what's not working. Fortunately, while I like the animation and I feel it ties the site theme together, it's not necessary for full function.

 ___

## Possible Future Changes

- Fix DOM and canvas animations
- Learn and use SASS to add my colors to Bootstrap variables.
- Deconstruct Bootstrap to only use a serve elements I'm using on the site
___



## Credits
Thanks to all the UT-Austin Full-Stack Bootcamp for helping push me and giving me feedback and support on my projects.

___


## License

MIT License

Copyright (c) 2022 Mark Gardner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
