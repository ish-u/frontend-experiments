import styles from "./LinksAndButton.module.css";
const Link = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <span className="text-2xl font-bold hover:border-b-4 border-sky-700 transition-[border] ease-in-out duration-150">
          Link
        </span>
      </div>
      <div>
        <span className={`${styles.Link} Link text-2xl font-bold `}>Link</span>
      </div>
    </div>
  );
};

export default Link;
