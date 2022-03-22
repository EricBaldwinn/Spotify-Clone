import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/outline";

export const Sidebar = () => {
  return (
    <div>
        <div className="text-gray-500 p-5 text-sm border-r border-grey-900">
          <button className="flex items-center space-x-2 hover:text-white">
            <HomeIcon className="h-5 w-5"/>
            <p>Home</p>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
            <SearchIcon className="h-5 w-5"/>
            <p>Search</p>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
            <LibraryIcon className="h-5 w-5"/>
            <p>Library</p>
          </button>
          <hr className="border-t-[0.1px] border-gray-900"/>

          <button className="flex items-center space-x-2 hover:text-white">
            <PlusCircleIcon className="h-5 w-5"/>
            <p>Create Playlist</p>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
            <HeartIcon className="h-5 w-5"/>
            <p>Favorites</p>
          </button>
          <button className="flex items-center space-x-2 hover:text-white">
            <RssIcon className="h-5 w-5"/>
            <p>Episodes</p>
          </button>
          <hr className="border-t-[0.1px] border-gray-900"/>
        </div>
    </div>
  );
}