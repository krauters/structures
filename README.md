<div align="center">

<a href="https://www.linkedin.com/in/coltenkrauter/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
![License](https://img.shields.io/github/license/krauters/structures)
![Visitors](https://visitor-badge.laobi.icu/badge?page_id=krauters.structures)

![Version](https://img.shields.io/github/v/release/krauters/structures)
[![npm version](https://img.shields.io/npm/v/@krauters/structures.svg?style=flat-square)](https://www.npmjs.org/package/@krauters/structures)
![GitHub Stars](https://img.shields.io/github/stars/krauters/structures)
![Forks](https://img.shields.io/github/forks/krauters/structures)

![GitHub Issues](https://img.shields.io/github/issues/krauters/structures)
![Open PRs](https://img.shields.io/github/issues-pr/krauters/structures)
![Commits per Month](https://img.shields.io/github/commit-activity/m/krauters/structures)
![Contributors](https://img.shields.io/github/contributors/krauters/structures)
![Last Commit](https://img.shields.io/github/last-commit/krauters/structures)

[![Install Size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=@krauters/structures&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=@krauters/structures)
![Code Size](https://img.shields.io/github/languages/code-size/krauters/structures)
![Repo Size](https://img.shields.io/github/repo-size/krauters/structures)

</div>

# @krauters/structures

`@krauters/structures` is a TypeScript library providing robust and well-defined enums, interfaces, and types for common structures in modern applications. It’s built to simplify shared data modeling, enhance type safety, and support consistent code standards across projects.

## Usage

This library is particularly useful for projects needing a shared set of structures, enums, and data models. For instance:

```ts
import { HttpStatus, LanguageCode, Env } from '@krauters/structures'

// Example usage
const currentEnv: Env = Env.Production

if (currentEnv === Env.Development) {
    console.log('Running in development mode')
}

function handleResponse(status: HttpStatus) {
    if (status === HttpStatus.Ok) {
        console.log('Request succeeded!')
    } else if (status === HttpStatus.NotFound) {
        console.error('Resource not found')
    }
}
```

## Installation

Add `@krauters/structures` to your project:

```zsh
npm install @krauters/structures@latest
```

## Overview

`@krauters/structures` provides various enums and types for structuring application data. The core elements include:

- **Environment (Env)**: Enums for standard environment types like `Development`, `Production`, and `Pipeline`.
- **HTTP Status Codes (HttpStatus)**: Enums for common HTTP statuses (e.g., `Ok`, `NotFound`, `InternalServerError`).
- **Language Codes (LanguageCode)**: ISO language codes for major languages, making localization simple.
- **File Metadata (FileExtension, FileEncoding)**: Standard file extensions and encoding types for easier file handling.
- **Response Types (ResponseType)**: Defines response formats such as `json`, `blob`, and `text`.

These structures help keep code clean and predictable, while TypeScript’s type-checking reduces errors.

## Contributing

We’re always looking to improve this library. Contributions are welcome, whether it’s adding new structures, improving existing ones, or updating documentation. Please open an issue or pull request if you’d like to contribute!

## License

Licensed under the ISC License. For more information, see the [LICENSE](./LICENSE) file.

## 🥂 Thanks, Contributors!

Special thanks to all who’ve helped improve this project.

<a href="https://github.com/krauters/structures/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=krauters/structures" />
</a>

<br />
<br />
<a href="https://www.buymeacoffee.com/coltenkrauter"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=coltenkrauter&button_colour=FFDD00&font_colour=```&font_family=Cookie&outline_colour=```&coffee_colour=ffffff" /></a>
