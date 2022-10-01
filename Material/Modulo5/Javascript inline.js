/*
# Como o JavaScript inline funciona com HTML?
O JavaScript inline pode ser alcançado usando a tag Script dentro do corpo do HTML, e em vez 
de especificar a fonte (src="...") do arquivo JavaScript na tag Script, temos que escrever 
todo o código JavaScript dentro da tag Script.

Sintaxe:
<script>
    // JavaScript Code
</script>

Exemplo:
<!DOCTYPE html> 
<html> 
    
<head> 
    <title>Inline JavaScript</title> 
    <meta charset="utf-8"> 
    <meta name="viewport" 
          content="width=device-width, initial-scale=1"> 
    <link rel="stylesheet" 
          href= 
"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head> 
    
<body> 
    <div class="container"> 
        <h1 style="text-align:center;color:green;"> 
          GeeksforGeeks 
      </h1> 
        <form> 
            <div class="form-group"> 
                <label for="">Enter Your Name:</label> 
                <input id="name"
                       class="form-control" 
                       type="text" 
                       placeholder="Input Your Name Here"> 
            </div> 
            <div class="form-group"> 
                <button id="btn-alert"
                        class="btn btn-success btn-lg float-right" 
                        type="submit"> 
                     Submit  
                </button> 
            </div> 
        </form> 
    </div> 
    <script>
        var user_name = document.getElementById("name");
        document.getElementById("btn-alert").addEventListener("click", function(){
            var value=user_name.value.trim();
            if(!value)
                alert("Name Cannot be empty!");
            else
                alert("Hello, " + value + "!\nGreetings From GeeksforGeeks.");
        });
    </script>
</body> 
</html>

Assim que digitarmos um nome e pressionarmos o botão enviar, o código JavaScript dentro da 
tag de script será acionado e receberemos uma mensagem pop-up com nosso nome e texto de 
saudação.

Nota: Usar o Inline JavaScript é uma má prática e não é recomendado. Ele pode ser usado para 
fins de demonstração para que o manifestante não tenha que lidar com dois arquivos separados 
de cada vez. Recomenda-se escrever código JavaScript em um arquivo .js separado e, em seguida,
vincular o mesmo usando atributo src na tag script.
*/