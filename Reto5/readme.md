# Reto 5
<p>Para no cansar a los renos, Papá Noel quiere dejar el máximo número de regalos haciendo el menor número posible de viajes.</p>
<p>Tiene un array de ciudades donde cada elemento es el número de regalos que puede dejar allí. <code>[12, 3, 11, 5, 7]</code>. Por otro lado, el límite de regalos que caben en su saco. Y, finalmente, el número de ciudades máximo que sus renos pueden visitar.</p>
<p>Como no quiere dejar una ciudad a medias, <strong>si no puede dejar todos los regalos que son de esa ciudad, no deja ninguno allí.</strong></p>
<p>Crea un programa que le diga <strong>la suma más alta de regalos</strong> que podría repartir teniendo en cuenta el máximo de regalos que puede transportar y el número máximo de ciudades que puede visitar:</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-kwd">const</span> giftsCities <span class="shj-syn-oper">=</span> [<span class="shj-syn-num">12</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">3</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">11</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">5</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">7</span>]
<span class="shj-syn-kwd">const</span> maxGifts <span class="shj-syn-oper">=</span> <span class="shj-syn-num">20</span>
<span class="shj-syn-kwd">const</span> maxCities <span class="shj-syn-oper">=</span> <span class="shj-syn-num">3</span>

<span class="shj-syn-cmnt">// la suma más alta de regalos a repartir
</span><span class="shj-syn-cmnt">// visitando un máximo de 3 ciudades
</span><span class="shj-syn-cmnt">// es de 20: [12, 3, 5]
</span>
<span class="shj-syn-cmnt">// la suma más alta sería [12, 7, 11]
</span><span class="shj-syn-cmnt">// pero excede el límite de 20 regalos y tendría
</span><span class="shj-syn-cmnt">// que dejar alguna ciudad a medias.
</span>
<span class="shj-syn-func">getMaxGifts</span>(giftsCities<span class="shj-syn-oper">,</span> maxGifts<span class="shj-syn-oper">,</span> maxCities) <span class="shj-syn-cmnt">// 20
</span></code></pre>
<p>Si no se puede realizar ningún viaje que satisface los requerimientos, el resultado debe ser <code>0</code>. Más ejemplos:</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-func">getMaxGifts</span>([<span class="shj-syn-num">12</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">3</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">11</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">5</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">7</span>]<span class="shj-syn-oper">,</span> <span class="shj-syn-num">20</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">3</span>) <span class="shj-syn-cmnt">// 20
</span><span class="shj-syn-func">getMaxGifts</span>([<span class="shj-syn-num">50</span>]<span class="shj-syn-oper">,</span> <span class="shj-syn-num">15</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">1</span>) <span class="shj-syn-cmnt">// 0
</span><span class="shj-syn-func">getMaxGifts</span>([<span class="shj-syn-num">50</span>]<span class="shj-syn-oper">,</span> <span class="shj-syn-num">100</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">1</span>) <span class="shj-syn-cmnt">// 50
</span><span class="shj-syn-func">getMaxGifts</span>([<span class="shj-syn-num">50</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">70</span>]<span class="shj-syn-oper">,</span> <span class="shj-syn-num">100</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">1</span>) <span class="shj-syn-cmnt">// 70
</span><span class="shj-syn-func">getMaxGifts</span>([<span class="shj-syn-num">50</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">70</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">30</span>]<span class="shj-syn-oper">,</span> <span class="shj-syn-num">100</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">2</span>) <span class="shj-syn-cmnt">// 100
</span><span class="shj-syn-func">getMaxGifts</span>([<span class="shj-syn-num">50</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">70</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">30</span>]<span class="shj-syn-oper">,</span> <span class="shj-syn-num">100</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">3</span>) <span class="shj-syn-cmnt">// 100
</span><span class="shj-syn-func">getMaxGifts</span>([<span class="shj-syn-num">50</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">70</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">30</span>]<span class="shj-syn-oper">,</span> <span class="shj-syn-num">100</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">4</span>) <span class="shj-syn-cmnt">// 100
</span></code></pre>
<p>A tener en cuenta:</p>
<ul>
<li><code>maxGifts &gt;= 1</code></li>
<li><code>giftsCities.length &gt;= 1</code></li>
<li><code>maxCities &gt;= 1</code></li>
<li>El número de <code>maxCities</code> puede ser mayor a <code>giftsCities.length</code></li>
</ul></div>