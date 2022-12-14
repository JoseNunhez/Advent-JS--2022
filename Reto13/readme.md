# Reto 13
<p>Para evitar perder datos cuando el servidor se cae, Papa Noel ha decidido hacer backups incrementales. Un hacker llamado S4vitelf le esta ayudando.</p>
<p>Por un lado, tenemos el <strong>timestamp</strong> de cuándo se hizo el último backup.</p>
<p>También tenemos los cambios que se han realizado en un array de arrays. Cada array interno contiene <strong>dos elementos</strong>: el <strong>id</strong> del archivo modificado y el <strong>timestamp</strong> de la modificación.</p>
<p>Tienes que crear un programa que devuelva un array con las <strong>id</strong> de los archivos que tendríamos que hacer backup porque han sido modificados desde el último backup y <strong>ordenados de forma ascendente</strong>. Ejemplo:</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-kwd">const</span> lastBackup <span class="shj-syn-oper">=</span> <span class="shj-syn-num">1546300800</span>
<span class="shj-syn-kwd">const</span> changes <span class="shj-syn-oper">=</span> [
  [ <span class="shj-syn-num">3</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">1546301100</span> ]<span class="shj-syn-oper">,</span>
  [ <span class="shj-syn-num">2</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">1546300800</span> ]<span class="shj-syn-oper">,</span>
  [ <span class="shj-syn-num">1</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">1546300800</span> ]<span class="shj-syn-oper">,</span>
  [ <span class="shj-syn-num">1</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">1546300900</span> ]<span class="shj-syn-oper">,</span>
  [ <span class="shj-syn-num">1</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">1546301000</span> ]
]

<span class="shj-syn-func">getFilesToBackup</span>(lastBackup<span class="shj-syn-oper">,</span> changes) <span class="shj-syn-cmnt">// =&gt; [ 1, 3 ]
</span><span class="shj-syn-cmnt">// El archivo con id 1 ha sido modificado dos veces
</span><span class="shj-syn-cmnt">// después del último backup.
</span>
<span class="shj-syn-cmnt">// El archivo con id 2 no ha sido modificado después
</span><span class="shj-syn-cmnt">// del último backup.
</span>
<span class="shj-syn-cmnt">// El archivo con id 3 ha sido modificado una vez
</span><span class="shj-syn-cmnt">// después del último backup.
</span>
<span class="shj-syn-cmnt">// Tenemos que hacer una copia de seguridad
</span><span class="shj-syn-cmnt">// de los archivos 1 y 3.
</span></code></pre>
<p>Recuerda que:</p>
<ul>
<li>Devuelve la id de los archivos que han sido modificados después del último backup.</li>
<li>Devuelve un array vacío si no hay archivos que hacer backup.</li>
<li>Recuerda que deben estar ordenados los id de forma ascendente.</li>
</ul></div>