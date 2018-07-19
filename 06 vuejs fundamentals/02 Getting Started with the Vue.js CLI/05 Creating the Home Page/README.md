# 06 vuejs fundamentals - 02 Getting Started with the Vue.js CLI - 05 Creating the Home Page

 - Generating content via cli
 - Modify the default page to custom one
 - the template inside the <main> tag
 - Must have the end tag

 ```html
<homepage></homepage>

 instead of

<homepage />

 ```

 - Adding styles in HomePage.Vue

from https://raw.githubusercontent.com/jmcooper/vuejs-fundamentals/master/src/header.css

- Change the template

```html
<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <img src="./assets/build-a-bot-logo.png" class="logo" />
            Build-a-Bot
          </li>
        </ul
      ></nav>
    </header>
    <main>
    <HomePage />
    </main>
  </div>
</template>
```