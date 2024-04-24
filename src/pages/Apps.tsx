import styles from "../styles/apps.module.css";
import Reveal from "../components/Reveal";

export default function Apps() {
  return (
    <section className={styles.main} id="apps">
      <h1 className={styles.title}>Apps</h1>

      {/* update templates */}

      <div className={`${styles.project}`}>
        <div className={styles.imgs}>
          <Reveal from="bottom">
            <img className={styles["img-left"]} src="/ut_card.png" alt="" />
          </Reveal>
        </div>
        <Reveal from="bottom">
          <div className={styles["text-container"]}>
            <div className={styles["title-container"]}>
              <img className={styles.logo} src="/ut_logo.png" alt="" />
              <h2>Update Templates</h2>
            </div>
            <h3>Create and store templates for frequently made updates</h3>
            <p className={styles.text}>
              Create and store templates for frequently made updates in a
              close-by item view! Users can have their own templates, and also
              share with a collection available to all board members. Templates
              are stored with a "Copy to Clipboard" button right in view, which
              makes for easy copy and pasting of long, redundant updates.
              Instead of typing them out, copy them over from our item view into
              the updates section instantly! Questions?{" "}
              <a
                className={styles["demo-link"]}
                href="https://calendly.com/lovelysolutions/consultation"
                target="_blank"
              >
                Book a demo
              </a>
            </p>
            <div className={styles.links}>
              <a href="https://auth.monday.com/oauth2/authorize?client_id=fcd66ce926a909a32e80ba5346fd5b22&response_type=install">
                <img
                  alt="Add to monday.com"
                  height="42"
                  src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/Tal/4b5d9548-0598-436e-a5b6-9bc5f29ee1d9_Group12441.png"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* SLD */}

      <div className={`${styles.project}`}>
        <Reveal from="bottom">
          <div className={styles["text-container"]}>
            <div className={styles["title-container"]}>
              <img className={styles.logo} src="/sld_logo.png" alt="" />
              <h2>Status Label Directory</h2>
            </div>
            <h3>Easily document processes & create SOPs for status labels</h3>
            <p className={styles.text} style={{ paddingRight: "2rem" }}>
              Status Label Directory (SLD) is a powerful tool designed to
              streamline standard operating procedure (SOP) documentation and
              enhance workflow management within monday.com. Tailored for teams
              seeking to optimize their processes and improve productivity, SLD
              offers a centralized hub where users can organize, document, and
              track SOPs associated with status labels in their monday.com
              boards. Questions?{" "}
              <a
                className={styles["demo-link"]}
                href="https://calendly.com/lovelysolutions/consultation"
                target="_blank"
              >
                Book a demo
              </a>
            </p>
            <div className={styles.links}>
              <a href="https://auth.monday.com/oauth2/authorize?client_id=8121f847511946b234f84f1933539685&response_type=install">
                <img
                  alt="Add to monday.com"
                  height="42"
                  src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/uploads/Tal/4b5d9548-0598-436e-a5b6-9bc5f29ee1d9_Group12441.png"
                />
              </a>
            </div>
          </div>
        </Reveal>
        <div className={styles.imgs}>
          <Reveal from="bottom">
            <img className={styles["img-left"]} src="/sld_card.png" alt="" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
