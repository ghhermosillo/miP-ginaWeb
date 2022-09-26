class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    
    <header class="header">
      <div class="overlay flex flex-fd-c flex-ai-c flex-jc-c">
        <a href="index.html">Inicio</a>
        <a href="conoceme.html">Conoceme</a>
        <a href="proyectos.html">Proyectos</a>
        <a href="portafolio.html">Portafolio</a>
        <a href="contacto.html">Contacto</a>
      </div>
      <nav class="flex flex-ai-c flex-jc-sb">
        <div class="logo">
          <a href="index.html"
            ><img src="assets/IMG/PNG/logo-main.png" alt=""
          /></a>
        </div>
        <a id="btnHamburguer" href="#" class="header-menu hide-for-desktop">
          <span></span>
          <span></span>
          <span></span>
        </a>
        <div class="menu-links hide-for-mobile flex">
          <a href="conoceme.html">Conoceme</a>
          <div class="dropdown">
            <a href="proyectos.html" class="dropdown"
              >Proyectos

              <!-- <div class="sub-menu"> -->
              <span>▼</span>
            </a>
            <div class="sub-content flex-fd-c">
              <a href="portafolio.html">Portafolio</a>
              <a href="proyectos.html">Proyectos</a>
            </div>
          </div>
          <!-- </div> -->
          <a href="contacto.html">Contacto</a>
        </div>
      </nav>
    </header>
        `;
  }
}
customElements.define("my-header", myHeader);

class lastPosts extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class="posts flex flex-fd-c flex-ai-c">
        <h4>Últimos posts ✍</h4>
        <br />
        <div class="post-row flex flex-fd-r flex-jc-sa">
          <div class="post">
            <a href="lo-que-controlas-y-lo-que-no.html">
              <img src="assets/CONTENT/1.png" alt="" />
              <h3>Lo que controlas y lo que no</h3>
            </a>
          </div>
          <div class="post">
            <a href="el-ritmo.html">
              <img src="assets/CONTENT/ritmo-crop.jpg" alt="" />
              <h3>El ritmo</h3>
            </a>
          </div>
          <div class="post">
            <a href="el-momento-perfecto-es-imperfecto.html">
              <img src="assets/CONTENT/messy-re.jpg" alt="" />
              <h3>El momento perfecto es imperfecto</h3>
            </a>
          </div>
        </div>
        <a class="btn" href="blog.html">Ver todos</a>
      </section>
    
        `;
  }
}
customElements.define("last-posts", lastPosts);

class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
      <div class="footer flex flex-fd-c flex-ai-c">
        <p class="insta hide-for-mobile">@ghhermosillo</p>
        <div class="redes">
          <a href="https://instagram.com/ghhermosillo" target = "blank"
            ><img src="assets/IMG/SVG/instagram-icon.svg" alt=""
          /></a>
          <a href="https://www.youtube.com/channel/UCz_mbzzTp2GyiD2H-Pd5Dpg" target = "blank"
            ><img src="assets/IMG/SVG/youtube-icon.svg" alt=""
          /></a>
          <a href="https://www.tiktok.com/@ghhermosillo"  target = "blank"
            ><img src="assets/IMG/SVG/tiktok-icon.svg" alt=""
          /></a>
          <a href="https://twitter.com/ghhermosillo"  target = "blank"
            ><img src="assets/IMG/SVG/twitter-icon.svg" alt=""
          /></a>
        </div>
        <img src="assets/IMG/PNG/logo-min.png" alt="" class="min-logo" />
        <p class="copyright">© 2022 Gerardo Hermosillo</p>
      </div>
    </footer>
    
        `;
  }
}
customElements.define("my-footer", myFooter);
