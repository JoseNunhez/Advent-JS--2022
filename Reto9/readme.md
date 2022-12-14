# Reto 9
<p>Una empresa que fabrica luces de Navidad nos ha pedido que le echemos una mano.</p>
<p>Tienen unas tiras led que son como un <code>Array</code>. Cada posición es un led y puede ser estar encendido (<code>1</code>) o apagado (<code>0</code>).</p>
<p><strong>Cada 7 segundos</strong>, los leds cambian de estado de esta forma:</p>
<ul>
<li><strong>Si el led está apagado</strong>, se enciende si el led de su izquierda (<code>index - 1</code>) estaba encendido antes.</li>
<li><strong>Si el led está encendido</strong>, se mantiene siempre encendido.</li>
</ul>
<p>Nos han pedido un programa que nos diga cuantos segundos deben pasar hasta que todos los leds están encendidos. <strong>Los segundos se expresan en un número entero</strong>. Por ejemplo:</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-kwd">const</span> leds <span class="shj-syn-oper">=</span> [<span class="shj-syn-num">0</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">1</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">1</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">0</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">1</span>]
<span class="shj-syn-func">countTime</span>(leds) <span class="shj-syn-cmnt">// 7
</span><span class="shj-syn-cmnt">// 7 segundos ya que en el primer cambio
</span><span class="shj-syn-cmnt">// todas las luces se encendieron
</span><span class="shj-syn-cmnt">// 0s: [0, 1, 1, 0, 1]
</span><span class="shj-syn-cmnt">// 7s: [1, 1, 1, 1, 1]
</span>
<span class="shj-syn-func">countTime</span>([<span class="shj-syn-num">0</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">0</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">0</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">1</span>]) <span class="shj-syn-cmnt">// 21
</span><span class="shj-syn-cmnt">// 21 segundos ya que necesita tres cambios:
</span><span class="shj-syn-cmnt">// 0s: [0, 0, 0, 1]
</span><span class="shj-syn-cmnt">// 7s: [1, 0, 0, 1]
</span><span class="shj-syn-cmnt">// 14s: [1, 1, 0, 1]
</span><span class="shj-syn-cmnt">// 21s: [1, 1, 1, 1]
</span>
<span class="shj-syn-func">countTime</span>([<span class="shj-syn-num">0</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">0</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">1</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">0</span><span class="shj-syn-oper">,</span> <span class="shj-syn-num">0</span>]) <span class="shj-syn-cmnt">// 28
</span><span class="shj-syn-cmnt">// 28 segundos ya que necesita cuatro cambios:
</span><span class="shj-syn-cmnt">// 0s: [0, 0, 1, 0, 0]
</span><span class="shj-syn-cmnt">// 7s: [0, 0, 1, 1, 0]
</span><span class="shj-syn-cmnt">// 14s: [0, 0, 1, 1, 1]
</span><span class="shj-syn-cmnt">// 21s: [1, 0, 1, 1, 1]
</span><span class="shj-syn-cmnt">// 28s: [1, 1, 1, 1, 1]
</span></code></pre>
<h2 id="atenerencuenta">A tener en cuenta</h2>
<ul>
<li>El array siempre tendrá al menos un led encendido.</li>
<li>El array puede tener cualquier longitud.</li>
<li>Si todos los leds están encendidos, el tiempo es 0.</li>
</ul></div>