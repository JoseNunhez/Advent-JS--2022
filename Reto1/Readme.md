<h1>Reto 1</h1>
<p>Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.</p>
<p>A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.</p>
<p>El papel de regalo es el símbolo <code>*</code> y para envolver un regalo se coloca el símbolo <code>*</code> de forma que rodee totalmente al string por todos los lados. Por ejemplo:</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-kwd">const</span> gifts <span class="shj-syn-oper">=</span> [<span class="shj-syn-str">'cat'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'game'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'socks'</span>]
<span class="shj-syn-kwd">const</span> wrapped <span class="shj-syn-oper">=</span> <span class="shj-syn-func">wrapping</span>(gifts)

console<span class="shj-syn-oper">.</span><span class="shj-syn-func">log</span>(wrapped)
<span class="shj-syn-cmnt">/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */</span>
</code></pre>
<p>Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo.</p>
<p><strong>Nota:</strong> El carácter <code>\n</code> representa un salto de línea.</p>
<p><strong>¡Ojo!</strong> Asegúrate que pones el número correcto de <code>*</code> para envolver completamente el string. Pero no demasiados. Sólo los necesarios para cubrir el string.</p>
<p>Ah, <strong>y no modifiques (mutes) el array original</strong>.</p></div>