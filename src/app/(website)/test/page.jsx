import { Button } from "@modules/form"

const arr = [
    {
        color: 1
        , size: 2
        , inventory: 30
    },
    {
        color: 2
        , size: 1
        , inventory: 0
    },
    {
        color: 3
        , size: 3
        , inventory: 100
    },
    {
        color: 3
        , size: 2
        , inventory: 0
    },
]
new Set().

console.log("arr =>", arr)
const page = () => {
    return (
        <>
            <div>
                <p>
                    color:
                </p>
                {
                    arr.map((item) =>
                    (
                        <Button key={item}>
                            {item.color}
                        </Button>
                    )
                    )
                }
            </div>
            <div>
                <p>
                    size:
                </p>
                {
                    arr.map((item) =>
                    (
                        <Button key={item}>
                            {item.size}
                        </Button>
                    )
                    )
                }
            </div>
        </>
    )
}

export default page