import { Button, Input } from "@modules/form"
import { createCustomer } from "@/lib/actions"
const Form = () => {
    return (
        <form action={createCustomer}>
            <Input
                type="text"
                name="name"
                label="نام"
                placeholder="نام مشتری را وارد کنید"
            />
            <Input
                type="email"
                name="email"
                label="ایمیل"
                placeholder="ایمیل مشتری را وارد کنید"
            />
            <Input
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/webp"
                name="imageUrl"
                label="عکس پروفایل"
            />
            <div>
                <Input type="submit" value="ایجاد" />
                <Button
                    className="p-2"
                    href="./"
                >
                    انصراف
                </Button>
            </div>
        </form>
    )
}

export default Form