import { Button } from "./common/Button";

export function LoginForm() {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center">
        <div className="text-center sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://placehold.net/600x600.png"
            className="mx-auto h-20 w-auto object-cover"
          />
          <h2 className="mt-10 text-2xl/9 font-bold tracking-tight text-gray-900">
            Masuk Sebagai Pengelola
          </h2>
          <p className="text-sm text-gray-600">Mohon isi form di bawah ini.</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" noValidate>
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                  spellCheck={false}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  spellCheck={false}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex h-6 shrink-0 items-center">
                <div className="group grid size-4 grid-cols-1">
                  <input
                    id="comments"
                    name="comments"
                    type="checkbox"
                    aria-describedby="comments-description"
                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 dark:border-white/10 dark:bg-white/5 dark:checked:border-indigo-500 dark:checked:bg-indigo-500 dark:indeterminate:border-indigo-500 dark:indeterminate:bg-indigo-500 dark:focus-visible:outline-indigo-500 dark:disabled:border-white/5 dark:disabled:bg-white/10 dark:disabled:checked:bg-white/10 forced-colors:appearance-auto"
                  />
                  <svg
                    fill="none"
                    viewBox="0 0 14 14"
                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25 dark:group-has-disabled:stroke-white/25"
                  >
                    <path
                      d="M3 8L6 11L11 3.5"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-0 group-has-checked:opacity-100"
                    />
                    <path
                      d="M3 7H11"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-0 group-has-indeterminate:opacity-100"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="comments"
                className="text-sm text-gray-900 dark:text-white"
              >
                Remember Me
              </label>
            </div>

            <Button
              href="/dashboard"
              className="w-full py-2 rounded-full bg-indigo-600 text-white disabled:opacity-60"
            >
              Sign In
            </Button>

            <div className="flex items-center">
              <div
                aria-hidden="true"
                className="w-full border-t border-white/15"
              />
              <div className="relative flex justify-center">
                <span className="bg-gray-900 px-2 text-sm text-gray-400" />
              </div>
              <div
                aria-hidden="true"
                className="w-full border-t border-white/15"
              />
            </div>

            <Button variant="secondary" href="/bantuan" className="w-full py-2 rounded-full">
              Bantuan
            </Button>

            <Button variant="outline" href="/dashboard" className="w-full py-2 rounded-full">
              Buku Panduan
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
