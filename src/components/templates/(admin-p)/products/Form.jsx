import { Input, Select } from "@modules/form"
import { fetchColors, fetchProductById, fetchSizes } from "@/lib/data"

export const Id = (props) => {
  return (
    <Input
      type="text"
      name="id"
      id="id"
      className="bg-lavender text-black/50"
      label="شناسه محصول"
      required={true}
      {...props}
    />

  )
}
export const Name = (props) => {
  return (
    <Input
      type="text"
      name="name"
      id="name"
      className="bg-lavender text-black/50"
      label="نام"
      required={true}
      {...props}
    />

  )
}
export const EnglishName = (props) => {
  return (
    <Input
      type="text"
      name="english_name"
      id="english_name"
      className="bg-lavender text-black/50 text-ltr"
      label="نام انگلیسی"
      required={true}
      {...props}
    />

  )
}
export const Colors = async ({  defaultValueName, defaultValueId, ...rest }) => {
  const colors = await fetchColors()
  return (
    <Select {...rest}
      defaultValueId={defaultValueId}
      defaultValueName={defaultValueName}
      label="رنگ"
      name="color"
    >
      {
        colors.map(color =>
          <option
            key={color.id}
            value={color.id}
          >
            {color.name}
          </option>
        )
      }
    </Select>

  )
}
export const Sizes = async ({  defaultValueName, defaultValueId, ...rest }) => {
  const colors = await fetchSizes()
  return (
    <Select {...rest}
      defaultValueId={defaultValueId}
      defaultValueName={defaultValueName}
      label="اندازه"
      name="size"
    >
      {
        colors.map(size =>
          <option
            key={size.id}
            value={size.id}
          >
            {size.name}
          </option>
        )
      }
    </Select>

  )
}

export const Inventory = (props) => {
  console.log("inventory =>", props)
  return (
    <Input
      type="number"
      step="1"
      name="inventory"
      id="inventory"
      className="bg-lavender text-black/50"
      label="موجودی"
      required={true}
      {...props}
    />
  )
}



