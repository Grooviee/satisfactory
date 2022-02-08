# Contribution Guide

This tool is develop with @ React & TypeScript with help of **npm**. 

## Setting up
After you clone this repository, you must install npm dependencies.
```shell
$ git clone https://github.com/JZechy/satisfactory-manager.git
$ npm install
```

### Running
Application can be run with `npm run`
```shell
$ npm run start
```
This command will start live webserver, by default hooked to [http://localhost:3000](http://localhost:3000)

### Building
To create a production build use
```shell
$ npm run build
```

## Folder structure

### public
This folder contains files, that can be directly accessed by user or are not intended to be includes in `src`. This
folder contains images and third party css, js libraries.

### src
Source codes of application.

## Development
This tool is written in TypeScript with focus on strict typing. For custom structure types we are using folder `@types`.
Every method & parameter should have defined types, and `any` should not be used.

### Naming conventions
| Code                        | Convention  |
| --------------------------- | ----------- |
| Classes, Enums & Interfaces | PascalCase  |
| Class members               | camelCase   |
| Variables                   | camelCase   |
| Types                       | PascalCase  |
| Type members                | camelCase   |
| Files                       | PascalCase  |

Files names are reflecting its containing structure.
