import React, { useRef } from 'react'
import { animate, motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs'
import me from  '../assets/logo.png'

const Home = () => {


    const clientCount = useRef(null);
    const ProjectCount = useRef(null);

    const animationClientCount= ()=>{
        animate(0,100,{
            duration: 1,
            onUpdate: (v)=> (clientCount.current.textContent = v.toFixed()),
        })
    }

    const animationProjectCount= ()=>{
        animate(0,700,{
            duration: 1,
            onUpdate: (v)=> (ProjectCount.current.textContent = v.toFixed()),
        })
    }

    const animations = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1
            }
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1
            }
        }
    }
    return (
        <div id='home'>
            <section>
                <div>
                    <motion.h1 {...animations.h1}>
                        Hi, I Am <br /> Shyam Radadiya.
                    </motion.h1>
                    <Typewriter options={{
                        strings: ['Web Developer', 'Android Developer', 'Graphics Designer'],
                        autoStart: true,
                        loop: true,
                        cursor: "",
                        wrapperClassName: "typewriterpara"
                    }} />
                    <div>
                        <a href="mailto:shyam.radadiya100@gmail.com">
                            Hire Me
                        </a>

                        <a href="#work">
                            Projects <BsArrowUpRight />
                        </a>
                    </div>

                    <article>
                        <p>
                            + <motion.span whileInView={animationProjectCount} ref={clientCount}></motion.span>
                        </p>
                        <span>Clients WorldWide</span>
                    </article>


                    <aside>
                    <article>
                        <p>
                            + <motion.span whileInView={animationClientCount} ref={ProjectCount}></motion.span>
                        </p>
                        <span>Projects Delievered</span>
                    </article>

                    <article data-special>
                        <p>
                            Contact
                        </p>
                        <span>shyam.radadiya100@gmail.com</span>
                    </article>
                    </aside>
                </div>
            </section>

            <section>
                <img src={me} alt="Shyam " />
            </section>
            <BsChevronDown/>
        </div>
    )
}

export default Home