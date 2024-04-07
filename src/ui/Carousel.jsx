import { motion } from "framer-motion";

const Carousel = () => {
 return (
  <div className="bg-neutral-800 ">
   <div className="px-4 pt-4">
    <p className="text-neutral-400 pb-2 font-semibold border-b ">Gallery</p>
   </div>
   <div className="flex flex-col sm:h-48 items-center justify-center">
    <span className="pt-4 text-4xl font-semibold uppercase text-neutral-500">
     Our works
    </span>

    <q className="font-semibold uppercase text-neutral-500 p-4">
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi excepturi dicta natus, sequi rerum vero ipsa quos dolore quae porro. Totam ut facere tempora eius debitis maiores, dignissimos placeat reprehenderit ipsum commodi cumque nesciunt!
    </q>

   </div>
   <HorizontalScrollCarousel />
   <div className="flex h-48 items-center justify-center">
    <span className="font-semibold uppercase text-neutral-500">
     Special Furnitures | Local Furnitures
    </span>
   </div>
  </div>
 );
};

const HorizontalScrollCarousel = () => {


 return (
  <section className="relative  bg-neutral-900">
   <div className="sticky top-0 flex items-center overflow-auto">
    <motion.div className="flex gap-4 p-4
    ">
     {cards.map((card) => {
      return <Card card={card} key={card.id} />;
     })}
    </motion.div>
   </div>
  </section>
 );
};

const Card = ({ card }) => {
 return (
  <div
   key={card.id}
   className="group relative h-80 w-80 sm:h-[450px] sm:w-[450px] overflow-hidden bg-neutral-200"
  >
   <div
    style={{
     backgroundImage: `url(${card.url})`,
     backgroundSize: "cover",
     backgroundPosition: "center",
    }}
    className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
   ></div>
   <div className="absolute inset-0 z-10 grid place-content-center">
    <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
     {card.title}
    </p>
   </div>
  </div>
 );
};

export default Carousel;

const cards = [
 {
  url: "/cream.jpg",
  title: "Title 1",
  id: 1,
 },
 {
  url: "/fur.jpg",
  title: "Title 2",
  id: 2,
 },
 {
  url: "/green.jpg",
  title: "Title 3",
  id: 3,
 },
 {
  url: "/cute.jpg",
  title: "Title 4",
  id: 4,
 },
 {
  url: "/gray.jpg",
  title: "Title 5",
  id: 5,
 },
 {
  url: "/mix.jpg",
  title: "Title 6",
  id: 6,
 },
 {
  url: "/whiteChair.jpg",
  title: "Title 7",
  id: 7,
 },
];