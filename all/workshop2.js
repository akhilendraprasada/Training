function dis(val) 
         { 
             document.getElementById("result").value+=val 
         } 
           
         
         function solve() 
         { 
             let x = document.getElementById("result").value 
             let y = eval(x) 
             document.getElementById("result").value = y 
         } 
         function sqrt()
         {
            let x = document.getElementById("result").value 
            let y = Math.sqrt(x) 
            document.getElementById("result").value = y 
        
         }
         function square()
         {
            let x = document.getElementById("result").value 
            let y = Math.pow(x,2) 
            document.getElementById("result").value = y 
        }
        function cbrt()
        {
            let x = document.getElementById("result").value 
             let y = Math.cbrt(x) 
             document.getElementById("result").value = y 
         
        }
        
         function clr() 
         { 
             document.getElementById("result").value = "" 
         } 
         function bs()
         {
                var value = document.getElementById("result").value;
                document.getElementById("result").value = value.substr(0, value.length - 1);
            
         }