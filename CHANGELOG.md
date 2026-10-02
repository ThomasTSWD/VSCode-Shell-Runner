# Changelog

All notable changes to this project are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project adheres to [Semantic Versioning](https://semver.org/).

## [1.1.0] - 2026-10-02

### Fixed

- Script paths containing `$`, backticks or quotes are passed safely to bash
- Unsaved changes are saved before the script runs
- Untitled files show a clear error instead of running nothing

### Changed

- Scripts always run with `bash`, from the script's own folder
- Each run replaces the previous Shell Runner terminal instead of opening a new one
- The command is only offered in the Command Palette for `.sh` files
- The extension is disabled in Restricted Mode (untrusted workspaces)

## [1.0.0] - 2026-06-11

### Added

- Play button for `.sh` files, execution via `bash` in the integrated terminal
