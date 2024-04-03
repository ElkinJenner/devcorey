import Header from "../components/Header";
import Cover from "../components/Cover";
import About from "../components/About";
import Info from "../components/Info";
import Footer from "../components/Footer";

function Blog() {
    return <>
        <Header />
        <main class="main">
            <div class="container container_max">
                <h1 class="m_t5 f_400 fw_n t_c">BLOG</h1>
                <aside class="column col_sb">

                    <div class="column_100">
                        <article class="blog_item d_f">
                            <figure class="b_item_picture">
                                <img src="./src/assets/upload/post1.jpg" />
                            </figure>
                            <div class="b_item_desc">
                                <h1 class="f_75 fw_n">Is this currently the end of the computer programmers?</h1>
                            </div>
                        </article>
                    </div>

                    <div class="column_100">
                        <article class="blog_item">
                            <figure class="b_item_picture">
                                <img src="./src/assets/upload/post2.jpg" />
                            </figure>
                            <div class="b_item_desc">
                                <h1 class="f_75 fw_n">Nanotechnology Opens the Doors of the Future with Innovation and Unlimited Possibilities.</h1>
                            </div>
                        </article>
                    </div>

                   

                </aside>
            </div>
        </main>
        <Footer />
    </>
}
export default Blog;