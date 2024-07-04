import { randomUUID } from "crypto"

const page = () => {
    const uuid = randomUUID()

    return (
        <div>
            test page
            <p>
                {
                  randomUUID()
                }
            </p>
        </div>
    )
}

export default page