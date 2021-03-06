
import Link from "next/link";

export default function Icons(props) {
  return (
    <Link href={props.link}>
    <button onClick={props.onClick}>
      <i className={`${props.source}`}></i>
    </button>
    </Link>

    
  );
}
