
const list = document.getElementById('body-home');

// 'beforeend' คือการเอาไปวางต่อท้ายสุด (ก่อนปิดแท็ก)
list.insertAdjacentHTML('beforeend', `
    <header class="top-bar">
        <div class="logo">
            <img class="un-invert" src="https://latex.codecogs.com/svg.latex?\color{white}{\text{Q}_{\;\!\!\text{ua}}^{\,\,\text{ne}}\>\!\!\text{rise}}" width="250px" alt="Quanerise">
            <!-- <img class="invert" src="svg-logo/phattisu-text-logo.svg" alt="Logo"> -->
        </div>
        <h1>หน้าหลัก</h1>
        <nav id="h" class="header-buttons">
            <ul>
                <li><a class="iconed" href="https://www.youtube.com/@quanerise" ><img class="invert" src="svg-ulogo/youtube-brands-solid.svg" > @quanerise</a></li>
                <li><a class="iconed" href="https://www.facebook.com/phattisu.naphat.maninil"> <img class="invert" src="svg-ulogo/facebook-brands-solid.svg"> @quanerise</a></li>
                <li><a href="#">ปุ่ม 3</a></li>
            </ul>
        </nav>
        <button class="menu-toggle" onclick="toggleMenu()" style="font-size: 1rem;">☰</button>
    </header>
    <aside class="side-bar" id="side-bar">
        <nav id="v" class="navsidebar">
            <ul id="sidemenu" class="navmenu">
                <li><a href="#">เมนู 1</a></li>
                <li><a href="#">เมนู 2</a></li>
                <li><a href="#">เมนู 3</a></li>
            </ul>
        </nav>
        <div class="sidebar-buttons">
            <button>ตัวเลือก 1</button>
            <button>ตัวเลือก 2</button>
            <button>ตัวเลือก 3</button>
        </div>
    </aside>
    <main id="main-area" class="content">
        <img class="header-logo" src="svg-icon/sensorystar-solid-color.svg" alt="Sensory Star"/>
        <img class="un-invert" src="https://latex.codecogs.com/svg.latex?\color{white}{\text{Q}_{\;\!\!\text{ua}}^{\,\,\text{ne}}\>\!\!\text{rise}}" width="250px" alt="Quanerise"/>
        <h2>สวัสดีผม ภัทร</h2>
        <p>ยินดีต้อนรับสู่เว็บไซต์ของเรานะครับ</p>
        <p>ที่นี่เป็นเว็บไซต์ที่ให้ความรู้เกี่ยวกับการเขียนโปรแกรม และเทคโนโลยีต่างๆ</p>
        <p>หากคุณสนใจ สามารถติดตามเราได้ที่ช่องทางต่างๆ</p>
        <p>หรือหากคุณต้องการติดต่อเรา สามารถส่งอีเมลมาที่ <a href="mailto:naphatism@hotmail.com" id="email" class="button">hotmail.naphatism</a></p>
        <p>หรือติดต่อผ่านเฟสบุ๊คได้ที่ <a href="https://www.facebook.com/phattisu.naphat.maninil" id="link" class="button">phattisu.naphat.maninil</a></p>
    </main>
    <footer class="footer">
        <p class="center"><img class="un-invert" src="https://latex.codecogs.com/svg.latex?\color{white}{\text{Q}_{\;\!\!\text{ua}}^{\,\,\text{ne}}\>\!\!\text{rise}}" width="60px" alt="Quanerise"> </p>
        <p class="center">ติดต่อมาได้ที่  <a href="mailto:naphatism@hotmail.com" id="email" class="button">hotmail.naphatism</a></p>
    </footer>
`);

function toggleMenu() {
    const sideBar = document.getElementById('side-bar');
    const mainArea = document.getElementById('main-area');
    sideBar.classList.toggle('active');
    mainArea.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const sideBar = document.getElementById('side-bar');
    const mainArea = document.getElementById('main-area');
    const menuToggle = document.querySelector('.menu-toggle');
    if (!sideBar.contains(event.target) && !menuToggle.contains(event.target)) {
        sideBar.classList.remove('active');
        mainArea.classList.remove('active');
    }
});

const mediaDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');

mediaQuery.addEventListener('change', (event) => {
  if (event.matches) {
    document.querySelector("img.header-logo").src = "svg-logo/logo-light.svg"; // โลโก้สำหรับโหมดมืด
  } else {
    document.querySelector("img.header-logo").src = "svg-logo/logo-dark.svg"; // โลโก้สำหรับโหมดสว่าง
  }
});
