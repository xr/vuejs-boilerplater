# Backbonejs boilerplate - Grunt Bower + RequireJS + SASS + Jasmine Boilerplate

Backbonejs/Requirejs based boilerplate.

## Installation

    > npm install -g bower grunt-cli

    > npm install

## Building

By default, to trigger **dev** build

    > grunt

To trigger **release** build

    > grunt release

Watch files changes

    > grunt watch


## Kick Off the Server

    > npm start

To test the service in **release** mode, use

    > grunt release
    > NODE_ENV=production node server/server.js

###  Project layout

#### App

    client/             The client-side source code
    client/index.html   The HTML entry point
    client/app          Application source code
    client/css          Application CSS files


####  Build System

    components/          The 3rd party dependencies
    Gruntfile           The Grunt build configuration
    bower.json          The Bower components
    .bowerrc            The Bower directory overrides
    package.json        The build level dependencies

###  Server Side

    server/server.js    The simple static file server

### Build Results

    dev/                Stagging debug mode
    dist/               Minified & optimised version

####  Test

    spec/               Spec test file


## TODO

* finalizing
* Release Mode
* Sass/Handlerbar
* Test

## License
MIT