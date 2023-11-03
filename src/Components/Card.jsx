
function Card(props) {
  
  return (
    <div key={props.id}>
      <div className="relative overflow-hidden transition duration-200 transform rounded-2xl border-4 border-orange-300 bg-orange-300 bg-opacity-50 hover:-translate-y-2 hover:shadow-2xl">
        <img
          className="object-contain w-full h-56 md:h-64 xl:h-80"
          src={props.image}
          alt=""
        />
        <div className="text-center p-4 font-mono bg-orange-300 hover:hidden">
          {props.name}
          <br />
          {props.jname}
        </div>
        <div className="font-mono absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-80 opacity-0 hover:opacity-100">
          <p className="mb-4 text-lg font-bold text-gray-100">Mona Lisa</p>
          <p className="text-sm tracking-wide text-gray-300">
            Painted between 1503 and 1517, Da Vinci’s alluring portrait has been
            dogged by two questions since the day it was made: Who’s the subject
            and why is she smiling?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
