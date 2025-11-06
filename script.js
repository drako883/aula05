
<p>o javascript pode mudar o valor dos atributos.</p>

<p>nesse caso, o javascript altera o valor do atributo src (origem) de uma imagem.</p>

<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>
