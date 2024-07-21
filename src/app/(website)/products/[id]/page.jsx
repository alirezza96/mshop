import Breadcrumb from "@/app/components/modules/Breadcrumb"
import Image from "next/image"
import cover from "/public/products/01.webp"
import { HeartIcon } from "@heroicons/react/24/outline"
import Form from "@/app/components/templates/(website)/products/[id]/create-form"
import { fetchProductById } from "@/app/lib/data"
const breadcrumbs = [
    { label: "پوشاک", href: "wear" },
    { label: "زنانه", href: "womans" },
    { label: "دامن", href: "skirt" },
]
const colors = [
    "red", "yellow", "blue", "purple", "black", "white"
]
const sizes = [
    "xs", "sm", "ms", "lg", "xl", "xxl"
]
const page = async ({ params }) => {
    const id = params.id
    const product = await fetchProductById(id)
    const like = true
    return (
        <div>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <div className="my-3 flex gap-x-8 ">
                <Image
                    src={product.thumbnail_url}
                    alt={`تصویر محصول ${product.fa}`}
                    height={540}
                    width={405}
                    className="rounded-lg disabled-drag" />
                <div className="flex-auto flex flex-col justify-between min-h-[540px] ">
                    <div className="space-y-[10px]">

                        <div className="flex justify-between gap-4">
                            <h2 className="text-base">
                                {product.fa}
                            </h2>
                            <HeartIcon className={`w-6 h-6 cursor-pointer hover:fill-Fuchsia/40 hover:text-Fuchsia ${like ? "fill-Purple text-Purple" : ""}`} />
                        </div>
                        <div className="h-px mt-4 bg-gray"></div>
                        <p className="text-sm/7 text-black/60">
                            کد محصول:
                            <span className="">
                                {product.id}
                            </span>
                        </p>
                        <Form id={id} colors={colors} sizes={sizes} />

                    </div>
                </div>
            </div>
            <div className="box  flex justify-around gap-2 p-1 font-morabba sticky text-center top-12 md:top-14 ">
                <a href="#spec" className="bg-Purple/20 flex-1 p-2 rounded-md">
                    مشخصات
                </a>
                <a href="#desc" className=" flex-1 p-2 rounded-md">
                    توضیحات
                </a>
            </div>
            <div className="space-y-6">
                <p id="spec" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam vitae maiores molestias ab dignissimos aspernatur amet alias consectetur facere laudantium dolorem et neque ut dolore provident, reiciendis ipsam voluptatibus.
                    Pariatur unde tenetur expedita quisquam ratione? Aut, consectetur alias similique doloremque, placeat voluptas numquam minima, totam corporis ducimus nam autem ad molestias quis est laborum aspernatur recusandae voluptatibus libero saepe?
                    Possimus ut quis adipisci accusantium asperiores neque expedita libero vel placeat. Esse repudiandae inventore quo consequuntur officiis rerum, quasi velit animi repellendus fugit dignissimos molestiae aliquam quibusdam aliquid, tempora at?
                    Tempora excepturi dolore labore in eligendi aspernatur repudiandae quidem ad nesciunt doloremque necessitatibus illum quam libero suscipit iusto nisi, dolores impedit ea at sunt, modi nostrum consectetur. Vitae, veniam aliquam!
                    Nisi reprehenderit porro ab optio dicta, dolorem vero fuga laboriosam nulla, soluta non perspiciatis provident recusandae hic. Excepturi dolores ducimus beatae veniam cumque doloremque, quidem debitis, fuga exercitationem dignissimos ut?
                    Praesentium quos expedita accusamus ipsum accusantium nostrum id veritatis est sit? Ratione itaque odit eius neque harum deleniti, incidunt facilis nemo est assumenda quis alias accusantium voluptatem dolor repellendus cumque.
                    Perferendis alias deleniti, quia deserunt in odio dolor esse eos aut! Dignissimos assumenda sunt accusamus necessitatibus quo commodi itaque ullam quas! Necessitatibus ad rerum ipsam amet, officiis soluta corporis voluptatibus!
                    Molestiae eius vero esse quod consequuntur recusandae alias blanditiis molestias optio rerum quasi minima est iste quos quam aspernatur, placeat obcaecati veniam quo maiores beatae aliquam nesciunt ad! Maxime, perferendis.
                    Reprehenderit mollitia quidem, incidunt voluptatem quam ut eum dicta optio aliquam quisquam sequi maxime, eaque architecto ab cupiditate ea repellendus, praesentium modi. Soluta nisi dolorem ipsum dignissimos, pariatur consequuntur iste.
                    Ipsam commodi, quis deserunt ipsum hic laudantium expedita sapiente magnam obcaecati soluta eligendi molestias accusamus eaque illum nisi odio aut aliquid delectus minus repudiandae iste officia, inventore harum voluptate. Debitis!
                    Quas facilis maiores nemo accusantium harum modi aspernatur reiciendis omnis eaque voluptatibus fugiat iusto, numquam possimus non. Commodi corporis, numquam excepturi itaque, consequuntur culpa eius qui beatae adipisci illo at.
                    Autem, amet laudantium voluptas soluta possimus enim tempora quo distinctio fugiat, et quaerat corrupti. Quo repudiandae eos assumenda totam fugiat ex aperiam, deleniti maxime fuga, explicabo ipsam tempora quibusdam labore?
                    Magni aliquam, corporis harum numquam fugit veniam delectus ad, provident dolor molestiae suscipit, sed eveniet reprehenderit cupiditate doloremque. Dolorem tempora porro quidem et ex in magni voluptates temporibus eius animi.
                    Harum iusto nisi rerum culpa? Odit nihil consequatur reprehenderit accusamus eius ducimus placeat delectus? Rerum ad, velit voluptates est molestias animi quos ipsum, porro harum aperiam earum, tempore cupiditate optio.
                    Dolor atque eos, sunt distinctio officiis dicta maxime consequatur tempora ut dolore veritatis! Delectus ab est fuga illum vel reiciendis ipsa dolore! Ab aspernatur eius tenetur quis accusantium esse. Quisquam!
                    Iste, alias eveniet impedit tenetur adipisci quisquam fugiat ut maxime doloremque laboriosam cum aspernatur cumque quod dolorum nisi esse ad. Dolor consequatur illum labore repellat placeat iusto tenetur et consectetur.
                    Voluptates explicabo placeat, alias aperiam rerum inventore, quia tenetur deleniti temporibus voluptatum, nulla asperiores soluta sed ex voluptatem nesciunt quibusdam deserunt dolor cum? Reprehenderit, sed? Odio sed molestias incidunt culpa!
                    Nihil officiis sequi culpa saepe, maiores rerum consectetur quis, odit laboriosam suscipit consequatur. Aliquid rem nam perspiciatis hic eligendi molestiae minus. Ea, sint tempore. Corporis praesentium ut esse laborum architecto!
                    Magni blanditiis autem modi tempore consectetur consequuntur rerum quasi nulla et non recusandae dolorum reiciendis inventore, corporis porro reprehenderit voluptas eaque ut esse natus ratione ducimus officia perferendis. Totam, deserunt!
                    Itaque, beatae quis doloribus in, aperiam deleniti cumque ab repellendus quas soluta saepe ea? Numquam illo quam ipsam possimus tenetur ipsa? Distinctio hic quisquam minus quo at assumenda temporibus dolorum?
                    Consectetur harum, exercitationem eaque voluptatem mollitia nemo maxime autem repellat quas. Libero voluptatum asperiores ratione suscipit maiores, autem, fugit illum, alias ab repellat dolorum! Dignissimos possimus reiciendis eveniet eaque exercitationem!
                    Vitae nemo recusandae perferendis molestias ipsum nihil! Optio aspernatur atque adipisci veritatis sit est ratione alias autem et? Reprehenderit officiis recusandae quaerat debitis nostrum ipsam maxime cumque inventore non praesentium.
                    Enim quos obcaecati nulla esse aliquid illo. Laudantium cum molestiae repellendus placeat earum laboriosam tempore aperiam, mollitia possimus sint ipsum qui eligendi quis ratione necessitatibus, voluptates iste minus, officiis doloremque.
                    Rem suscipit assumenda fugiat sed, quibusdam nemo ipsa praesentium tempore exercitationem labore enim veritatis excepturi quam perferendis mollitia magnam deserunt est reiciendis ab in cum similique temporibus velit! Impedit, doloremque.
                    Veniam eligendi vel voluptatem distinctio quod, expedita eaque quo, voluptatibus fuga cupiditate temporibus sapiente enim laborum saepe! Cupiditate esse reprehenderit, voluptate, impedit recusandae, corporis magnam doloremque asperiores cum ipsa vel!
                    Maxime, asperiores. Dolorem explicabo officiis quo asperiores, blanditiis reprehenderit inventore nulla eaque porro recusandae cupiditate, quos maxime voluptates corrupti qui a error odit unde distinctio id fugiat illum rerum. Quas.
                    Impedit laudantium libero, minus vero incidunt ab voluptatem a reprehenderit minima provident ea aliquid. Deserunt iusto ratione architecto blanditiis modi! Fugit, hic quibusdam libero deleniti unde assumenda dolorum debitis quidem.
                    Totam fugiat magnam laudantium expedita, dolore sunt voluptatum error, saepe itaque sed tempore deserunt soluta quo sequi recusandae dicta dignissimos modi optio provident voluptatibus quibusdam! Cum alias aspernatur esse numquam.
                    Quibusdam corporis quos totam rem optio sapiente distinctio, aliquid aspernatur voluptatibus quia veritatis eius consequuntur, laborum minima dolorum! Animi maiores nesciunt sunt assumenda iure. Ab modi nulla eveniet a sed.
                    Perspiciatis voluptate fuga, doloremque eaque, optio repellat velit accusantium, repellendus quos architecto molestias natus! Quo ipsum officia, doloremque provident consequatur quae fugit aut! Deserunt dolores est minus, officia fuga eaque.
                    Expedita provident error id, reiciendis facilis ut, quos fuga natus sit exercitationem placeat eum excepturi ipsa minus voluptates. Nam minima perspiciatis illum. Excepturi possimus totam esse veritatis, similique nihil illum!
                    Est alias, necessitatibus ex quod fugiat magni eligendi similique amet accusantium fugit eaque beatae! Delectus corrupti culpa quisquam itaque modi, omnis ea alias voluptates in quae quaerat illum sequi sunt.
                    Blanditiis esse eaque hic nam labore et, neque excepturi repellendus at similique officiis veniam est quam dolorem ratione quasi quisquam amet exercitationem. Est, libero. Reiciendis sed id itaque sunt illum?
                    Quam nam officia vitae aliquam nobis tempore, optio odit nisi et nulla reiciendis rem fugiat voluptas labore ducimus, minima vel! Ut animi blanditiis voluptatem rem quidem, at tenetur repudiandae dolores.
                    Error illum sed corrupti iusto voluptates quidem, iste accusantium, quo quasi tempora, in eum exercitationem asperiores amet quae dolorum illo provident repudiandae dolores soluta blanditiis sint commodi harum rerum. Beatae.
                    Optio exercitationem voluptate neque dolor aspernatur, illo doloremque qui possimus debitis labore atque nemo. Ad blanditiis cupiditate soluta ab nisi. Nesciunt magnam optio ipsam cum ipsum laboriosam dolore accusamus voluptatem.
                    Aliquam omnis, consequuntur voluptate in explicabo, harum magnam cum fuga ducimus, repellat sunt reiciendis. Vero provident blanditiis veritatis minus laboriosam suscipit laudantium accusantium, culpa amet beatae alias officia, molestias expedita.
                    Ipsum voluptates officia quibusdam pariatur illum impedit cupiditate eligendi tenetur quam, eum veritatis laudantium, consectetur corrupti ab aliquam fuga voluptas sunt dolorem obcaecati id quo. Aliquid ab veniam deleniti iure.
                    Magni repellendus impedit, temporibus aliquam quam omnis officia laborum illum tenetur praesentium. Architecto sed mollitia sequi temporibus omnis adipisci veniam iusto unde nulla, nostrum ad. Iusto non illo quis ipsum?
                    Ullam, incidunt magni et corrupti hic fugit laborum accusantium alias amet consequuntur doloremque, delectus cumque repellendus fugiat neque. Quo officiis quisquam alias. Sed ut blanditiis, exercitationem adipisci non nemo molestias.
                </p>
                <p id="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil veniam vitae maiores molestias ab dignissimos aspernatur amet alias consectetur facere laudantium dolorem et neque ut dolore provident, reiciendis ipsam voluptatibus.
                    Pariatur unde tenetur expedita quisquam ratione? Aut, consectetur alias similique doloremque, placeat voluptas numquam minima, totam corporis ducimus nam autem ad molestias quis est laborum aspernatur recusandae voluptatibus libero saepe?
                    Possimus ut quis adipisci accusantium asperiores neque expedita libero vel placeat. Esse repudiandae inventore quo consequuntur officiis rerum, quasi velit animi repellendus fugit dignissimos molestiae aliquam quibusdam aliquid, tempora at?
                    Tempora excepturi dolore labore in eligendi aspernatur repudiandae quidem ad nesciunt doloremque necessitatibus illum quam libero suscipit iusto nisi, dolores impedit ea at sunt, modi nostrum consectetur. Vitae, veniam aliquam!
                    Nisi reprehenderit porro ab optio dicta, dolorem vero fuga laboriosam nulla, soluta non perspiciatis provident recusandae hic. Excepturi dolores ducimus beatae veniam cumque doloremque, quidem debitis, fuga exercitationem dignissimos ut?
                    Pgiat sed, quibusdam nemo ipsa praesentium tempore exercitationem labore enim veritatis excepturi quam perferendis mollitia magnam deserunt est reiciendis ab in cum similique temporibus velit! Impedit, doloremque.
                    Veniam eligendi vel voluptatem distinctio quod, expedita eaque quo, voluptatibus fuga cupiditate temporibus sapiente enim laborum saepe! Cupiditate esse reprehenderit, voluptate, impedit recusandae, corporis magnam doloremque asperiores cum ipsa vel!
                    Maxime, asperiores. Dolorem explicabo officiis quo asperiores, blanditiis reprehenderit inventore nulla eaque porro recusandae cupiditate, quos maxime voluptates corrupti qui a error odit unde distinctio id fugiat illum rerum. Quas.
                    Impedit laudantium libero, minus vero incidunt ab voluptatem a reprehenderit minima provident ea aliquid. Deserunt iusto ratione architecto blanditiis modi! Fugit, hic quibusdam libero deleniti unde assumenda dolorum debitis quidem.
                    Totam fugiat magnam laudantium expedita, dolore sunt voluptatum error, saepe itaque sed tempore deserunt soluta quo sequi recusandae dicta dignissimos modi optio provident voluptatibus quibusdam! Cum alias aspernatur esse numquam.
                    Quibusdam corporis quos totam rem optio sapiente distinctio, aliquid aspernatur voluptatibus quia veritatis eius consequuntur, laborum minima dolorum! Animi maiores nesciunt sunt assumenda iure. Ab modi nulla eveniet a sed.
                    Perspiciatis voluptate fuga, doloremque eaque, optio repellat velit accusantium, repellendus quos architecto molestias natus! Quo ipsum officia, doloremque provident consequatur quae fugit aut! Deserunt dolores est minus, officia fuga eaque.
                    Expedita provident error id, reiciendis facilis ut, quos fuga natus sit exercitationem placeat eum excepturi ipsa minus voluptates. Nam minima perspiciatis illum. Excepturi possimus totam esse veritatis, similique nihil illum!
                    Est alias, necessitatibus ex quod fugiat magni eligendi similique amet accusantium fugit eaque beatae! Delectus corrupti culpa quisquam itaque modi, omnis ea alias voluptates in quae quaerat illum sequi sunt.
                    Blanditiis esse eaque hic nam labore et, neque excepturi repellendus at similique officiis veniam est quam dolorem ratione quasi quisquam amet exercitationem. Est, libero. Reiciendis sed id itaque sunt illum?
                    Quam nam officia vitae aliquam nobis tempore, optio odit nisi et nulla reiciendis rem fugiat voluptas labore ducimus, minima vel! Ut animi blanditiis voluptatem rem quidem, at tenetur repudiandae dolores.
                    Error illum sed corrupti iusto voluptates quidem, iste accusantium, quo quasi tempora, in eum exercitationem asperiores amet quae dolorum illo provident repudiandae dolores soluta blanditiis sint commodi harum rerum. Beatae.
                    Optio exercitationem voluptate neque dolor aspernatur, illo doloremque qui possimus debitis labore atque nemo. Ad blanditiis cupiditate soluta ab nisi. Nesciunt magnam optio ipsam cum ipsum laboriosam dolore accusamus voluptatem.
                    Aliquam omnis, consequuntur voluptate in explicabo, harum magnam cum fuga ducimus, repellat sunt reiciendis. Vero provident blanditiis veritatis minus laboriosam suscipit laudantium accusantium, culpa amet beatae alias officia, molestias expedita.
                    Ipsum voluptates officia quibusdam pariatur illum impedit cupiditate eligendi tenetur quam, eum veritatis laudantium, consectetur corrupti ab aliquam fuga voluptas sunt dolorem obcaecati id quo. Aliquid ab veniam deleniti iure.
                    Magni repellendus impedit, temporibus aliquam quam omnis officia laborum illum tenetur praesentium. Architecto sed mollitia sequi temporibus omnis adipisci veniam iusto unde nulla, nostrum ad. Iusto non illo quis ipsum?
                    Ullam, incidunt magni et corrupti hic fugit laborum accusantium alias amet consequuntur doloremque, delectus cumque repellendus fugiat neque. Quo officiis quisquam alias. Sed ut blanditiis, exercitationem adipisci non nemo molestias.
                </p>
            </div>

        </div >
    )
}




export default page