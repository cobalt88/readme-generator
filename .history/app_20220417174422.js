const inquirer = require('inquirer');
const $ = require('jquery');
const dom = new JSDOM(`<body>
  <script>document.body.appendChild(document.createElement("hr"));</script>
</body>`);

function test1 (){
  console.log($(this));

  test2()
}

function test2 (){
  console.log('world');
}

test1();