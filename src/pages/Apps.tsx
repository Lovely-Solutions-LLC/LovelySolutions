import styles from "../styles/apps.module.css";
import Reveal from "../components/Reveal";

export default function Apps() {
  return (
    <section className={styles.main} id="apps">
      <h1 className={styles.title}>Apps</h1>
      <div className={`${styles.project}`}>
        <div className={styles.imgs}>
          <Reveal from="bottom">
            <img
              className={styles["img-left"]}
              src="/app_card_image.png"
              alt=""
            />
          </Reveal>
        </div>
        <Reveal from="bottom">
          <div className={styles["text-container"]}>
            <div className={styles["title-container"]}>
              <img className={styles.logo} src="/app_logo.png" alt="" />
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
    </section>
  );
}
