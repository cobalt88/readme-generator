const inquirer = require('inquirer');
const $ = require('jquery');
const dom = new JSDOM(`<body>
  <script>document.body.appendChild(document.createElement("hr"));</script>
</body>`);

console.log($(this))

test1();