# Dashboard Kit

A responsive admin dashboard UI built with Bootstrap 5, featuring an overview page with various statistics, charts, and task management components.

## Features

- Modern UI design based on the Figma template
- Fully responsive layout
- Interactive statistics cards
- Chart.js integration for trend visualization
- Task management with checkbox interaction
- Ticket management interface with sorting and filtering options
- SCSS preprocessing for custom styling
- Multiple pages: Overview and Tickets

## Pages

### Overview
- Statistics dashboard with cards showing key metrics
- Interactive trends chart
- Unresolved tickets list
- Task management with interactive checkboxes

### Tickets
- Complete ticket listing with customer details
- Priority badges (High, Normal, Low)
- Sortable and filterable table
- Pagination controls

## Technologies Used

- HTML5
- CSS3/SCSS
- JavaScript
- Bootstrap 5
- Chart.js
- Node.js (for development)

## Getting Started

### Prerequisites

- Node.js
- NPM

### Installation

1. Clone the repository or download the files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Development

To run the development server and SCSS compiler:

```bash
npm start
```

This will:
- Watch for SCSS changes and compile to CSS
- Start a development server with auto-reload
- Open the project in your default browser

## Project Structure

```
dashboard-kit/
├── css/
│   └── style.css
├── js/
│   └── main.js
├── scss/
│   └── style.scss
├── index.html
├── package.json
└── README.md
```

## Customization

You can customize the dashboard by modifying the SCSS variables in `scss/style.scss`:

```scss
$primary: #3751FF;
$dark: #363740;
$light-bg: #F7F8FC;
$text-muted: #9FA2B4;
$border-color: #DFE0EB;
```

## License

ISC 