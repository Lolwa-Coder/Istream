import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    UserIcon,
    SearchCircleIcon
} from "@heroicons/react/outline";

function Header() {
    return(
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className="flex flex-grow justify-evenly max-w-2xl ">
              <HeaderItem title="HOME" Icon ={HomeIcon} />
              <HeaderItem title="Trending" Icon ={LightningBoltIcon} />
              <HeaderItem title="Verified" Icon ={BadgeCheckIcon} />
              <HeaderItem title="Collection" Icon ={CollectionIcon} />
              <HeaderItem title="You" Icon ={UserIcon} />
              <HeaderItem title="Search" Icon ={SearchCircleIcon} />
          </div>
            {//<Image className="object-contain" src="http://links.papareact.com/ua6" width={200} height={100} />
}
        </header>
    )
}
export default Header;