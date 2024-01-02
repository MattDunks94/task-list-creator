# Task List Creator

[Task List Creator](https://mattdunks94.github.io/task-list-creator/) is a fully responsive application for the organised. Users can create, assign, rearrange and [HTML5](https://en.wikipedia.org/wiki/HTML5#:~:text=HTML5%20(Hypertext%20Markup%20Language%205,as%20the%20HTML%20Living%20Standard.)), [CSS3](https://en.wikipedia.org/wiki/CSS), [Javascript](https://en.wikipedia.org/wiki/JavaScript) and [Bootstrap v4.3](https://getbootstrap.com/docs/4.3/getting-started/introduction/) framework.

<img src="/documentation/README-images/TASK-CREATOR-AMIRESPONSIVE.png">

## Table of Contents:
- [User Experience (UX)](#user-experience-ux)
  - [User Stories](#user-stories)
  - [Design](#design)
    - [Mockup Diagrams](#--mockup-diagrams)
    - [Colour Palette](#--colour-palette)
    - [Typography](#--typography)
    - [Imagery](#--imagery)
  - [Features](#features)
    - [Help Information](#help-information) 
    - [Adding Tasks](#adding-tasks)
    - [Removing Tasks](#removing-tasks)
    - [Assigning Tasks](#assigning-tasks)
    - [Rearrange Tasks](#rearrange-tasks)
    - [Save List](#save-list)
    - [Load List](#load-list)
    - [Clear List](#clear-list)
- [Testing](#testing)
  - [HTML Validation](#html-validation)
  - [CSS Validation](#css-validation)
  - [JS Validation](#js-validation)
  - [Lighthouse Report](#lighthouse-report)
- [Deployment](#deployment)
- [Features for the Future](#features-for-the-future)
- [Bugs & Errors](#bugs--errors)
- [Technologies Used](#technologies-used)
  - [Languages Used](#languages-used)
  - [Frameworks, Libraries & Programs Used](#frameworks-libraries--programs-used)
- [Credits](#credits)
  - [Code](#code)
  - [Media](#media)
  - [Inspiration](#inspiration)
 
## User Experience (UX)

### User Stories
### Design
#### - Mockup Diagrams:
#### - Colour Palette:
#### - Typography:
#### - Imagery:

## Features
### Help Information:
(For Large Screens, Tab List) <br>
<img src="documentation/README-images/HELP-INFO-LRG.png" width="600">

(For Small Screens, Accordion Collapse)<br>
![](documentation/README-images/HELP-INFO-SM.png)

The help information feature contains information on how to operate the app. This feature appears via a button click, this button being<br> 
[Font Awesome's Question Icon](https://fontawesome.com/search?q=question&o=r&m=free) in the top left of the screen, and is displayed using [Bootstrap V4.3 Modal](https://getbootstrap.com/docs/4.3/components/modal/). There are 2 variations of this feature for certain screen types. The 'Help Info' for large screens is [Bootstrap V4.3 Tablist Element](https://getbootstrap.com/docs/4.3/components/list-group/#tab). 
For smaller screens, the 'Help Info' feature is displayed using [Bootstrap V4.3 Accordion Collapse](https://getbootstrap.com/docs/4.3/components/collapse/#accordion-example). The reason for using two different variations to display the information is because when resizing the window, the tab list variation did not work, was not very responsive. This is because it is displayed horizontally and needed to change to a vertical list for smaller screens. I originally changed the tab list to a vertical list, for smaller devices, but this caused the 'Help Info' feature to be too long, meaning the user would have to scroll down to reveal all app operations. This lead to me looking for an alternative, hence the accordion variation.<br>
The accordion variation is ideal for smaller screens because each 'Help Info' section can be collapsed which saves space on screen and avoids the user having to scroll down.

### Adding Tasks 

### Removing Tasks

### Assigning Tasks

### Rearrange Tasks

### Save List

### Load List

### Clear List

## Testing
### HTML Validation
I used [W3C Markup Validation Service](https://validator.w3.org/) to test all HTML files.
<details>
    <summary>HTML Validation Results</summary>
  
  ![](documentation/README-images/HTML-VALIDATOR.png)
</details>

### CSS Validation
I used [W3C Markup Validation Service](https://validator.w3.org/) to test all CSS files via direct input.
<details>
    <summary>CSS Validation Results</summary>
  
  ![](documentation/README-images/CSS-VALIDATOR.png)
</details>

### JS Validation
I used [ES6 Syntax Check - PiliApp](https://www.piliapp.com/syntax-check/es6/) to test all Javascript files.
<details>
    <summary>index.js Validation Results</summary>
  
  ![](documentation/README-images/index.js-VALIDATION-RESULTS.png)
</details>

<details>
    <summary>help-info.js Validation Results</summary>
  
  ![](documentation/README-images/help-info.js-VALIDATION-RESULTS.png)
</details>

<details>
    <summary>save-load.js Validation Results</summary>
  
  ![](documentation/README-images/save-load.js-VALIDATION-RESULTS.png)
</details>

<details>
    <summary>alerts.js Validation Results</summary>
  
  ![](documentation/README-images/alerts.js-VALIDATION-RESULTS.png)
</details>

<details>
    <summary>media-queries.js Validation Results</summary>
  
  ![](documentation/README-images/media-queries.js-VALIDATION-RESULTS.png)
</details>

### Lighthouse Report
I used [Google Chrome DevTools Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) was used to test performance, accessibility, best practises and SEO.

<details>
  <summary>Homepage Lighthouse Report</summary>

  ![](documentation/README-images/LIGHTHOUSE-REPORT.png)
</details>

## Deployment

## Features for the Future

## Bugs & Errors

## Technologies Used

### Languages Used
### Frameworks, Libraries & Programs Used

## Credits

### Code 
### Media 
### Inspiration
