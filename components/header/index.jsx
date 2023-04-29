import Link from "next/link";

const Header = () => {
    return (

        <header className="bg-blue-500 h-[10vh] flex justify-center items-center ">
            <div className="container mx-auto flex justify-between items-center">
            <Link href={"/"} className="text-white text-xl hover:text-yellow-400 transition-all duration-300">ایمان فیلم</Link>
            <nav>
                <ul className="flex justify-start items-center gap-8">
                    <li>
                        <Link className="bg-white transition-all duration-500 hover:bg-yellow-500 hover:text-white text-blue-500 flex justify-center items-center w-20 h-8 rounded-md" href={"/"}>خانه</Link>
                    </li>
                    <li>
                        <Link className="bg-white transition-all duration-500 hover:bg-yellow-500 hover:text-white text-blue-500 flex justify-center items-center w-20 h-8 rounded-md" href={"/"}>فیلم ها</Link>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default Header;