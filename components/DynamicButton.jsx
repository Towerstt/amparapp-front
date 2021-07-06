import Link from "next/link";

export default function DynamicButton(props) {
  const { link, children, className: style, onClick, type } = props;

  if (props.link) {
    return (
      <Link href={link}>
        <a className={style}>{children}</a>
      </Link>
    );
  } else {
    return <button className={style} onClick={onClick} type={type}>{children}</button>;
  }
}
