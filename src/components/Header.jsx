export default function Header() {
  return (
    <header className="w-full flex justify-between items-center bg-regalBlue px-8 py-2 border-b-4 border-b-goldenYellow">
      <div className="flex items-center">
        <img
          src="/src/assets/NU_shield.png"
          alt="NU Logo"
          className="size-10 mr-2"
        />
        <h1 className="uppercase text-lg text-white tracking-widest">
          CLASSTRACK
        </h1>
      </div>
      <div className="flex items-center ">
        <img
          src="/src/assets/defaultProfile.jpg"
          alt="default profile"
          className="size-10 mr-2"
        />
        <h3 className="text-white ">Username</h3>
      </div>
    </header>
  );
}
