import { headStyle } from "../utils/styles.utils";

export default function HeaderRow(props) {
  const { href, content, divsty, asty } = props;
  return (
    <div className={divsty}>
      <a
        href={href}
        className = {`${headStyle} ${asty}`} 
      > {content} </a>
    </div>
  );
}