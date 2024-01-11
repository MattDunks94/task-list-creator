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
    - [Created Task Row](#created-task-row)
      - [Rearrange Tasks](#rearrange-tasks)
      - [Markdown / Assign Tasks](#markdown--assign-tasks)
      - [Removing Tasks](#removing-tasks)
    - [Task Counter](#task-counter)
    - [Settings Dropdown](#settings-dropdown)
      - [Save List](#save-list)
      - [Load List](#load-list)
      - [Clear List](#clear-list)
    - [Alerts](#alerts)
    - [Top of List Button](#top-of-list-button)
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
1. **Add Tasks:** As a user I can add tasks so that I can create a task list.
2. **Remove Tasks:** As a user I can remove tasks so that I can remove completed or unwanted tasks from task list.
3. **Completed Task Markdown:** As a user I can markdown completed tasks so that I can visually see what tasks have been completed.
4. **Important Task Markdown:** As a user I can markdown important tasks so that I can visually see what tasks are important.
5. **Modify Tasks Order Via Up and Down Buttons:** As a user I can modify my tasks order via up and down buttons so that I can place tasks in desired order.
6. **View App Features and/or Instructions:** As a user I can get help/assistance via navigation bar so that I know how to operate the application.
7. **Save Task List:** As a user I can save my task list so that I can add/edit/view my list at a later time.
8. **Load Task List:** As a user I can load my task list so that I can continue to add, edit and view my tasks after closing/reopening application.
9. **Avoid Duplicates:** As a user I can visually see whether I've added a duplicate so that I don't add the same task more than once.
10. **View Task Total:** As a user I can visibly see the total amount of tasks so that I know how many tasks to carry out.

### Design
#### - Mockup Diagrams:
#### - Colour Palette:
<img src="documentation/README-images/BLACK-COLOUR-PALETTE.png" width="500">
<img src="documentation/README-images/WHITE-COLOUR-PALETTE.png" width="500">

The colour palette for this app consists of mainly black and white, creating a monochrome theme. The other colours, that are used within this app, are [Bootstrap V4.3 Colors](https://getbootstrap.com/docs/4.3/utilities/colors/#color) . These colours are mainly used for alerts and buttons and stand out from the monochrome theme.

#### - Typography:
#### - Imagery:

## Features
### Help Information:
(For Large Screens, Tab List) <br>
<img src="documentation/README-images/HELP-INFO-LRG.png" width="600">

(For Small Screens, Accordion Collapse)<br>
<img src="documentation/README-images/HELP-INFO-SM.png" width="350" height="600">

The help information feature contains information on how to operate the app. This feature appears via a button click, this button being<br> 
[Font Awesome's Question Icon](https://fontawesome.com/search?q=question&o=r&m=free) in the top left of the screen, and is displayed using [Bootstrap V4.3 Modal](https://getbootstrap.com/docs/4.3/components/modal/). There are 2 variations of this feature for certain screen types. The 'Help Info' for large screens is [Bootstrap V4.3 Tablist Element](https://getbootstrap.com/docs/4.3/components/list-group/#tab). 
For smaller screens, the 'Help Info' feature is displayed using [Bootstrap V4.3 Accordion Collapse](https://getbootstrap.com/docs/4.3/components/collapse/#accordion-example). The reason for using two different variations to display the information is because when resizing the window, the tab list variation did not work, was not very responsive. This is because it is displayed horizontally and needed to change to a vertical list for smaller screens. I originally changed the tab list to a vertical list, for smaller devices, but this caused the 'Help Info' feature to be too long, meaning the user would have to scroll down to reveal all app operations. This lead to me looking for an alternative, hence the accordion variation.<br>
The accordion variation is ideal for smaller screens because each 'Help Info' section can be collapsed which saves space on screen and avoids the user having to scroll down.

### Adding Tasks
![](documentation/README-images/ADD-TASK-INPUT-BTN.png)<br>
The adding tasks feature allows users to add their own tasks to their task list. This feature consists of an input element and [Bootstrap v4.3 Button Component](https://getbootstrap.com/docs/4.3/components/buttons/). The input element includes a placeholder asking the user 'What tasks need doing?', indicating to the user that this is the element where you type in your tasks. The button consists of 'Add Task' text along with [Font Awesome's Plus Icon](https://fontawesome.com/icons/plus?f=classic&s=solid), indicating to the user that this button will add something.<br> 
When this 'Add Task +' button is clicked, it'll append their task to their list below this feature but only if they've typed a task in the input element (see [Alerts](#alerts) for more info). Alternatively, the user can press the 'Enter' key on their keyboard, instead of clicking the button, to carry out the same operation.

### Created Task Row
![](documentation/README-images/CREATED-TASK-ROW.png)
Once the user has created a task, it is appended, along with other features, in it's own 'task row'. A created task row consists of 4 columns that include the following features:<br>
- Task Name (1st Column)
- Up Button (2nd Column)
- Important Button (2nd Column)
- Down Button (2nd Column)
- Done Button (3rd Column)
- Remove Button (4th Column)

This 'Task Row' is created using [Bootstrap V4.3 Horizontal List Group](https://getbootstrap.com/docs/4.3/components/list-group/#horizontal).

### Rearrange Tasks
This feature allows user's to rearrange their tasks within their list. The user can achieve this by simply clicking on either the up or down buttons, which are displayed in the second column within the [Created Task Row](#created-task-row).<br>
Clicking the up button moves the desired task up one place and clicking the down button moves the desired task down one place. Both buttons consist of [Font Awesome](https://fontawesome.com/) icons, [Square Caret Up Icon](https://fontawesome.com/icons/square-caret-up?f=classic&s=regular) for the up button and [Square Caret Down Icon](https://fontawesome.com/icons/square-caret-down?f=classic&s=regular) for the down button.<br>
This feature is useful for arranging tasks in level of importance (top being important, bottom being less important).

### Markdown / Assign Tasks
This feature gives user's the ability to markdown/assign tasks as 'done' or 'important'. <br>

To markdown tasks as 'done' the user simply clicks on the 'Done' button, which is displayed within the 3rd column in the [Created Task Row](#created-task-row) and is a toggle feature. Once clicked, the user's created task name is highlighted with a trasparent green background, solid green left-border and the text striked through indicating the task is done. Being a toggled feature, when clicked again these highlighted effects are removed from the created task name element.<br>
I used [Bootstrap V4.3 Success Button](https://getbootstrap.com/docs/4.3/components/buttons/) as the 'Done' button because the colour (green) visually indicates something successful, positive and adding a striked through style on the task name text creates a checklist effect. 
<details>
    <summary>Done Task Markdown</summary>
  
  ![](documentation/README-images/DONE-TASK.png)
</details>

To assign a task as 'important' the user clicks the 'i' button, which is displayed within the 2nd column in the [Created Task Row](#created-task-row), between the up and down buttons, and is also a toggle feature. Once clicked, the user's created task name is highlighted with a trasparent red background, solid red left-border and red text colour. This button click also disables the 'Remove' button, this avoids an important task from being removed by accident.<br>
Being a toggled feature, when clicked again these highlighted effects are removed from the created task name element and the 'Remove' buttons functionality is reinstated. 
<br>
This button consists of [Font Awesome's Circle Exclamation Icon](https://fontawesome.com/icons/circle-exclamation?f=classic&s=solid) in white and styled with a  transparent red background (see [Created Task Row](#created-task-row)), but when clicked it is then styled in a solid red indicating the button has been clicked. I decided to style this button in red because red indicates a sense of importance, urgency. 

<details>
    <summary>Assigned Important Task</summary>
  
  ![](documentation/README-images/IMPORTANT-TASK.png)
</details>

### Removing Tasks
This feature allows the user to remove any unwanted or completed tasks. The user can achieve this by clicking on the 'Remove' button, displayed within the 4th column in the [Created Task Row](#created-task-row). I used [Bootstrap V4.3 Danger Button](https://getbootstrap.com/docs/4.3/components/buttons/) as the 'Remove' button because of the colour of the button being red which indicates danger, warning. 

### Task Counter
![](documentation/README-images/TASK-COUNTER.png)<br>
The Task Counter feature keeps count of the number of existing tasks. Everytime the user adds a task the counter increments, everytime the user removes a task the counter decrements. 

### Settings Dropdown
![](documentation/README-images/SAVE:LOAD-DROPDOWN.png)<br>
This dropdown contains 3 features:
- Save Task List
- Load Saved Task List
- Clear Task List

These features are accessible via [Font Awesome's Gears Icon](https://fontawesome.com/icons/gears?f=classic&s=solid) which is displayed in the top right corner of a device screen. When clicked [Bootstrap V4.3 Dropleft Dropdown Component](https://getbootstrap.com/docs/4.3/components/dropdowns/) is revealed consisting of the following 3 features:

#### Save List
If the user wants to save their created task list they can do by clicking on the 'Save' button. This feature saves the user's task list to the [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), meaning their list is accessible even when closing the app/window.<br>
This button is a [Bootstrap V4.3 Primary Button](https://getbootstrap.com/docs/4.3/components/buttons/) and consists of [Font Awesome's Floppy Disk Icon](https://fontawesome.com/icons/floppy-disk?f=classic&s=solid). 

#### Load List
If the user has a saved task list, they can then load their list via the 'Load' button. This feature, when clicked, renders the user's saved task items, in the order the tasks were created, to the DOM. This button is a [Bootstrap V4.3 Secondary Button](https://getbootstrap.com/docs/4.3/components/buttons/), as it is the second item in the [Settings Dropdown](#settings-dropdown), and includes [Font Awesome's File Arrow Up Icon](https://fontawesome.com/icons/file-arrow-up?f=classic&s=solid). 

#### Clear List
If the user wants to remove all tasks and start a new list they can achieve this by clicking on the 'Clear' button, which is the 3rd item in the [Settings Dropdown](#settings-dropdown). When clicked, the users task list is deleted, not just from the DOM but also from local storage meaning they cannot reload their recently deleted list. This button is a [Bootstrap V4.3 Danger Button](https://getbootstrap.com/docs/4.3/components/buttons/) and has [Font Awesome's Trash Icon](https://fontawesome.com/icons/trash?f=classic&s=solid). 

### Alerts
There are several alerts within this app. Alerts are displayed when the user operates a feature. These operations include:
<details>
    <summary>- Saving Task List (Success Alert)</summary>
  
  ![](documentation/README-images/SAVED-LIST-ALERT.png)
</details>
<details>
  <summary>- Load Save Task List (Success Alert)</summary>

  ![](documentation/README-images/LOADED-LIST-ALERT.png)
</details>
<details>
  <summary>- Clearing Task List (Success Alert)</summary>

  ![](documentation/README-images/CLEARED-LIST-ALERT.png)
</details>
<details>
  <summary>- Attempt to add task when input is empty (Info Alert)</summary>

  ![](documentation/README-images/NO-TASK-ALERT.png)
</details>
<details>
  <summary>- Attempt to add task that already exists (Warning Alert)</summary>

  ![](documentation/README-images/TASK-EXISTS-ALERT.png)
</details>

All alerts use [Bootstrap V4.3 Alerts Component](https://getbootstrap.com/docs/4.3/components/alerts/) and are displayed at the top of the DOM. 

### Top of List Button
![](documentation/README-images/BTT-BTN.png)<br>
If the user has added several tasks, so many that they have to scroll down to reveal all their tasks, a 'Top of List' button appears underneath their list.
When the user scrolls down to a certain point the 'Top of List' button appears and when clicked it disappears and takes the user to the top of their task list.
This button is a [Bootstrap V4.3 Button](https://getbootstrap.com/docs/4.3/components/buttons/) and is modified in the style.css file. 

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
I used [GitHub Pages](https://pages.github.com/) for the deployment process.

## Features for the Future
- When saving task list and loading it, it renders the tasks in the order they were added. If user previously assigned important, done tasks and/or adjusted the order of their tasks, when loading their list these assingments and adjustments are lost. New feature would include saving these task assignments and order allowing the user to load their list the way they left it, if modified.<br>  
- The ability to save and load multiple task lists. 

## Bugs & Errors
- There's an issue where the 'Done' & 'Remove' buttons did not change size when changing between device screens. This happens when you add tasks in one device screen size, then add a new task and then resize to a larger device screen size. The newly added tasks have larger 'Done' & 'Remove' buttons within it's [Created Task Row](#created-task-row). I only encountered this bug when switching between device screens using Developer Tools, not on actual devices. 
![](documentation/README-images/LRG-BTN-BUG.png)

## Technologies Used

### Languages Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [Javascript](https://en.wikipedia.org/wiki/JavaScript)
- 
### Frameworks, Libraries & Programs Used
- [Bootstrap V4.3](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
  - Bootstrap framework is used for styling, structuring and reponsive development.
- [Font Awesome](https://fontawesome.com/)
  - Fontawesome was used to add icons to several button elements.
- [Google Fonts](https://fonts.google.com/)
  - Google fonts was used to import the 'Courier Prime' font.   
- [Git](https://git-scm.com/)
  - Git was used for version control and using the Gitpod terminal to commit and push to GitHub. 
- [GitHub](https://github.com/)
  - GitHub is used to store the projects code after being pushed from Git. 
- [Pixelmator](https://www.pixelmator.com/pro/)
  - I used Pixelmator to edit the background image. 

## Credits

### Code 
- I got some code off from [StackOverFlow.com](https://stackoverflow.com/).

### Media 
- The background image is from [Unsplash.com](https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm90ZXBhZHxlbnwwfHwwfHx8MA%3D%3D).

