import Reveal from "../components/Reveal";
import styles from "../styles/legal.module.css";

export default function Legal() {
  return (
    <section className={styles.main} id="legal">
      <h1 className={styles.title}>Legal</h1>
      <div className={styles["text-container"]}>
        <Reveal from="left">
          <p className={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            delectus, voluptate facere totam numquam, dicta veniam voluptates
            rem atque aliquid id ipsam nam excepturi nihil quos? Illo architecto
            quam nihil odio quidem nulla voluptatem velit neque ipsam. Inventore
            adipisci praesentium alias mollitia. Magni quam expedita deleniti,
            debitis voluptas pariatur omnis amet aliquam voluptatibus molestias
            corporis consectetur ea, voluptates eveniet, ex minima reiciendis
            quaerat. Officia minima adipisci enim laborum. Ipsam expedita culpa
            iure neque quae cumque eaque nulla animi non ea voluptatem rem,
            nihil reiciendis, vero officiis, id rerum pariatur corporis ex
            dolore! Nemo voluptatem maxime voluptates incidunt nam facere qui.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
