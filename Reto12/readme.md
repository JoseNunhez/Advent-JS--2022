# Reto 12
<p>Papa Noél tiene nuevos trineos eléctricos pero debe controlar el consumo eléctrico ya que <strong>sólo tiene una batería de 20W.</strong></p>
<p>Nos dan un <strong>array de trineos</strong>, <strong>de peor a mejor</strong>, con sus respectivos consumos. Cada trineo es un objeto con dos propiedades: <code>name</code> y <code>consumption</code>.</p>
<p>El campo <code>consumption</code> es un número que representa la cantidad de <em>vatios</em> (W) que <strong>consume</strong> el trineo para cada <strong>unidad de distancia</strong>. El campo <code>name</code> es una cadena de texto que representa el nombre del trineo.</p>
<p>Crea un programa que nos devuelva el nombre del mejor trineo disponible que nos permita cubrir la distancia.</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-kwd">const</span> distance <span class="shj-syn-oper">=</span> <span class="shj-syn-num">30</span>
<span class="shj-syn-kwd">const</span> sleighs <span class="shj-syn-oper">=</span> [
  { name<span class="shj-syn-oper">:</span> <span class="shj-syn-str">"Dasher"</span><span class="shj-syn-oper">,</span> consumption<span class="shj-syn-oper">:</span> <span class="shj-syn-num">0.3</span> }<span class="shj-syn-oper">,</span>
  { name<span class="shj-syn-oper">:</span> <span class="shj-syn-str">"Dancer"</span><span class="shj-syn-oper">,</span> consumption<span class="shj-syn-oper">:</span> <span class="shj-syn-num">0.5</span> }<span class="shj-syn-oper">,</span>
  { name<span class="shj-syn-oper">:</span> <span class="shj-syn-str">"Rudolph"</span><span class="shj-syn-oper">,</span> consumption<span class="shj-syn-oper">:</span> <span class="shj-syn-num">0.7</span> }<span class="shj-syn-oper">,</span>
  { name<span class="shj-syn-oper">:</span> <span class="shj-syn-str">"Midu"</span><span class="shj-syn-oper">,</span> consumption<span class="shj-syn-oper">:</span> <span class="shj-syn-num">1</span> }
]

<span class="shj-syn-func">selectSleigh</span>(distance<span class="shj-syn-oper">,</span> sleighs) <span class="shj-syn-cmnt">// =&gt; "Dancer"
</span>
<span class="shj-syn-cmnt">// Dasher consume 9W para recorrer 30 de distancia
</span><span class="shj-syn-cmnt">// Dancer consume 15W para recorrer 30 de distancia
</span><span class="shj-syn-cmnt">// Rudolph consume 21W para recorrer 30 de distancia
</span><span class="shj-syn-cmnt">// Midu consume 30W para recorrer 30 de distancia
</span>
<span class="shj-syn-cmnt">// El mejor trineo con el que puede recorrer
</span><span class="shj-syn-cmnt">// la distancia es Dancer.
</span>
<span class="shj-syn-cmnt">// Dasher recorre la distancia pero es peor trineo
</span><span class="shj-syn-cmnt">// Rudolph y Midu no pueden recorrer la distancia con 20W.
</span></code></pre>
<p>Recuerda que:</p>
<ul>
<li>La batería siempre es de 20W.</li>
<li>La lista de trineos está ordenada de peor a mejor trineo.</li>
<li>Tienes que devolver el nombre del mejor trineo que nos permita cubrir la distancia con los vatios que tenemos disponibles.</li>
<li>Si ningún trineo es usable para la distancia, devuelve <code>null</code>.</li>
</ul></div>