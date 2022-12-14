<h1> Reto 3 </h1>
<p>Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. <strong>Cada regalo está representado por una cadena</strong>. Santa Claus tiene un trineo que puede llevar un <strong>peso limitado</strong>, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.</p>
<p>Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada reno tiene un <strong>límite de peso máximo</strong> que puede llevar. El límite de peso máximo de cada reno es <strong>igual a dos veces el número de letras en su nombre.</strong></p>
<p>Tu tarea es implementar una función <code>distributeGifts(packOfGifts, reindeers)</code> que recibe una caja de regalos y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. <strong>Las cajas de regalos no se pueden dividir.</strong></p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-kwd">const</span> packOfGifts <span class="shj-syn-oper">=</span> [<span class="shj-syn-str">"book"</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">"doll"</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">"ball"</span>]
<span class="shj-syn-kwd">const</span> reindeers <span class="shj-syn-oper">=</span> [<span class="shj-syn-str">"dasher"</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">"dancer"</span>]

<span class="shj-syn-cmnt">// el pack de regalos pesa 4 + 4 + 4 = 12
</span><span class="shj-syn-cmnt">// los renos pueden llevar (2 * 6) + (2 * 6) = 24
</span><span class="shj-syn-cmnt">// por lo tanto, Santa Claus puede entregar 2 cajas de regalos
</span>
<span class="shj-syn-func">distributeGifts</span>(packOfGifts<span class="shj-syn-oper">,</span> reindeers) <span class="shj-syn-cmnt">// 2
</span></code></pre>
<p>Cosas a tener en cuenta:</p>
<ul>
<li>Las cajas de regalos no se pueden dividir.</li>
<li>Los nombres de los regalos y los renos siempre serán mayores que 0.</li>
</ul></div>