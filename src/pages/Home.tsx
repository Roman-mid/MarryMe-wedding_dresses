import React from "react";
import DressBlock from "../components/dressBlock/DressBlock";
import { RootState, useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import ButtonOpenShop from "../components/buttonOpenShop/ButtonOpenShop";
import { fetchAllDresses } from "../redux/dressesSlice";
import { Link } from "react-router-dom";
import style from "./styles/home.module.scss";

export type DressesType = {
  category: number;
  id: number;
  imgUrl: string[];
  name: string;
  price: number;
  rating: number;
  sizes: string[];
  type: string;
  description: string;
};

const credo = [
  {
    name: "Quality",
    img: "img/singer1.jpeg",
    text: "High-quality fabrics, lace, and details form the foundation of elegance and comfort. Using only the finest materials ensures the durability and beauty of the dress.",
  },
  {
    name: "Tailored Fit",
    img: "img/knitting.jpeg",
    text: "Comfort is crucial on the wedding day, so the dress should provide ease of movement and comfort throughout the day. Precise tailoring and consideration of individual body characteristics allow for the creation of a perfect fit.",
  },
  {
    name: "Responsibility",
    img: "img/clock2.jpeg",
    text: "It шs crucial to build trusting relationships with customers, being open to their preferences, and ensuring that the dress meets their expectations. This also involves considering individual preferences and timelines.",
  },
];

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const {items, newCollection} = useSelector((state: RootState) => state.dresses);

  React.useEffect(() => {
    dispatch(fetchAllDresses());
  }, []);

  const newCollectionDresses = newCollection.map(obj => <DressBlock key={obj.id} {...obj} />);

  return (
    <>
      <section className={style.sectionOffer}>
        <div className="container">
          <div className={style.main}>
            <div className={style.offer}>
              <h1>Style and Elegance for Your Special Day</h1>
              <p>
                Welcome to a world of elegance and romance – your perfect
                partner in crafting an unforgettable look for life's most
                important celebration. Our bridal dress store doesn't just offer
                dresses; it presents magic woven into every stitch. Inspired by
                your love story, we offer exclusive, exquisite, and elegant
                gowns that reflect your individuality. Whether your style leans
                towards classic sophistication or modern grandeur, we aim to
                make your day truly memorable. Trust us to transform your
                wedding dream into reality.
              </p>
              <ButtonOpenShop  />
            </div>
            <div className={style.videoWrap}>
              <video 
                autoPlay
                loop
                preload="true"
                muted
                src="https://videos.marytrufel.ae/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaThDIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--be8cbb4b57fc913f0a3fa5ee188037beb2bf44bd/Adelle_%D0%90%D0%B4%D0%B5%D0%BB%D1%8C.mp4"
              ></video>
            </div>
          </div>
        </div>
      </section>
       {newCollectionDresses.length > 0 && <section>
        <div className="container">
            <h2 className={style.sectionTitle}>New Collection</h2>
            <div className={style.itemsWrap}>
              {newCollectionDresses}
              </div>
            <ButtonOpenShop  positionCenter={true}/>
          </div>
      </section>}
      <section >
        <div className="container">
          <div className={style.quality}>
            <h2 className={style.sectionTitle}>We always think about you</h2>
            <div className={style.credoWrap}>
              {credo.map((obj) => {
                return (
                  <div key={obj.name} className={style.credo}>
                    <img src={obj.img} alt="" />
                    <h3>{obj.name}</h3>
                    <p>{obj.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="lastSection">
        <div className="container">
          <h2 className={style.sectionTitle}>Dream team</h2>
          <div className={style.sliderWrap}>
            <div className={style.slider}></div>
            <div className={style.text}>
              <h3>For everyone</h3>
              <p className={style.textContent}>Every girl is unique. However, we are alike in a million little things.</p>
              <p className={style.textContent}>We look for these little things and creates beautiful things that highlight the advantages of every girl.</p>
              <Link className="button" to="about">More about the brand</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
