import { Button } from "../common/Button";

interface CardProps {
  src: string;
  name: string;
  isbn: string;
  url: string;
  textAction?: string;
  stok: number;
}

export function Card({ src, name, isbn, url, textAction = "Selengkapnya", stok }: Readonly<CardProps>) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white">
      <img
        src={src}
        alt={name}
        className="aspect-3/4 w-full bg-gray-200 group-hover:opacity-75 object-cover"
      />
      <div className="flex flex-1 flex-col items-start gap-y-2 p-4">
        <h3 className="text-sm line-clamp-1 font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">ISBN {isbn}</p>

        <Button variant="link" href={url} className="text-indigo-500">
          {textAction} <span aria-hidden="true">→</span>
        </Button>

        <p className="text-xs text-gray-500">Ketersediaan: {stok}</p>
      </div>
    </div>
  );
}
