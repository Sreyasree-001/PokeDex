import Card from "./Card";

function Body() {
  return (
    <div>
      <body className="flex h-auto w-auto my-28 justify-center mx-2 bg-black">
        <div className="sm:grid sm:grid-cols-1 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 xl:flex flex-row">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </body>
    </div>
  );
}

export default Body;
