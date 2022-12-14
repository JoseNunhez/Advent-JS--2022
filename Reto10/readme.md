# Reto 10
<p>Crea un programa que compruebe que el trineo de Santa Claus hace una <strong>parabola al saltar entre ciudades</strong>. Recibes un <strong>array de números</strong> que representan la <strong>altura</strong> en la que se encuentra el trineo en cada momento.</p>
<p>Para que la parabola sea correcta, el viaje del trineo debe ser ascendente al principio, llegar al punto más alto y descender hasta el final. <strong>No puede volver a subir una vez que ha bajado, ni puede iniciar el viaje bajando.</strong> Veamos unos ejemplos:</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-kwd">const</span> heights <span class="shj-syn-oper">=</span> [<span class="shj-syn-num">1</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">3</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">8</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">5</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">2</span>]
<span class="shj-syn-func">checkJump</span>(heights) <span class="shj-syn-cmnt">// true
</span>
<span class="shj-syn-cmnt">/*
Es `true`.
El salto va de abajo a arriba y luego de arriba a abajo:

    8 (punto más alto)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/</span>

<span class="shj-syn-kwd">const</span> heights <span class="shj-syn-oper">=</span> [<span class="shj-syn-num">1</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">7</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">3</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">5</span>]
<span class="shj-syn-func">checkJump</span>(heights) <span class="shj-syn-cmnt">// false
</span>
<span class="shj-syn-cmnt">/*
Es `false`.
Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

  7   5 
 ↗ ↘ ↗
1   3
</span></code></pre>
<p>Necesitamos que el programa devuelva un <code>boolean</code> que indique si el trineo hace una parabola o no.</p>
<h2 id="atenerencuenta">A tener en cuenta</h2>
<ul>
<li>Para que el salto sea válido tiene que subir una vez y bajar una vez. Si durante el salto se queda en la misma altura entre dos posiciones, la parabola continua.</li>
<li>No hace falta que el punto de inicio y final sean el mismo (las ciudades pueden estar a diferentes alturas).</li>
</ul></div>