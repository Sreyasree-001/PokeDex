import './Design/Card.css'
function Card(props) {
  return (
    <div key={props.id}>
      <div
        className="relative overflow-hidden transition duration-200 transform rounded-2xl bg-opacity-50 hover:-translate-y-2 hover:shadow-2xl hover:cursor-pointer"
        style={props.style}
      >
        <img
          className="object-contain w-full h-56 md:h-64 xl:h-80"
          src={props.image}
          alt=""
        />
        <div
          className="text-center p-4 font-mono hover:hidden bg-opacity-50"
          style={props.style}
        >
          {props.name}
          <br />
          {props.jname}
        </div>
        <div className="font-mono absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-80 opacity-0 hover:opacity-100">
          <p className="mb-4 text-lg font-bold text-gray-100">
            <span>#{props.id}</span> {props.name}{"   "} <span style={props.style} className="p-1 px-4 rounded-full text-black">{props.type}</span>
          </p>

          <p className="text-sm text-gray-300">{props.description}</p>
          <div class="parent mt-4 text-sm text-gray-300 border border-white">
            <div class="div1 border border-white p-1"> HP </div>
            <div class="div2 border border-white p-1"> {props.hp} </div>
            <div class="div3 border border-white p-1"> Attack </div>
            <div class="div4 border border-white p-1"> {props.attack} </div>
            <div class="div5 border border-white p-1"> Defense </div>
            <div class="div6 border border-white p-1"> {props.defense}</div>
            <div class="div7 border border-white p-1"> Speed </div>
            <div class="div8 border border-white p-1"> {props.speed}</div>
            <div class="div9 border border-white p-1"> Height </div>
            <div class="div10 border border-white p-1"> {props.height}</div>
            <div class="div11 border border-white p-1"> Weight </div>
            <div class="div12 border border-white p-1"> {props.weight}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
