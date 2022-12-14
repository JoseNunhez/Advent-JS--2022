# Reto 7
<p>En los almacenes de Papá Noel están haciendo inventario. Hay tres almacenes (que se representa cada uno como un <code>Array</code>). En cada almacén hay regalos.</p>
<p>Nos han pedido que escribamos un programa que nos diga qué regalos hay que comprar para reponer en nuestros almacenes ahora que se acerca la Navidad. <strong>Un regalo se tiene que reponer cuando sólo hay stock en uno de los tres almacenes.</strong></p>
<p>Por ejemplo, si tenemos los siguientes almacenes:</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-kwd">const</span> a1 <span class="shj-syn-oper">=</span> [<span class="shj-syn-str">'bici'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'coche'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'bici'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'bici'</span>]
<span class="shj-syn-kwd">const</span> a2 <span class="shj-syn-oper">=</span> [<span class="shj-syn-str">'coche'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'bici'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'muñeca'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'coche'</span>]
<span class="shj-syn-kwd">const</span> a3 <span class="shj-syn-oper">=</span> [<span class="shj-syn-str">'bici'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'pc'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'pc'</span>]

<span class="shj-syn-cmnt">/* El almacén a1 tiene "bici" y "coche".
El almacén a2 tiene "coche", "bici" y "muñeca".
El almacén a3 tiene "bici" y "pc".

El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
*/</span>

<span class="shj-syn-kwd">const</span> gifts <span class="shj-syn-oper">=</span> <span class="shj-syn-func">getGiftsToRefill</span>(a1<span class="shj-syn-oper">,</span> a2<span class="shj-syn-oper">,</span> a3) <span class="shj-syn-cmnt">// ['muñeca', 'pc']
</span></code></pre>
<p>Como ves, los almacenes pueden tener el mismo regalo repetido varias veces. Pero, por más existencias que haya en un almacén, si no tenemos en los otros dos, debemos reponerlo para tener mejor distribución.</p>
<h2 id="summary">📝 Summary</h2>
<ol>
<li>Crea una función <code>getGiftsToRefill</code> que reciba tres <code>Array</code> como parámetros.</li>
<li>La función debe devolver un <code>Array</code> con los regalos que hay que reponer.</li>
<li>Un regalo se debe reponer cuando sólo hay stock en uno de los tres almacenes.</li>
<li>Si no hay ningún regalo que reponer, la función debe devolver un <code>Array</code> vacío.</li>
<li>Si hay más de un regalo que reponer, la función debe devolver un <code>Array</code> con todos los regalos que hay que reponer.</li>
</ol></div>