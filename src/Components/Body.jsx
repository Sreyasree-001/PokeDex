import Card from "./Card"

function Body() {
    return (
        <div>
            <body className="flex h-auto w-auto my-28 justify-center mx-2">
                    <div className="sm:grid grid-cols-1  lg:grid grid-cols-2  md:grid grid-cols-2 xl:flex flex-row">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    </div>
            </body>
        </div>
    )
}

export default Body
