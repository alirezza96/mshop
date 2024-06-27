import localFont from "next/font/local"

const dana = localFont({
  src: [
    {
      path: "../fonts/Dana/woff2/DanaFaNum-Regular.woff2",
      style: "light"
    },
    {
      path: "../fonts/Dana/woff2/DanaFaNum-Medium.woff2",
      style: "medium"
    },
    {
      path: "../fonts/Dana/woff2/DanaFaNum-DemiBold.woff2",
      style: "bold"
    },
  ],
  variable: "--font-dana"
})
const morabba = localFont({
  src: [
    {
      path: "../fonts/Morabba/woff2/Morabba-Light.woff2",
      style: "light"
    },
    {
      path: "../fonts/Morabba/woff2/Morabba-Medium.woff2",
      style: "medium"
    },
    {
      path: "../fonts/Morabba/woff2/Morabba-Bold.woff2",
      style: "bold"
    },
  ],
  variable: "--font-morabba"
})

export { dana, morabba }