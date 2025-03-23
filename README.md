# Luxe Cavallo - Fictional Luxury Brand 

## A full MERN-stack portfolio project


___


I started this project to reinforce my skills in React and a full MERN stack while looking for a new job. I've spent so much time focusing on front-end design that I wanted to really work on databases and backend skills as well. 

My original idea came purely from a concept of a vertical header/menu that would only really work on desktop. So the project started off as mainly focusing on that challenge while maintaining backend code as well. Then it expanded into a full application.

[You can see it live here to take a look. ](https://luxecavallo.vercel.app/)

___

  ## Table of Contents
- [How to Use](#How-to-Use)
- [Technologies](#Technologies)
- [Challenges Encounted](#Challenges)
- [Future Development](#Future-Development)
- [Credits](#Credits)
- [License](#License)
  <br>

___



## How to use

When you first get, you'll see a full-page video with the header/menu on the left. Click the burger icon in the header to slide open the menu for all of your links. 

When the menu is open, you'll see links to all the different item categories.

![Luxe Cavallo menus screenshot](./readme%20img/menus.jpg)

When you click on a department, you'll be show a grid of products in each category with a short description and an alert is sizes are running low of stock. If you want to see more about an item or put it in your cart, click on one of the cards.

![Mens category products](./readme%20img/category_page.jpg)

Once you click on a product you'll be taken to the details page. Here you'll find more information on available sizes, costs, sizing, and care instructions. You cn click on the Size Guide to get a modal dialog with measurements for each size. Eventually you will be able to click on the appropriate sizes to add them to your bag.

![product details page](./readme%20img/product_detail.jpg)

## Technologies

<div id='tools' style="background-color: rgb(112, 93, 0); padding:10px; text-align:center;">
 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" width="40" height="40" alt="Material UI"/>        
 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" height="40" alt="react"/>    
 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="40" height="40" alt='mongoDB'/>
 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" width="40" height="40" alt='Heroku' />         
 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="40" height="40" alt='CSS' />
   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="40" height="40" alt='HTML' />    
   <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40" alt='Javascript' />  
 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" width="40" height="40" alt='GitHub' />  
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="40" height="40" alt='Express' />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" height="40" alt='NodeJS' />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"  width="40" height="40" alt='npm' />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" width="40" height="40" alt='Photoshop' />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg" width="40" height="40" alt='Premiere Pro' />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  width="40" height="40" alt='VS Code'>
</div>

## Challenges

Responsiveness. My initial inspiration for this project was purely to make a vertical nav bar using Material UI. The rest of the site evolved from that. I didn't realize just how difficult it would be to make the site work on several different screen sizes. 

I knew going in that this wasn't going to be a mobile-first site, but I failed to see just how many different screen heights there were that had to be taken into account along with screen width. The vertical header made that more challenging that expected and there's still work to be done.

It's also been a while since I've deployed an active database to a server, so deploying to Heroku was challenging. The error logs in Heroku were sometimes helpful and other times not so helpful.  I eventually found some of my configurations weren't correct so the site was broken for a while. Between documentation, Stack Overflow, ChatGPT, and a little trial and error, I finally found the problems. Turns out the correct configuration wasn't exactly like some of the documentation said it should be. Fortunately my Bootcamp had some blog posts with the one line that kept breaking my queries. 

___
## Future Developments
- Mobile responsiveness
- Functional shopping bag
- User logins

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
