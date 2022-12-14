# Reto 11
<p>Papa Noél está un poco preocupado porque los preparativos están llevando mucho tiempo. Hace poco se ha sacado una certificación de Scrum y ha decidido usar la metodología para organizar el trabajo de sus elfos.</p>
<p>Le dicen la duración esperada de las tareas con un string con el formato <code>hh:mm:ss</code> y en el mismo formato cuánto tiempo llevan trabajando en ella.</p>
<p>Pero Papa Noél no se entera rápidamente si falta o mucho para que termine, así que nos ha pedido que hagamos un programa que nos indique la porción de la tarea que ya se ha completado.</p>
<p>Por ejemplo, si la tarea dura <code>03:00:00</code> y llevan trabajando <code>01:00:00</code> entonces ya han completado <code>1/3</code> de la tarea. En código:</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-func">getCompleted</span>(<span class="shj-syn-str">'01:00:00'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'03:00:00'</span>) <span class="shj-syn-cmnt">// '1/3'
</span><span class="shj-syn-func">getCompleted</span>(<span class="shj-syn-str">'02:00:00'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'04:00:00'</span>) <span class="shj-syn-cmnt">// '1/2'
</span><span class="shj-syn-func">getCompleted</span>(<span class="shj-syn-str">'01:00:00'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'01:00:00'</span>) <span class="shj-syn-cmnt">// '1/1'
</span><span class="shj-syn-func">getCompleted</span>(<span class="shj-syn-str">'00:10:00'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'01:00:00'</span>) <span class="shj-syn-cmnt">// '1/6'
</span><span class="shj-syn-func">getCompleted</span>(<span class="shj-syn-str">'01:10:10'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'03:30:30'</span>) <span class="shj-syn-cmnt">// '1/3'
</span><span class="shj-syn-func">getCompleted</span>(<span class="shj-syn-str">'03:30:30'</span><span class="shj-syn-oper">,</span> <span class="shj-syn-str">'05:50:50'</span>) <span class="shj-syn-cmnt">// '3/5
</span></code></pre>
<p>Ten en cuenta:</p>
<ul>
<li>El formato de la hora es <code>hh:mm:ss</code>.</li>
<li>El formato de la salida es un string <code>a/b</code> donde <code>a</code> es la porción de la tarea que ya se ha completado y <code>b</code> es la porción de la tarea que falta por completar.</li>
<li>La porción siempre se muestra con la menor fracción posible. (por ejemplo, nunca se mostraría <code>2/4</code> porque se puede representar como <code>1/2</code>).</li>
<li>Si ya se ha completado la tarea, la fracción sería <code>1/1</code>.</li>
<li>Ningun elfo ha sido maltradado durante la ejecución de este reto ni han tenido que usar Scrum de verdad.</li>
</ul></div>