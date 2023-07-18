"use client";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header>
        <Disclosure as="header" className="bg-[var(--verde-escuro)] font-sans">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className=" flex flex-1 items-center justify-center font-bold sm:items-stretch sm:justify-start">
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        <Link
                          href="/"
                          className="text-white hover:text-[#000000]"
                        >
                          Home
                        </Link>
                        <Link
                          href="/imc"
                          className="text-white hover:text-[#000000]"
                        >
                          IMC
                        </Link>
                        <Link
                          href="/tempo-de-vida"
                          className="text-white hover:text-[#000000]"
                        >
                          Tempo de Vida
                        </Link>
                        <Link
                          href="/cores-da-saude"
                          className="text-white hover:text-[#000000]"
                        >
                          Cores da Saude
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full text-sm  ">
                          <span className="sr-only">Open user menu</span>
                          <Image
                            src={"/images/life-bar-svgrepo-com-dois.svg"}
                            alt="link para a home com imagem"
                            width={64}
                            height={64}
                            className="h-12 w-12 rounded-full"
                          />
                        </Menu.Button>
                      </div>
                    </Menu>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-6 pb-3 pt-2 font-bold">
                  <Link
                    href="/"
                    className="text-white hover:text-[#000000] p-2"
                  >
                    Home
                  </Link>
                  <Link
                    href="/imc"
                    className="text-white hover:text-[#000000] p-2"
                  >
                    IMC
                  </Link>
                  <Link
                    href="/tempo-de-vida"
                    className="text-white hover:text-[#000000] p-2"
                  >
                    Tempo de Vida
                  </Link>
                  <Link
                    href="/cores-da-saude"
                    className="text-white hover:text-[#000000] p-2"
                  >
                    Cores da Saude
                  </Link>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </header>
    </>
  );
};

export default Header;
