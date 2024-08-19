import { Select } from "@modules/form"
import { fetchUsers } from "@/lib/data"


export const Users = async ({ defaultValueName, defaultValueId, ...rest }) => {
    const users = await fetchUsers()
    return (
        <Select {...rest}
            defaultValueId={defaultValueId}
            defaultValueName={defaultValueName}
            label="مشتری"
            name="user"
        >
            {
                users.map(user =>
                    <option
                        key={user.id}
                        value={user.id}
                    >
                        {user.name}
                    </option>
                )
            }
        </Select>

    )
}