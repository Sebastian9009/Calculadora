 
    document.getElementById("formnota").addEventListener("submit", function (e){ 
        e.preventDefault();
    

        let num1=parseFloat(document.getElementById("num1").value);
        let num2=parseFloat(document.getElementById("num2").value);
        let operador=document.getElementById("operador").value; 
        let resultado=realizaroperacion(num1, num2, operador);
        document.getElementById("resultado").textContent = "Resultado: " + resultado; 
        num1.value = "";
        num2.value = "";

         if (isNaN(num1) || isNaN(num2)) {
            resultado.textContent = "Error: Por favor, ingresa números válidos.";
            resultado.style.color = "red";
            return;
        }
    });
                
        function sumar(num1, num2) { return num1 + num2;}
        function restar(num1, num2) { return num1 - num2;}
        function multiplicacion (num1, num2) {return num1 * num2 ;}
        function division (num1, num2) { return num2 !==0? num1 / num2 : "No se puede dividir entre cero"; }

        
        function realizaroperacion (num1, num2, operador) {
            if(operador=="sumar"){ return sumar(num1,num2);}
                else { if(operador=="restar") { return restar(num1,num2);}
                else { if(operador=="multiplicacion") { return multiplicacion(num1,num2); } 
                else { if(operador=="division") { return num2 !==0? division(num1,num2): "no se puede dividir en cero"; }}}}
            } 

        

        
    