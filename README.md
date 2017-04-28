# ![alt tag](http://t07.deviantart.net/ZrlUPH6sibykNgvHp04j3HDXdis=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre12/b2c7/th/pre/f/2015/364/0/f/the_brave_little_toaster_by_fawfulthegreat64-d9m4o87.png) React-Toaster

A Client-Side React Boilerplate with Webpack, Hot Reloading, SCSS, Material-UI, Testing, Redux, Helmet, and others;

## Installation

To Use This Boilerplate

```javascript
//To Install
git clone https://github.com/weatherfordmat/React-Toaster.git
cd React-Toaster
rm .git
npm install

/*
1. Go to auth0.com create an account, create a 'client', and find your keys;
2. Add a keys.js file in client/src/app

Add your urls to Auth0 Callback Urls;
Keys.js will look like this:
export const key1 = "Your Client Id";
export const key2 = "Your Domain";
*/

//To Start
npm start

//To test
npm run test
```

## Usage

This project is made for a project that needs state management, quick front-end scaffolding, user authentication, and testing capabilities.

| Packages        | Why           | How  |
| -------------   |:-------------:| ----:|
| SCSS   | Next Gen CSS: Easier to Manage |  import style as ('/styles/sample.scss') |
| Redux | Management For State Among Components     | Add Reducers, Actions, Connect |
| Helmet | Less Passing of Props to Routers For Header Props   | Add Helmet Component |
| Material-UI | Easy Styling | Import Components From Material-UI |
| Jest | Enables testing of your components with Enzyme | add .test.js to the end of a file |

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

Original Project Began in February 2017;

## Notes 

1. The Following message will likely appear in the console: ```Warning: [react-router] You cannot change <Router routes>; it will be ignored```. It can safely be ignored. It is the result of using React-Router 3 and Hot-Module-Replacement. See https://github.com/gaearon/react-hot-loader/issues/298.

2. If you want a more strict linting process, add ```extends: "airbnb"``` above rules to the .eslintrc file.

## Credits

Contributors: @weatherfordmat

## License

Copyright (c) 2017 Matthew Weatherford

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
