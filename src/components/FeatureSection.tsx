import { Svg } from "./common/Svg";
import { Button } from "./common/Button";

const features = [
  {
    name: "Informasi Perpustakaan",
    description:
      "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
    href: "informasi-perpustakaan",
    icon: "m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
  },
  {
    name: "Survey Kepuasan Pengguna",
    description:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScFKl5qmWlDuI-8ldNklPhCisByQoEagrPFyc6WFcZXRziTIw/viewform?usp=header",
    icon: "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
  },
  {
    name: "Pertanyaan Umum",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    href: "pertanyaan-umum",
    icon: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z",
  },
];

export function FeatureSection() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col bg-gradient-to-br from-indigo-500 to-indigo-600 p-8 rounded-3xl">
              <dt className="text-lg/7 font-semibold text-gray-100">
                <div className="mb-6 flex text-lg size-16 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
                  <Svg
                    variant="outline"
                    draw={[feature.icon]}
                    width={32}
                    height={32}
                    className="text-white"
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-300 dark:text-gray-400">
                <p className="flex-auto">{feature.description}</p>
                <p className="mt-6">
                  <Button variant="link" href={feature.href} className="text-gray-200">
                    Selengkapnya <span aria-hidden="true">→</span>
                  </Button>
                </p>
              </dd>
            </div>
          ))}
        </dl>
    </div>
  );
}
