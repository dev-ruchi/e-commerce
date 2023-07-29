import { useParams } from "react-router-dom";

const ProductView = () => {
    let { slug } = useParams();


    return (
        <div className="mt-20 grid grid-cols-10 gap-8">
            <div className="col-span-4">
                <img className="w-full" src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s22-ultra-5g.jpg" />
            </div>
            <div className="col-span-6">
                <h2 className="text-2xl font-bold mb-5">Samsung S22 Ultra</h2>
                <p className="font-bold mb-5">$1200</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut iusto beatae blanditiis rem tempora eligendi dolore vel sapiente repellat dolorem quae aperiam voluptates deserunt quod molestias possimus hic earum, nam consequatur sit facere a soluta veritatis commodi. Amet ullam, officiis reiciendis repudiandae commodi quos eum harum non, at blanditiis voluptas eaque laboriosam atque quas? Possimus earum neque incidunt beatae quidem voluptatibus voluptatem vel culpa? At quos pariatur facilis debitis nesciunt impedit sint! Quaerat quas itaque porro veniam magnam voluptates, nobis dolorum quasi eveniet ipsum expedita quidem repellat laboriosam ut voluptas debitis unde. Libero minima consequuntur eveniet repudiandae dolor odit perferendis vel fugiat rem corporis quasi aspernatur laborum doloremque ad, omnis perspiciatis quisquam amet soluta iste facilis dignissimos consequatur blanditiis. Repellat obcaecati repudiandae facilis reprehenderit cupiditate facere aut aspernatur laudantium alias quis fugiat quibusdam placeat incidunt ullam expedita vel corporis, necessitatibus repellendus neque nam quasi id molestiae? Dolorum perspiciatis ducimus eveniet, quae ratione temporibus ut, expedita veniam necessitatibus consequuntur earum rem eius quas ipsum possimus nemo quasi nulla, dolor cumque! Inventore enim soluta incidunt qui dolor officiis optio, quidem ratione, commodi reiciendis officia possimus in quibusdam illo neque vel nam tenetur iure voluptas, quia dignissimos vero quod voluptatum. Veritatis, impedit perspiciatis?
                </p>
            </div>
        </div>
    )
}

export default ProductView;