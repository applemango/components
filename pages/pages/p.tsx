import { useState, useEffect, useRef } from "react"
import Image from "next/image"

import styles from "./styles/p.module.scss"
import Header from "../../components/header/header"

const P = () => {
    const eRef:any = useRef(null)
    const [h, setH] = useState(0)
    useEffect(() => {
        setH(eRef.current.clientHeight)
    })
    return (
        <div className={styles.main} onWheel={() => setH(eRef.current.clientHeight)} onMouseEnter={() => setH(eRef.current.client)} onMouseMove={() => setH(eRef.current.client)}>
            <Header page={{
                "components":"/"
                ,"other":"/other"
            }}
            color="#fff"
            />
            <h1 className={styles.title}>Hello, world!</h1>
            <div style={{display: "flex",overflow:"hidden",height: `calc(${h}px + 100px)`}}>
                <div className={styles.img}>
                    <img ref={eRef} src="/altinay-dinc-unsplash.jpg"/>
                    <p>Photo by <a href="https://unsplash.com/@adinc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Altınay Dinç</a> on <a href="https://unsplash.com/s/photos/night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                </div>
                <div className={styles.descriptions}>
                    <h3>Photo by <a href="https://unsplash.com/@adinc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Altınay Dinç</a> on <a href="https://unsplash.com/s/photos/night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></h3>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, assumenda?</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minima et voluptatum nesciunt mollitia nobis doloremque hic quidem iste perferendis!</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rerum consequatur velit possimus ad labore, aliquid ipsum ea totam! Ratione blanditiis corporis provident placeat, assumenda non, incidunt ex obcaecati nam praesentium eius qui. Odit deleniti debitis animi perferendis veritatis perspiciatis.</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aperiam vero eaque corporis perspiciatis illo doloremque quidem nemo saepe sed.</p>
                    <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, ea?</p>
                    <p className={styles.description}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis ex accusantium nesciunt vero laboriosam quas qui non rem laborum. Libero, velit! Est ipsum dolores, ipsam aliquid, cumque vitae ipsa fugit soluta, numquam recusandae alias perferendis possimus molestiae molestias dolor totam explicabo labore accusantium maiores at doloribus corporis. Totam, adipisci.</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates nostrum laudantium necessitatibus ipsa magnam debitis? In tempore reprehenderit nihil!</p>
                    <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat praesentium modi expedita, nemo delectus et minus corporis sit officia esse ipsum mollitia atque iste error, magni fuga eligendi? Corporis, enim.</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim animi harum, labore explicabo saepe eos ipsum debitis aliquam.</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quod sed unde, nemo voluptate aut accusamus blanditiis ea vitae deserunt nisi, quia molestias nihil consectetur adipisci maiores odio vero voluptates.</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quos voluptas pariatur deserunt quam quod debitis delectus a ipsam expedita.</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, excepturi esse in consequuntur repellendus blanditiis quam maiores laboriosam illo quaerat amet quas odio dolore quia!</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum rem sed aut id repellendus?</p>
                </div>
            </div>
        </div>
    )
}
export default P