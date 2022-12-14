# Reto 6
<p>Una pareja de entusiastas de la navidad ha creado una empresa de adornos navideños. El primer adorno que quieren fabricar es un cubo que se pone en los árboles.</p>
<p>El problema es que tienen que programar la máquina y no saben cómo hacerlo. Nos han pedido ayuda para lograrlo.</p>
<p>Para <strong>crear los cubos</strong> se le pasa un <strong>número con el tamaño deseado</strong> al programa y este devuelve un <code>string</code> con el <strong>diseño de ese tamaño</strong>. Por ejemplo, si le pasamos un 3, el programa debe devolver un cubo de 3x3x3:</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-kwd">const</span> cube <span class="shj-syn-oper">=</span> <span class="shj-syn-func">createCube</span>(<span class="shj-syn-num">3</span>)
</code></pre>
<pre><code class="text language-text">  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
</code></pre>
<p>Como ves el cubo tiene tres caras visualmente. Los símbolos que se usan para construir las caras del cubo son: <code>/</code>, <code>\</code>, <code>_</code> y <code></code> (espacio en blanco).</p>
<p>Otros ejemplos de cubos:</p>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-kwd">const</span> cubeOfOne <span class="shj-syn-oper">=</span> <span class="shj-syn-func">createCube</span>(<span class="shj-syn-num">1</span>)
</code></pre>
<pre><code class="text language-text">/\_\
\/_/
</code></pre>
<pre><code class="javascript language-javascript shj-lang-js shj-inline" data-lang="js"><span class="shj-syn-kwd">const</span> cubeOfTwo <span class="shj-syn-oper">=</span> <span class="shj-syn-func">createCube</span>(<span class="shj-syn-num">2</span>)
</code></pre>
<pre><code class="text language-text"> /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/
</code></pre>
<p>A tener en cuenta:</p>
<ul>
<li>Fíjate bien en los espacios en blanco que hay en el cubo.</li>
<li>El cubo tiene que ser simétrico.</li>
<li>Asegúrate de usar los símbolos correctos.</li>
<li>Cada nueva línea del cubo debe terminar con un salto de línea (<code>\n</code>) excepto la última.</li>
</ul>
<p><small><a href="https://www.codewars.com/kata/6387ea2cf418c41d277f3ffa/javascript" target="nofollow noopener noreferrer">Basado en esta kata de Codewars</a></small></p></div>