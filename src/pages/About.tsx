import React from "react";
import ButtonOpenShop from "../components/buttonOpenShop/ButtonOpenShop";
import style from "./styles/about.module.scss";

const About: React.FC = () => {
  return (
    <section className="first-section lastSection">
      <div className="container">
        <h1>About</h1>
        <div className={style.content}>
          <div className={style.img}>
            <img src="./img/woman2.jpg" alt="" />
          </div>
          <div className={style.text}>
            <h2>Legacy of Elegance: A Tale of Timeless Craftsmanship</h2>
            <p>
              One of the most enchanting places where fairy-tale wedding gowns 
              come to life traces its roots back through time. The story of this 
              boutique began many years ago when the founder's great-grandmother was 
              a skilled seamstress. With an exceptional talent, she crafted exquisite 
              attire for lavish balls and soirées attended by affluent lords, 
              captivating hearts with her mastery. This remarkable craft became 
              more than just a profession—it became an heirloom passed down through g
              enerations in this remarkable family.
            </p>
            <p>
              Today, this family enterprise stands as a magnificent symbol of refinement 
              and sophistication. Stemming from this legacy, the wedding dress boutique 
              has gained worldwide acclaim for its unparalleled reputation and exceptional quality. 
              Collaborating with renowned models and participating in global fashion shows is 
              just a fraction of their achievements. Here, each dress becomes a true work of art, 
              embodying the traditions of the past while gazing toward the future, delighting 
              with its beauty and grandeur.
            </p>
          </div>
        </div>
        <div className={style.merryImg}></div>
        <div className={`${style.content} ${style.reverse}`}>
          <div className={style.img}>
            <img src="./img/woman1.jpg" alt="" />
          </div>
          <div className={style.text}>
            <h2>The Enchanting Essence: Where Magic Resides in Details</h2>
            <p>
              In every tiny detail of a wedding dress lies an inexhaustible
              magic. It's not just attire — it's an astonishing fusion of
              fabrics, embroideries, and meticulous stitches that together
              create something enchanting. From exquisite lace to the finest
              embroidery details, each element is carefully selected and crafted
              to accentuate the uniqueness of style and individuality of every
              bride. Within these intricacies resides the entire power and
              beauty that transforms each dress not just into clothing, but into
              a work of art, embodying the dream of the most special day.
            </p>
            <p>
              These refined details not only emphasize elegance but also give
              the dress its unique character. They breathe individuality into
              it, making it matchless, precisely reflecting the style and warmth
              of the bride's soul. It is within these subtle elements, hidden
              from view, that the essence and enchantment of the wedding gown
              reside, creating something extraordinary that will live in the
              heart of every bride for a lifetime.
            </p>
          </div>
        </div>
        <ButtonOpenShop positionCenter={true}/>
      </div>
    </section>
  )
};

export default About;
