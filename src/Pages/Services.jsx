import Header from "../components/Header";
import Cover from "../components/Cover";
import Footer from "../components/Footer";

function Services(){
    return <>
        <Header />
        <main class="main min_h100">
            <div class="container container_min">
                <h1 class="m_t5 f_400 fw_n t_c">SERVICES</h1>
                <h4 class="f1 fw_n color_lead t_c">I have interdisciplinary knowledge in various areas that support me.</h4><br/>
                <aside class="column col_sb">

                    
                    <div class="column_30">
                        <article class="services_item">
                            <h1 class="f_75 fw_n">Design &<br/>
                                Creativity</h1>
                            <ul class="m_t2 m_l1">
                                <p class="f2">UX /UI Design</p>
                                <p class="f2">Web Design</p>
                                <p class="f2">Game Design</p>
                                <p class="f2">Mobile Design</p>
                                <p class="f2">Graphic illustration</p>
                            </ul>  
                        </article>
                    </div>

                    <div class="column_30">
                        <article class="services_item">
                            <h1 class="f_75 fw_n">Development
                                <br />
                                & Technology</h1>
                            <ul class="m_t2 m_l2">
                                <p class="f2">Full-stack Development</p>
                                <p class="f2">Database Design</p>
                                <p class="f2">Javascript development</p>
                                <p class="f2">Code Debugging</p>
                                <p class="f2">Machine Learning</p>
                            </ul>
                        </article>
                    </div>

                    <div class="column_30">
                        <article class="services_item">
                            <h1 class="f_75 fw_n">Engineering
                                <br />
                                & Software</h1>
                            <ul class="m_t2 m_l2">
                                <p class="f2">Autodesk AutoCAD</p>
                                <p class="f2">Solidworks</p>
                                <p class="f2">Blender 3D</p>
                                <p class="f2">Arduino</p>
                                <p class="f2">Robotics Simulation</p>
                            </ul>
                        </article>
                    </div>
                </aside>
            </div>
        </main>
        <Footer />
    </>
}
export default Services;