# My Button Extension

A simple and useful Visual Studio Code extension that adds custom buttons to your editor interface.

## Features

- Adds a "Say Hello" button to the editor title bar
- Adds a "Count Lines" button to count lines in the current file
- Context menu integration for quick access to features

## Requirements

- Visual Studio Code version 1.100.0 or higher

## Installation

1. Download the `.vsix` file from the releases page
2. Open VS Code
3. Go to the Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`)
4. Click on the "..." menu at the top of the Extensions view
5. Select "Install from VSIX..."
6. Choose the downloaded `.vsix` file

## Usage

The extension adds two buttons to your editor:

1. **Say Hello** - Shows a greeting message
2. **Count Lines** - Counts and displays the number of lines in the current file

You can access these features through:
- The editor title bar buttons
- The editor context menu (right-click menu)

## Development

### Prerequisites

- Node.js
- npm
- Visual Studio Code

### Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/my-button-extension.git
```

2. Install dependencies:
```bash
npm install
```

3. Compile the extension:
```bash
npm run compile
```

### Development Commands

- `npm run compile` - Compile the extension
- `npm run watch` - Watch for changes and compile automatically
- `npm test` - Run tests

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Visual Studio Code Extension API
- TypeScript
- Node.js

## Contact

Your Name - [@your-twitter](https://twitter.com/your-twitter)

Project Link: [https://github.com/your-username/my-button-extension](https://github.com/your-username/my-button-extension)