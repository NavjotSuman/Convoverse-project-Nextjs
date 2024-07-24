import { Lock } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const ChatPlaceHolder = () => {
  return (
    <div className="w-3/4 bg-gray-secondary flex flex-col items-center justify-center py-10">
      <div className="flex flex-col items-center w-full justify-center pb-10 pt-32 gap-4">
        <Image src={"/Converse.png"} alt="Hero" width={181} height={181} />
        <p className="text-3xl mt-4 font-extralight mb-2">
          Welcome to Convoverse! Let&apos;s get you connected.
        </p>
        <p className="w-1/2 text-center text-gray-primary text-sm text-muted-foreground">
          See who&apos;s online and start a chat or video call! Whether it&apos;s catching up with a friend or collaborating on a project, Convoverse makes it easy to connect
        </p>

        {/* <Link href="https://github.com/navjotsuman/" className="rounded-full my-5 bg-green-primary hover:bg-green-secondary">
          Github - NavjotSuman
        </Link> */}
        {/* <Link href="https://github.com/navjotsuman/" className="rounded-full my-5 bg-green-primary hover:bg-green-secondary" passHref legacyBehavior> */}
        <a href="https://github.com/navjotsuman/" className="rounded-full my-5 bg-green-primary hover:bg-green-secondary hover:text-yellow-50 px-3 py-3" target="_blank" >Github - NavjotSuman</a>
        {/* </Link> */}
      </div>
      <p className="w-1/2 mt-auto text-center text-gray-primary text-xs text-muted-foreground flex items-center justify-center gap-1">
        <Lock size={10} /> Your personal messages are end-to-end encrypted
      </p>
    </div>
  );
};
export default ChatPlaceHolder;
