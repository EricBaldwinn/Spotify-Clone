import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {shuffle} from "lodash";
import { playlistIdState, playlistState } from "../atoms/playlistAtoms";
import {useRecoilState, useRecoilValue} from "recoil";
import {useSpotify} from "../hooks/useSpotify";

const colors = [
  "from-blue-500",
  "from-pink-500",
  "from-yellow-500",
  "from-green-500"
];


export const Center = () => {
    const spotifyApi = useSpotify();
    const { data: session } = useSession();
    const [color, setColor] = useState(null);
    const playlistId = useRecoilValue(playlistIdState);
    const [playlist, setPlaylist] = useRecoilState(playlistState);

    useEffect(() => {
      setColor(shuffle(colors).pop());
    }, [playlistId]);

    useEffect(() => {
      spotifyApi.getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body)
      })
      .catch((err) => {
        console.log("something went wrong", err)
      })
    }, [spotifyApi, playlistId]);


  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img className="rounded-full w-10 h-10" src={session?.user.image} alt="" />
          <h2 className="text-white">{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5"/>
        </div>
      </header>
      <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white padding-8`}>
      </section>
    </div>
  )
}