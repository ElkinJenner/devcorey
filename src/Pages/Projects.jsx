import Header from "../components/Header";
import Cover from "../components/Cover";
import About from "../components/About";
import Info from "../components/Info";
import Footer from "../components/Footer";

function Projects() {
    return <>
        <Header />
        <main class="projects main">
            <div class="container container_min">
                <h1 class="m_t5 f_400 fw_n t_c">PROJECTS</h1>
                <aside class="column col_s_b">

                    <div class="column_100 m_c">
                        <article class="projects_item">
                            <div class="title">
                                <h1 class="f_75 font_r">DealBroker <br/> Game</h1>
                            </div>
                            <div class="category">
                                <h3 class="f4 font_l ttu">App Web . Game Design</h3>
                            </div>
                            <figure class="picture">
                                <img class="img_1400" src="./src/assets/upload/portfolio1.jpg" />
                            </figure>
                        </article>
                    </div>

                    <div class="column_50 m_c">
                        <article class="projects_item">
                            <div class="title">
                                <h1 class="f_75 font_r">SeetClass </h1>
                            </div>
                            <div class="category">
                                <h3 class="f4 font_l ttu">App Web  . UX/UI Design</h3>
                            </div>
                            <figure class="picture">
                                <img class="img_800" src="https://cdn.dribbble.com/userupload/11586101/file/original-2a16a8ee81967274ae1cdcc3d0e04f60.png?resize=1600x1200" />
                            </figure>
                        </article>
                    </div>

                    <div class="column_50 m_c">
                        <article class="projects_item">
                            <div class="title">
                                <h1 class="f_75 font_r">Smart <br/> City </h1>
                            </div>
                            <div class="category">
                                <h3 class="f4 font_l ttu">Arduino</h3>
                            </div>
                            <figure class="picture">
                                <img class="img_800" src="https://content.instructables.com/F84/D7JW/KBB41MHV/F84D7JWKBB41MHV.jpg?auto=webp&frame=1&width=1024&fit=bounds&md=be64a136f5f7fdb149ccf8579bf4bd26" />
                            </figure>
                        </article>
                    </div>


                    <div class="column_50 m_c">
                        <article class="projects_item">
                            <div class="title">
                                <h1 class="f_75 font_r">Solid<br/>mechanical</h1>
                            </div>
                            <div class="category">
                                <h3 class="f4 font_l ttu">Autocad</h3>
                            </div>
                            <figure class="picture">
                                <img class="img_800" src="https://cdn.dribbble.com/users/13007222/screenshots/19284021/media/e8f3c7b5fcc495cea0d4e3624ca89ddd.png" />
                            </figure>
                        </article>
                    </div>

                    
                    

                </aside>
            </div>
        </main>
        <Footer />
    </>
}
export default Projects;