# Teenypings Database App

A static HTML application that works like an app for browsing the Teenypings database. This app allows users to browse and filter Teenypings from seasons 1-3 by name, color, spell type, and season.

## Features

- Browse all Teenypings from seasons 1-3
- Filter by season, color, and spell type
- Search by name or description
- View detailed information for each Teenyping
- Responsive design for both desktop and mobile devices
- Swipe and scroll through thumbnails
- Works as a static site (no server required)

## Data Source

All data is scraped from the [Catch! Teenieping Wiki](https://catchteenieping.fandom.com/wiki/List_of_Teeniepings) and stored in both CSV and JSON formats.

## Project Structure

```
teenypings_project/
├── app/                  # The static HTML application
│   ├── index.html        # Main HTML file
│   ├── styles.css        # CSS styles
│   ├── app_with_data.js  # JavaScript with embedded data
│   └── teenypings_data.json  # JSON data (for reference)
├── data/                 # Raw data files
│   ├── teenypings_data.csv   # CSV format of all Teenypings data
│   └── teenypings_data.json  # JSON format of all Teenypings data
└── README.md             # This file
```

## Deployment Instructions

### Local Testing

To test the app locally, simply open the `app/index.html` file in your web browser.

### GitHub Pages Deployment

To deploy this app to GitHub Pages:

1. Create a new GitHub repository
2. Upload all files from the `app` directory to the repository
3. Go to the repository settings
4. Scroll down to the "GitHub Pages" section
5. Select the branch you want to deploy (usually `main` or `master`)
6. Click "Save"
7. Your site will be published at `https://yourusername.github.io/repository-name/`

## Development

If you want to modify the app:

- The `app_with_data.js` file contains both the Teenypings data and the application logic
- The `styles.css` file contains all the styling
- The `index.html` file contains the structure of the app

## Data Fields

Each Teenyping entry contains the following fields:

- `name`: The name of the Teenyping
- `season`: The season number (1-3)
- `episode`: The episode where the Teenyping appears
- `description`: A description of the Teenyping
- `power`: The Teenyping's power
- `transformation`: Any transformation the Teenyping can perform
- `color`: The color theme of the Teenyping
- `spell_type`: The spell type of the Teenyping
- `image_url`: URL to the Teenyping's image

## Credits

Data sourced from [Catch! Teenieping Wiki](https://catchteenieping.fandom.com/wiki/List_of_Teeniepings)
