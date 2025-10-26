export function CatalogSection() {
  return (
    <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
      <div className="lg:min-w-0 lg:flex-1">
        <h3 className="text-base/7 font-semibold text-indigo-600">
          Discounted
        </h3>
        <p className="mt-1 text-base/7 text-gray-600">
          Dolor dolores repudiandae doloribus. Rerum sunt aut eum. Odit omnis
          non voluptatem sunt eos nostrum.
        </p>
      </div>
      <a
        href="#"
        className="rounded-md px-3.5 py-2 text-sm/6 font-semibold text-indigo-600 inset-ring inset-ring-indigo-200 hover:inset-ring-indigo-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Buy discounted license <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );
}
