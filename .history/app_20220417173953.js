const inquirer = require('inquirer')

function test1 (){
  console.log(this.window);

  test2()
}

function test2 (){
  console.log('world');
}

test1();