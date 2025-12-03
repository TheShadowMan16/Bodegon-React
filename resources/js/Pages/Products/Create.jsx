import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/Components/ui/button";

export default function Create() {
    const { data, setData, post } = useForm({
        name: "",
        description: "",
        price: "",
        category: "",
    });
    const CrearProducto = (e) => {
        e.preventDefault();
        post(route("products.store"), {
            data: data,
        });
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-100">
                    Crear Producto
                </h2>
            }
        >
            <Head title="Productos" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-black shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-xl font-semibold leading-tight text-gray-100 mb-4">
                                Formulario de creacion
                            </h1>
                            <form onSubmit={CrearProducto}>
                                <Input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="mt-1 block w-full mb-4 text-white"
                                    placeholder="Nombre del producto"
                                />
                                <Input
                                    id="description"
                                    type="text"
                                    name="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    className="mt-1 block w-full mb-4 text-white"
                                    placeholder="Descripcion del producto"
                                />
                                <Input
                                    id="price"
                                    type="number"
                                    name="price"
                                    value={data.price}
                                    onChange={(e) =>
                                        setData("price", e.target.value)
                                    }
                                    className="mt-1 block w-full mb-4 text-white"
                                    placeholder="Precio del producto"
                                />
                                <Input
                                    id="category"
                                    type="text"
                                    name="category"
                                    value={data.category}
                                    onChange={(e) =>
                                        setData("category", e.target.value)
                                    }
                                    className="mt-1 block w-full mb-4 text-white"
                                    placeholder="Categoria del producto"
                                />
                                <Button type="submit" variant="green">
                                    Crear Producto
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
