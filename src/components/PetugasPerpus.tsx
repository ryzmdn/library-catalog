const people = [
  {
    name: 'Leslie Alexander',
    role: 'Kepala Perpustakaan',
    imageUrl: 'https://placehold.net/600x600.png'
  },
  {
    name: 'Michael Foster',
    role: 'Petugas Peminjaman',
    imageUrl: 'https://placehold.net/600x600.png'
  },
  {
    name: 'Dries Vincent',
    role: 'Petugas Pengembalian',
    imageUrl: 'https://placehold.net/600x600.png'
  },
]

export default function PetugasPerpus() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="w-full text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Petugas Perpustakaan</h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {people.map((person) => (
            <li key={person.name}>
              <img
                alt=""
                src={person.imageUrl}
                className="aspect-14/13 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
              />
              <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base/7 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
