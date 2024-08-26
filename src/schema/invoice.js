import z from "zod"

export const Schema = z.object({
    color: z.string({
        invalid_type_error: "رنگبندی را مشخص کنید"
    }),
    size: z.string({
        invalid_type_error: "سایز را مشخص کنید"
    }),
});
