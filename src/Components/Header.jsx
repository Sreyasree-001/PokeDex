import PokeLogo from "../assets/PokeDex-02-11-2023.png";
import "../App.css";
function Header() {
  return (
    <>
      <div className="z-20 sticky top-0 scroll bg-opacity-80 backdrop-filter backdrop-blur-lg bg-gray-800 sm:flex sm:justify-center border-b-8 border-gray-200">
        <h1 className="flex items-center justify-center font-bold font-serif sm:m-3">
          <img src={PokeLogo} alt="PokeLogo" className="w-96" />
        </h1>
        <h2 className="flex items-center justify-center text-center sm:text-xl text-white font-mono m-3 sm:w-96">
          Pokédex Powered by React: The Ultimate Companion!
        </h2>
      </div>
    </>
  );
}

export default Header;
