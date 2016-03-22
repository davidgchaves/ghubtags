# Notes on *Henrik Joreteg's Workshop: Building Modern Web Apps*

## Links and Resources

### Static Analysis Tools

- [`standard`](https://github.com/feross/standard)
- [`eslint`](http://eslint.org)
- [`jscs`](http://jscs.info)

### Tools

- [`local-links`](https://github.com/lukekarrys/local-links): tool for determine if an event or anchor element should be handled locally.
- [`qs`](https://github.com/ljharb/qs): Serialize and deserializing querystrings.
- [`gatekeeper`](https://github.com/prose/gatekeeper)

### Links

- [`JSON Objects API`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON):
  - [`stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
  - [`parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).
  - Same `API` as `qs`.
- [`window.location`](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)
- [`Function.prototype.call`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [`Function.prototype.apply`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [Backbone Docs](http://backbonejs.org/)


## 1. Foundations of a Web Application

### Native Web Apps vs Server-side Apps

In **Server-side Apps** the code that you write is going to run in a server, somewhere, and you end up responding with `html`, while in **Native Web Apps** we are sending the App itself to be run in the browser:

```html
<!doctype html>
<script src="app.js"></script>
```

### Universal Apps

The interesting part: Being able to respond with (statically pre-rendered) populated `html`.

### Dev Mode vs Build Mode

#### Run the Dev Server:

```console
✔ npm run start
```

Output:

```console
Listening at http://localhost:3000
```

#### Run the Production Build:

```console
✔ npm run build
```

Output:

```console
             Asset       Size  Chunks             Chunk Names
 ghubtags.0.0.1.js     130 kB       0  [emitted]  main
ghubtags.0.0.1.css   21 bytes       0  [emitted]  main
        index.html  265 bytes          [emitted]
```

### `Webpack`

#### `Webpack` configuration with `hjs-webpack`

```javascript
var getConfig = require('hjs-webpack');

module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  clearBeforeBuild: true
});
```

#### `Webpack` philosophy

You `import` (or `require`) everything:

- js files,
- css files,
- images,

```javascript
import React  from 'react'
import styles from './styles/main.css'
```

#### TODO: Investigate (not working)

Add this line to `webpack.config.js`:

```javascript
hostname: 'myMachineName.local'
```

Then I should be able to connect from my phone to that server with just `'myMachineName.local:3000'`


## 2. Github Integration

### How OAuth works

#### The Players

1. The Application (aka `Jimmy's Lawyer`).
2. The User (aka `Trouble Jimmy`).
3. The Source of your Data (aka `The Mob Boss`).

#### The Story

1. `Trouble Jimmy` wants his `Lawyer` to help him with a problem he has.
2. `Jimmy's Lawyer` sends `Trouble Jimmy` to see `The Mob Boss`.
3. `Trouble Jimmy` goes to `The Mob Boss`' door and authenticate himself.
4. `Trouble Jimmy` tells `The Mob Boss` to give `Jimmy's Lawyer` all the info `Jimmy's Lawyer` request about him (`Trouble Jimmy`), so `Jimmy's Lawyer` can help him.
5. At this point `Trouble Jimmy` is done. He's out of the picture from now on.
6. `The Mob Boss` gives `Jimmy's Lawyer` a `public code` (*"He knows what to do with it"* he says).
7. At this point all we've done is proving that `Jimmy's Lawyer` has authority from `Trouble Jimmy` to get his data, but we still need to prove that `Jimmy's Lawyer` is who he says he is (anybody could have that `public code`)
8. `Jimmy's Lawyer` takes the `public code`.
9. `Jimmy's Lawyer` proves who he is to `The Mob Boss`, and gets a `secret key` (auth token) from `The Mob Boss`.
10. `Jimmy's Lawyer` can get any info about `Trouble Jimmy` from `The Mob Boss` thanks to that `secret key`.

`Scopes`: List of things `Jimmy's Lawyer` needs to access about `Trouble Jimmy`.

### Implementing OAuth

Steps:

1. Define a `Login route` in the `Router`.
2. Define a `Login handler` in the `Router`.
4. Define an `authCallback route` in the `Router`.
5. Define an `authCallback handler` in the `Router`.
6. Set up a Microservice to safely handle `the secret`.
6. Define a `Logout route` in the `Router`.
7. Define a `Logout handler` in the `Router`.

When you register an application with an OAuth provider (Github, Twitter, Facebook, ...), he is going to give you a key-pair:

1. `client_id` is public (you can share it).
2. `secret` is secret (what proves you are who you say you are).

### Keeping your `secret` secret

Implement a microservice whose only purpose is to keep `the secret` secret...

...or simply use [`gatekeeper`](https://github.com/prose/gatekeeper)

### `window.location` vs `Ampersand.Router`'s `redirectTo`

Whenever you re-assign `window.location` the browser does a full refresh.

On the other hand `this.redirectTo(newUrl)` redirects to `newUrl` and prevents `this` url (the one from the callback) to be stored in the `history` (aka *Don't mess with my back button*).


## 3. Frameworks

### `Backbone` as *the* Reference Implementation

*"When we hire somebody at &yet, one of the first things we tell her to do is to read the entire Backbone documentation.*

*Because, it's a really good explanation of the various pieces of this problems you are going to have to solve.*

*It's almost the reference implementation."*

[Backbone Docs](http://backbonejs.org/)

### Observable Objects vs Regular Objects

- **Observable Objects**: You can register `change handlers` (if this property changes, I want to know) on them out-of-the-box.
- **Regular JS Objects**: You can't do that out-of-the-box.


## 4. Repo Labels

### `Function.prototype.call` vs `Function.prototype.apply`

- The `call()` method calls a function with a given this value and arguments provided individually.
- The `apply()` method calls a function with a given `this` value and `arguments` provided as an array.
- `call()` accepts an argument list, while `apply()` accepts a single array of arguments.
- [`Function.prototype.call`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [`Function.prototype.apply`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)


## 5. Forms

### `Ampersand.Model`'s `session` vs `Ampersand.Model`'s `props`

The only difference between `props` and `session` is that:

 - `session` states local to the browser.
 - `props` get shipped along when you serialize them.

### Debugging Tips

- Launch the debugger conditionally:

  ```javascript
  if (conditionMet) { debugger; }
  ```

- Press `ESC` in Chrome to access the console.
- Remember to later remove that statement and **DO NOT** check it in the `git repo`.


## 6. XHR Requests

### `PATCH` vs `PUT`

Generally speaking you use:

- `PATCH` when sending a partial update to a given thing.
- `PUT` when sending a complete update (aka replace).

### Life lessons :P

If you don't **"refactor as you go!"**, you're going to create a monster.

### To `form` or not to `form`

Options:

- `onClick` on a Save Button.
- `onSubmit` on a Form.

In a Browser, if you have a `form` and you type something and then you hit `ENTER` it will submit the `form`... and that's what users expect.

If you have a `form` without an action, it's going to do a `GET` on the `url` with `form` encoded parameters in the `url`. If you are handling the submission yourself, you need to `preventDefault()`.

## 7. Security

### Securing `routes`

In `react-router` you can nest Routes, instead of:

```javascript
routes: {
   'repo/:owner/:name': requiresAuth('repoDetail')
}
```

## 8. Deployment

### OAuth *'one for dev, one for prod'*

We need:

- 2 different `client_id`s and `secret`s
- register 2 different applications (2 different auth microservices).

### Universal Javascript

We can take a React Component and say: "give me a string".


## 9. Fat Arrow Syntax

### Anonymous function:

```javascript
<ul>
  xs.map(function (x) {
    return (<li key={x.id}>x.whatever</li>);
  }.bind(this));
</ul>
```

### Fat Arrow (with a block):

```javascript
<ul>
  xs.map((x) => {
    return (<li key={x.id}>x.whatever</li>);
  });
</ul>
```

- Implicitly maintains its parents context (`bind(this)`).

### Fat Arrow (without a block):

```javascript
<ul>
  xs.map((x) =>
    <li key={x.id}>x.whatever</li>
  );
</ul>
```

- The `return` is implied if we don't use `{}`.
- Implicitly maintains its parents context (`bind(this)`).
