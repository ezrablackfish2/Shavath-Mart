import Button from "./Button";

export default function Search() {
    return (
        <div className="w-[20%]">
            <input className="outline-none  border-md border-solid border-2 border-gray-200 w-[80%]" type="text" placeholder="Search"/>
            <Button className="text-white bg-blue-700 px-2 py-1 rounded-md" text="Search" />
        </div>
    )
}
