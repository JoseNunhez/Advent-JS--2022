# Reto 8
<p>Se han estropeado algunos trineos eléctricos y los elfos están buscando piezas de repuesto para arreglarlos, pero no tienen claro si las piezas que tienen sirven.</p>
<p>Las piezas de repuesto son cadenas de texto y el mecánico <em>Elfon Masc</em> ha dicho que una pieza de repuesto es válida <strong>si la pieza puede ser un palíndromo después de eliminar, como máximo, un carácter.</strong></p>
<blockquote>
  <p>Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.</p>
</blockquote>
<p>Nuestra función debe devolver un booleano que indique si la pieza de repuesto es válida o no con esa regla:</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-func">checkPart</span>(<span class="shj-syn-str">"uwu"</span>) <span class="shj-syn-cmnt">// true
</span><span class="shj-syn-cmnt">// "uwu" es un palíndromo sin eliminar ningún carácter
</span>
<span class="shj-syn-func">checkPart</span>(<span class="shj-syn-str">"miidim"</span>) <span class="shj-syn-cmnt">// true
</span><span class="shj-syn-cmnt">// "miidim" puede ser un palíndromo después de eliminar la primera "i"
</span><span class="shj-syn-cmnt">// ya que "midim" es un palíndromo
</span>
<span class="shj-syn-func">checkPart</span>(<span class="shj-syn-str">"midu"</span>) <span class="shj-syn-cmnt">// false
</span><span class="shj-syn-cmnt">// "midu" no puede ser un palíndromo después de eliminar un carácter
</span></code></pre></div>