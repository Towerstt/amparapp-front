/* eslint-disable @next/next/link-passhref */
import Link from "next/link";

export default function DynamicButton(props) {
  const { link, children, className: style, onClick, onSubmit, type } = props;

  if (props.link) {
    return (
      <Link href={link}>
        <button className={style}>{children}</button>
      </Link>
    );
  } else {
    return <button className={style?style:""} onClick={onClick} onSubmit={onSubmit} type={type}>{children}</button>;
  }
}
