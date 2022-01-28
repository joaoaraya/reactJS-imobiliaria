import { Link } from "../link";

export function Header() {
    return (
        <div>
            <img src="a" alt="logo" />
            <a href="#">Nav Link</a>
            <a href="#">Nav Link</a>
            <a href="#">Nav Link</a>
            <a href="#">Nav Link</a>
            <a href="#">
                <button>
                    <Link txt="Work with us" />
                </button>
            </a>
        </div>
    )
}