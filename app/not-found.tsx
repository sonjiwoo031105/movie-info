import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Not found",
}

const NotFound = () => {
    return (
        <div>
            <h1>Not found!</h1>
        </div>
    )
}

export default NotFound;
