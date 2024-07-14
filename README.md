cat << 'EOF' > README.md
# URL Shortener

This is a simple URL shortener application built with Node.js, Express, and TinyURL. It provides a user-friendly web interface to shorten URLs and display the shortened URL.

## Project Structure

\`\`\`
url-shortener/
├── public/
│   ├── css/
│   │   └── styles.css
│   └── images/
│       └── logo.png
├── views/
│   └── index.ejs
├── app.js
└── package.json
\`\`\`

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12.x or higher)
- [npm](https://www.npmjs.com/)

## Setup

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Add a logo image**:
   Place your logo image in the \`public/images\` directory and name it \`logo.png\`.

## Running the Application

1. **Start the server**:
   \`\`\`bash
   node app.js
   \`\`\`

2. **Open your web browser** and navigate to \`http://localhost:3000\`.

## Project Components

### \`public/css/styles.css\`

Contains the CSS styles for the application, including layout and visual enhancements.

### \`public/images/logo.png\`

An image file used as the logo for the application.

### \`views/index.ejs\`

An EJS template file that renders the web interface for the URL shortener. It includes a form for inputting URLs and displays the shortened URL.

### \`app.js\`

The main application file that sets up the Express server, handles routes, and integrates with the TinyURL service to shorten URLs.

## Usage

1. **Open the application** in your web browser.
2. **Enter a URL** in the input field.
3. **Click the "Shorten" button** to shorten the URL.
4. The shortened URL will be displayed on the page.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
EOF
