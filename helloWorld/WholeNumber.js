function printGreaterNumber(){
    
     var num1=prompt("enter first number");
        if(num1>=0){
          document.write("<h2>");
          document.writeln(num1+"is a whole number");
          document.write("</h2>");
      }else{
         document.write("<h2>");
         document.writeln(num1+"is not a whole number");
         document.write("</h2>");
      }
  }