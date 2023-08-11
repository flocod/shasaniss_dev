import { React, useEffect, useRef } from "react";
import "../index.scss";
import "./scss/home.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Home = (props) => {
  const component = useRef(null);
  let element = useRef();

  useEffect(() => {
    new SplitType(element.current, { types: "chars" });

    // create a context for all the GSAP animations and ScrollTriggers so we can revert() them in one fell swoop.
    // A context also lets us scope all the selector text to the component (like feeding selector text through component.querySelectorAll(...))
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...

      gsap.from(".gradient_text_arc", {
        opacity: 0,
        y: -100,
        duration: 1,
      });

      gsap.from(".group_btn", {
        opacity: 0,
        y: 100,
        duration: 1,
      });

      let targets = gsap.utils.toArray("p");
      console.log("targets", targets);

      targets.forEach((target, index) => {
        gsap.from(target, {
          opacity: 0,
          y:20,
          duration: 1,
         

          // 
          /*
          toggleActions : Chaîne de caractères - Détermine comment 
          l'animation liée est contrôlée aux 4 emplacements distincts
           de basculement - onEnter, onLeave, onEnterBack et onLeaveBack,
          Cela fait référence aux actions qui se produisent lorsque l'élément
           cible entre ou quitte la vue et lorsque la direction de défilement
            est inversée (retour en arrière).
           */

          scrollTrigger: {
            toggleActions: "restart pause resume pause",
            trigger: target,
            start:"-20px bottom"
            
          },
        });
      });

      // gsap.from("p", {
      //   opacity: 0,
      //   y: 20,
      //   duration: 1,
      //   stagger: 0.5,
      //   delay:.5,
      //   scrollTrigger:{
      //     toggleActions:'play reverse play',
      //     start:"top bottom-=36%",
      //     trigger:this,
      //   }
      // });

      gsap.from(".contain_text .char", {
        opacity: 0,
        y: "-28vh",
        skewX: 5,
        scale: 10,
        stagger: 0.05,
        delay: 0,
        duration: 0.2,
      });

      console.log("component", component);

      // Array of line elements
      // text.lines;
      // Array of word elements
      // text.words;
      // Array of character elements
    }, component);

    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <>
      <main ref={component} className="main">
        <div className="center_container">
          <div className="main_struct">
            <div className="intro">
              <div className="big_btn">
                <div className="big_btn__struct">
                  <div
                    className={`btn_toogle ${
                      props.isActiveToggle ? "active" : ""
                    }`}
                  ></div>
                </div>
              </div>

              <div className="contain_text ">
                <h2 className="gradient_text_arc">
                  Nous éclairons
                  <br />
                  votre image
                </h2>
                <h6 ref={element}>
                  Depuis plus de 25 ans Shasaniss et ses équipes réalisent des
                  enseignes lumineuses sur-mesure pour tous types de clients.
                </h6>

                <div className="group_btn">
                  <div className="btn_gradient">
                    Commencons <span className="more"> votre projet</span>
                  </div>
                  <div className="btn_icon">
                    <div className="btn_icon__struct">
                      <span className="icon">
                        <svg
                          viewBox="0 0 25 21"
                          fill="green"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Frame2">
                            <path
                              id="Vector"
                              d="M25 8.62508V9.37507C25 9.9964 24.5336 10.5001 23.9583 10.5001H23.6111L22.4777 19.0682C22.3311 20.1766 21.4521 21 20.4154 21H4.58464C3.54787 21 2.66888 20.1766 2.52222 19.0682L1.38889 10.5001H1.04167C0.466363 10.5001 0 9.9964 0 9.37507V8.62508C0 8.00375 0.466363 7.50009 1.04167 7.50009H3.96445L8.599 0.617895C9.05017 -0.0520387 9.91875 -0.20021 10.5391 0.287053C11.1595 0.774315 11.2967 1.71242 10.8455 2.3824L7.39918 7.50009H17.6008L14.1545 2.38235C13.7033 1.71242 13.8405 0.774269 14.4609 0.287006C15.0812 -0.200257 15.9499 -0.0521324 16.401 0.617848L21.0355 7.50009H23.9583C24.5336 7.50009 25 8.00375 25 8.62508ZM13.5417 16.875V11.6251C13.5417 11.0037 13.0753 10.5001 12.5 10.5001C11.9247 10.5001 11.4583 11.0037 11.4583 11.6251V16.875C11.4583 17.4963 11.9247 18 12.5 18C13.0753 18 13.5417 17.4963 13.5417 16.875ZM18.4028 16.875V11.6251C18.4028 11.0037 17.9364 10.5001 17.3611 10.5001C16.7858 10.5001 16.3194 11.0037 16.3194 11.6251V16.875C16.3194 17.4963 16.7858 18 17.3611 18C17.9364 18 18.4028 17.4963 18.4028 16.875ZM8.68056 16.875V11.6251C8.68056 11.0037 8.21419 10.5001 7.63889 10.5001C7.06358 10.5001 6.59722 11.0037 6.59722 11.6251V16.875C6.59722 17.4963 7.06358 18 7.63889 18C8.21419 18 8.68056 17.4963 8.68056 16.875Z"
                              fill="green"
                            />
                          </g>
                        </svg>
                      </span>
                      <span className="text">
                        <span className="more">Notre</span> Boutique
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Infinite Scroll */}
          <div className="m-scroll">
            <div className="m-scroll__title  infinite_text">
              <div className="m-scroll_container">
                <h1>
                  <span>Soyez</span>
                  Visible<span>Soyez</span>Mémorable<span>Soyez</span>Shasaniss
                  <span>Soyez</span>Visible<span>Soyez</span>Mémorable
                  <span>Soyez</span>SHASANISS
                </h1>
                <h1>
                  <span>Soyez</span>Visible<span>Soyez</span>Mémorable
                  <span>Soyez</span>Shasaniss<span>Soyez</span>Visible
                  <span>Soyez</span>Mémorable<span>Soyez</span>SHASANISS
                </h1>
              </div>
            </div>
          </div>
          {/* End Infinite Scroll */}
          <br />
          <br />

          <div className="main_struct">
            <p>
              dolorem maxime fugiat illum voluptate illo voluptates cupiditate,
              tenetur laborum architecto, eum aut unde dicta minima nihil quis.
              Odit ipsam enim sit asperiores culpa id eos delectus nam ad
              consectetur unde labore quibusdam cum inventore sunt, nisi sed
              doloribus. Doloribus laborum debitis ipsum qui numquam fugit,
              animi cupiditate ducimus dolor illo atque iure iusto recusandae
              repudiandae nihil, vitae dignissimos libero, voluptate architecto?
              Blanditiis commodi, omnis laboriosam harum, voluptas odio vel
              sapiente cum velit magni accusamus iste repellat voluptatem cumque
              possimus voluptates laudantium earum perspiciatis dolores eveniet
              doloribus? Inventore qui sint delectus quas impedit ipsum dolore
              odio nam distinctio amet id voluptatem velit sapiente non hic
              voluptatum beatae, tempora similique voluptates natus tenetur.
              Vero ullam fugit ipsum, consectetur voluptatum similique neque,
              necessitatibus itaque ipsa aut vel perspiciatis nulla in
              reiciendis deleniti? Reprehenderit odio harum ad porro repellendus
              cupiditate incidunt totam provident?
            </p>
            <br />
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              voluptates quidem ad. Modi facilis laborum ipsum soluta, similique
              consequatur voluptatum asperiores nulla fugiat quibusdam adipisci
              ratione dolorum dolores quos nostrum? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Accusantium blanditiis molestias
              quae adipisci consectetur earum id eius optio natus facere. Enim
              expedita nihil ipsam delectus provident earum sequi deserunt
              dolore consectetur tempore eveniet officia inventore impedit
              perferendis, voluptate dolor. Quia deserunt ullam, dolores eaque
              aliquid error. Corporis magni at asperiores vel expedita similique
              laborum dolor
            </p>
            <p>
              aut et repudiandae excepturi enim tempore fugiat aspernatur rerum,
              laudantium ipsam porro recusandae dolorum vitae consequatur ipsa
              blanditiis ab. Dolores fugit quidem voluptates cum? Eligendi
              aliquid id eaque accusantium animi doloribus ab suscipit ea illum
              quas ipsa ex omnis amet rerum deserunt nihil reprehenderit
              consequuntur, nemo nostrum numquam. Modi voluptate voluptatem
              minima perferendis non facere vitae laudantium consequuntur minus
              excepturi, eveniet explicabo officiis optio accusantium maiores
              provident qui aliquam fugit quas cumque animi fuga! Ratione autem,
              ipsa, alias eos dolorum dicta debitis at minus maxime iste itaque?
              Rem eveniet molestias esse harum dignissimos unde, distinctio
              cumque molestiae, consequatur assumenda sequi quibusdam deleniti
              atque est itaque ratione reiciendis soluta impedit? Totam enim
              officiis harum dolor fugiat unde voluptas adipisci nulla tempora!
              Saepe nulla, beatae
            </p>
            <p>
              voluptates ut, esse recusandae ab rerum culpa delectus blanditiis
              dolore eligendi excepturi quod? Adipisci dicta, itaque fugit
              facilis ipsum unde nobis, ex dolorem quaerat, error laborum
              excepturi et sed assumenda! Ipsam obcaecati atque nihil eaque et
              nobis, recusandae rerum, consequatur numquam veniam adipisci
              molestiae magnam ut, iusto assumenda unde officia quo
              exercitationem accusamus excepturi voluptate ducimus? Ullam,
              ratione dolore! Molestias maiores cupiditate voluptates
              reprehenderit adipisci aut dolor quibusdam, vel repellendus est
              harum eos maxime suscipit, quas vitae accusantium id assumenda
              sequi, quis in asperiores nobis aperiam! Delectus aspernatur
              nesciunt commodi unde ab ad, voluptas sit, error quo, totam ex
              quaerat eum alias! Assumenda, iure! Voluptatum nobis minus dolores
              quibusdam vero nulla ducimus ex porro qui praesentium corrupti,
              ea, iusto excepturi soluta nam. Dignissimos labore fugit aut sequi
              voluptatum, nisi consequatur quia iusto nulla earum amet
            </p>
            <p>
              fugiat dolores deleniti architecto illo impedit distinctio,
              accusamus id, voluptate mollitia at nam cumque autem! Dolorem ad
              illo reiciendis inventore, sint et laboriosam ducimus itaque harum
              maxime aperiam molestiae ratione voluptate, iusto, enim repellat
              asperiores aliquid nulla incidunt velit. Necessitatibus modi sequi
              doloribus non assumenda dolor quasi culpa quibusdam. Quia, est
              sunt, reprehenderit porro nam iste illo sint totam architecto
              facilis numquam iure. Qui facilis excepturi blanditiis illo eaque
              quo sit eligendi soluta vero aliquam pariatur temporibus
              perspiciatis aspernatur unde iste ipsa, quisquam, atque ratione
              earum beatae dolore libero ex! Iure, in! Nemo, eligendi quaerat
              obcaecati, voluptas pariatur ea magni cumque neque architecto quia
              doloribus nam iure. Quaerat, nobis cum blanditiis delectus saepe
              iste sint alias assumenda accusantium libero optio quo fuga magni
              nihil esse doloremque dolorem enim rem? Nihil eum aspernatur minus
              praesentium ipsum vitae quisquam! Omnis officia molestias saepe,
              sint voluptatem
            </p>
            sunt eius ab dolores porro quam harum neque earum natus ipsa
            aliquam, libero, quidem deleniti blanditiis magni nisi. Adipisci
            facere ipsum esse quod suscipit, illum aperiam quia debitis magnam
            iusto? Et deserunt natus laudantium illum! Quisquam vero temporibus
            ex ullam, praesentium repellat soluta tempora illum iste quos sed
            pariatur. Cumque, fugiat beatae! Quibusdam sit tenetur, aperiam iure
            corporis est ipsum corrupti? Perspiciatis, fugiat ratione!
            <p>
              dolorem maxime fugiat illum voluptate illo voluptates cupiditate,
              tenetur laborum architecto, eum aut unde dicta minima nihil quis.
              Odit ipsam enim sit asperiores culpa id eos delectus nam ad
              consectetur unde labore quibusdam cum inventore sunt, nisi sed
              doloribus. Doloribus laborum debitis ipsum qui numquam fugit,
              animi cupiditate ducimus dolor illo atque iure iusto recusandae
              repudiandae nihil, vitae dignissimos libero, voluptate architecto?
              Blanditiis commodi, omnis laboriosam harum, voluptas odio vel
              sapiente cum velit magni accusamus iste repellat voluptatem cumque
              possimus voluptates laudantium earum perspiciatis dolores eveniet
              doloribus? Inventore qui sint delectus quas impedit ipsum dolore
              odio nam distinctio amet id voluptatem velit sapiente non hic
              voluptatum beatae, tempora similique voluptates natus tenetur.
              Vero ullam fugit ipsum, consectetur voluptatum similique neque,
              necessitatibus itaque ipsa aut vel perspiciatis nulla in
              reiciendis deleniti? Reprehenderit odio harum ad porro repellendus
              cupiditate incidunt totam provident?
            </p>
            <p>
              dolorem maxime fugiat illum voluptate illo voluptates cupiditate,
              tenetur laborum architecto, eum aut unde dicta minima nihil quis.
              Odit ipsam enim sit asperiores culpa id eos delectus nam ad
              consectetur unde labore quibusdam cum inventore sunt, nisi sed
              doloribus. Doloribus laborum debitis ipsum qui numquam fugit,
              animi cupiditate ducimus dolor illo atque iure iusto recusandae
              repudiandae nihil, vitae dignissimos libero, voluptate architecto?
              Blanditiis commodi, omnis laboriosam harum, voluptas odio vel
              sapiente cum velit magni accusamus iste repellat voluptatem cumque
              possimus voluptates laudantium earum perspiciatis dolores eveniet
              doloribus? Inventore qui sint delectus quas impedit ipsum dolore
              odio nam distinctio amet id voluptatem velit sapiente non hic
              voluptatum beatae, tempora similique voluptates natus tenetur.
              Vero ullam fugit ipsum, consectetur voluptatum similique neque,
              necessitatibus itaque ipsa aut vel perspiciatis nulla in
              reiciendis deleniti? Reprehenderit odio harum ad porro repellendus
              cupiditate incidunt totam provident?
            </p>
            <p>
              dolorem maxime fugiat illum voluptate illo voluptates cupiditate,
              tenetur laborum architecto, eum aut unde dicta minima nihil quis.
              Odit ipsam enim sit asperiores culpa id eos delectus nam ad
              consectetur unde labore quibusdam cum inventore sunt, nisi sed
              doloribus. Doloribus laborum debitis ipsum qui numquam fugit,
              animi cupiditate ducimus dolor illo atque iure iusto recusandae
              repudiandae nihil, vitae dignissimos libero, voluptate architecto?
              Blanditiis commodi, omnis laboriosam harum, voluptas odio vel
              sapiente cum velit magni accusamus iste repellat voluptatem cumque
              possimus voluptates laudantium earum perspiciatis dolores eveniet
              doloribus? Inventore qui sint delectus quas impedit ipsum dolore
              odio nam distinctio amet id voluptatem velit sapiente non hic
              voluptatum beatae, tempora similique voluptates natus tenetur.
              Vero ullam fugit ipsum, consectetur voluptatum similique neque,
              necessitatibus itaque ipsa aut vel perspiciatis nulla in
              reiciendis deleniti? Reprehenderit odio harum ad porro repellendus
              cupiditate incidunt totam provident?
            </p>
            <p className="box">
              dolorem maxime fugiat illum voluptate illo voluptates cupiditate,
              tenetur laborum architecto, eum aut unde dicta minima nihil quis.
              Odit ipsam enim sit asperiores culpa id eos delectus nam ad
              consectetur unde labore quibusdam cum inventore sunt, nisi sed
              doloribus. Doloribus laborum debitis ipsum qui numquam fugit,
              animi cupiditate ducimus dolor illo atque iure iusto recusandae
              repudiandae nihil, vitae dignissimos libero, voluptate architecto?
              Blanditiis commodi, omnis laboriosam harum, voluptas odio vel
              sapiente cum velit magni accusamus iste repellat voluptatem cumque
              possimus voluptates laudantium earum perspiciatis dolores eveniet
              doloribus? Inventore qui sint delectus quas impedit ipsum dolore
              odio nam distinctio amet id voluptatem velit sapiente non hic
              voluptatum beatae, tempora similique voluptates natus tenetur.
              Vero ullam fugit ipsum, consectetur voluptatum similique neque,
              necessitatibus itaque ipsa aut vel perspiciatis nulla in
              reiciendis deleniti? Reprehenderit odio harum ad porro repellendus
              cupiditate incidunt totam provident?
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
