# VSCode Shell Runner

[![Release](https://img.shields.io/github/v/release/thomas-serment/VSCode-Shell-Runner)](https://github.com/thomas-serment/VSCode-Shell-Runner/releases/latest)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Run shell scripts from VS Code with a single click.

## Features

- A **▶** button in the editor title bar for every `.sh` file
- Runs the script with `bash` in a dedicated terminal, from the script's folder
- Saves unsaved changes before running
- No configuration required

## Installation

1. Download the latest `.vsix` from the [Releases](https://github.com/thomas-serment/VSCode-Shell-Runner/releases/latest) page
2. In VS Code, run **Extensions: Install from VSIX...** and select the file

## Usage

Open a `.sh` file and click **▶** in the editor title bar, or run **Shell Runner: Run Shell Script** from the Command Palette.

## Requirements

`bash` must be on your `PATH` (native on Linux and macOS, Git Bash on Windows). The extension is disabled in Restricted Mode.

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## License

[MIT](LICENSE)
