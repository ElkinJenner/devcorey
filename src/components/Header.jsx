const Header = ()=> (
     <header>
        <div class="container container_max">
           <nav class="navegation">
                <div class="navbar_left">
                    <div class="switch_contender" id="switch">
                        <div class="switch_l" id="light_mode"></div>
                        <div class="hidden switch_r" id="dark_mode"></div>
                    </div>
                </div>
                <div class="navbar_right">
                    <ul>
                        <li>
                            <span><i class="ai-planet icon"></i> Creative Portfolio <br/>V.0.1</span>
                        </li>
                        <li><span><i class="ai-globe icon"></i> Current Status <br/>
                            <span class="color_verify"><i class="status ai-circle-fill fs2 m_r025"></i>Available</span></span>
                        </li>
                        <li>
                            <span>Hello@Devcorey.io <br />+1 (518)282-6211</span>
                        </li>
                    </ul>
                </div>
                {/*Navbar Bottom */}
                <div class="navbar_bottom">
                    <ul>
                        <li class="bg_dark br_1 logo"><img class="filter img_30" src="/src/assets/img/icon_logo.png" /></li>
                        <li><a href="./"><i class='bx bx-home-alt'></i> Index</a></li>
                        <li><a href="./Services"><i class='bx bx-wrench'></i> Services</a></li>
                        <li><a href="./Projects"><i class='bx bx-cube-alt'></i> Projects</a></li>
                        <li><a href="./Blog"><i class='bx bx-message-square-dots'></i> Blog</a></li>
                    </ul>
                </div>
           </nav>
        </div>
    </header>
);
export default Header;