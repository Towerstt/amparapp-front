import Link from "next/link";

export default function MenuList(props) {
  return (
    <div className="flex justify-center items-center ">
      <ul>
        <Link href={`/${props.link}`}>
          <li>
            <button className={`${props.classNameButton}`}>
            <i className={props.classNameI}></i>
            {props.text}
            </button>
          </li>
        </Link>
      </ul>
    </div>
  );
}
