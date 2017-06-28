Write a Javascript function loop()that can accept an arbitrary number of functions and will execute them in order. 
Each function should receive a continuation function that it can execute to give control back to loop(), or it 
may choose not to execute the function and end the iteration. It should support async operations. An example of calling the loop function would look like 
the following:


```javascript
var fooga = true;

const looga = function(c){
  setTimeout(function(){
    fooga = false;
    c();
  }, 10);
}

const nooga = function(c){
  console.log(fooga);
}

loop(looga, nooga); // false

```
