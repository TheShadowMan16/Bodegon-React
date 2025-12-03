import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";

export default function AuthenticatedLayout({ header, children }) {
    return (
        <div className="min-h-screen bg-gray-800">
            <nav className="border-b border-gray-100 bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                <NavLink
                                    href={route("dashboard")}
                                    active={route().current("dashboard")}
                                >
                                    Inicio
                                </NavLink>
                                <NavLink
                                    href={route("products.index")}
                                    active={route().current("products.index")}
                                >
                                    Productos
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md gap-3">
                                            <Button
                                                onClick={() =>
                                                    router.post(route("logout"))
                                                }
                                                variant="destructive"
                                            >
                                                Cerrar Sesión
                                            </Button>
                                        </span>
                                    </Dropdown.Trigger>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-gray-700">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
