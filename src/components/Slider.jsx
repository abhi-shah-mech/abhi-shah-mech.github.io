import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function Slider({ images }) {
  return (
    <Splide
      options={{
        autoplay: true,
      }}
    >
      {images.map((image, index) => {
        return (
          <SplideSlide key={index}>
            <div className="relative block rounded-box h-96 lg:h-[80vh]">
              <img
                alt={image.description}
                class="object-cover h-full w-full rounded-box"
                src={image.src}
              />
              <p className="absolute rounded-t-box top-0 right-0 left-0 text-zinc-800 p-4 bg-base-100/50 z-20">
                {image.description}
              </p>
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
}
