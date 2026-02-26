# WebOS - Personal Web-based Operating System

A minimal, fully functional web-based operating system that runs in your browser.

## Features

- **Desktop Environment**: Beautiful gradient background with draggable icons
- **Window Manager**: Draggable, resizable windows with minimize, maximize, and close controls
- **File Explorer**: Create, view, and manage files stored in browser's local storage
- **Text Editor**: Edit and save text files
- **Terminal**: Command-line interface with basic commands
- **Settings**: Customize appearance (background color)
- **Taskbar**: Shows open applications and live clock
- **Persistence**: All files and settings saved in browser's local storage

## How to Use

1. Open `index.html` in any modern web browser
2. Double-click desktop icons to open applications
3. Drag windows by their title bar
4. Resize windows using the bottom-right corner
5. Use taskbar to switch between open windows

## Applications

### Files
- Create new files by entering a name and clicking "Create File"
- Click on any file to open it in the Text Editor

### Text Editor
- Edit file content
- Save files to the file system

### Terminal
Available commands:
- `help` - Show available commands
- `clear` - Clear terminal screen
- `date` - Show current date and time
- `ls` - List all files
- `echo [text]` - Print text to terminal

### Settings
- Change desktop background color
- Apply or reset settings

## Technical Details

- Single HTML file with embedded CSS and JavaScript
- No external dependencies
- Uses localStorage for data persistence
- Fully responsive window management
- Modern gradient UI design

## Browser Compatibility

Works on all modern browsers that support:
- HTML5
- CSS3
- ES6 JavaScript
- localStorage API
