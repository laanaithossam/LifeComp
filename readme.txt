test teamcity
{
  "name": "lifecomp",
  "version": "1.0.0",
  "description": "LifeComp solution",
  "scripts": {
    "build": "rm -rf dist && tsc -p src", //Removes the compiled files by TypeScript.
    "start": "http-server -c-1 -o -p 8875 .",
    "pretest": "npm run build",//Runs the build “command” before the “test” command.
    "test": "karma start karma.conf.js",
    "posttest": "node_modules/.bin/remap-istanbul -i coverage/coverage-final.json -o coverage -t html", //Updates the coverage report remapping the result to TypeScript files.
    "coverage": "http-server -c-1 -o -p 9875 ./coverage", //Shows the coverage report.
    "tsc": "tsc --w",
    "test": "karma start karma.conf.js" //Execute tests with Karma.
  },
  "repository": {
    "type": "git",
    "url": "https://lifecomp.visualstudio.com/_git/LifeComp"
  },
  "author": "HLT/DFE",
  "license": "ISC",
  "devDependencies": {
    "chai": "^3.5.0",
    "gulp": "^3.9.1",
    "gulp-shell": "^0.5.2",
    "http-server": "^0.9.0", //To run a simple server and see our coverage reports.
    "jasmine-core": "^2.5.1", //Our testing framework.
    "karma": "^1.3.0", //Our test runner.
    "karma-chai": "^0.1.0",
    "karma-chrome-launcher": "^2.0.0",
    "karma-coverage": "^1.1.1", //To create Coverage reports
    "karma-jasmine": "^1.0.2", //Karma adapter for Jasmine framework.
    "karma-jasmine-html-reporter": "^0.2.2",
    "karma-phantomjs-launcher": "^1.0.2",
    "karma-typescript-preprocessor": "^0.2.1",
    "remap-istanbul": "^0.6.4", //To map our coverage in JS files to TypeScript files
    "systemjs": "^0.19.38", //Module loader.
    "typescript": "^1.8.10" //TypeScript compiler.
  },
  "dependencies": {
    "es6-promise": "^3.2.1",
    "es6-shim": "^0.35.1",
    "zone.js": "^0.6.17",
    "rxjs": "5.0.0-beta.6",
    "reflect-metadata": "0.1.2"
  }
}
