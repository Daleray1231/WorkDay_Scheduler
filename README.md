# Work Day Scheduler Readme

## Overview
The Work Day Scheduler is a simple web application that allows users to schedule their work day by entering tasks or events for each hour. It provides a visual representation of past, present, and future time blocks to help users manage their tasks effectively.

## Features
1. **Time Block Styling**
   - The application uses Bootstrap and CSS classes to style time blocks based on the current time.
   - Past time blocks are displayed with a gray background.
   - The present time block is displayed with a red background.
   - Future time blocks are displayed with a green background.

2. **Current Date Display**
   - The current date is dynamically displayed in the header using Day.js.

3. **User Input and Local Storage**
   - Users can enter their tasks or events for each time block in the provided text areas.
   - Clicking the save button for a time block saves the user's input in local storage with the time block's id as the key.
   - When the page is refreshed, the saved user input is loaded from local storage and displayed in the corresponding time blocks.

## Technologies Used
- HTML
- CSS (Bootstrap)
- JavaScript (jQuery and Day.js)
- Local Storage

## Installation
Clone this repository to your local machine: