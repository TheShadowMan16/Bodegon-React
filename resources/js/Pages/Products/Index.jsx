import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescriptionNum,
    CardContent,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";

export default function Index({ products }) {
    const { delete: destroy } = useForm();

    const EliminarProducto = (id) => {
        destroy(route("products.destroy", id));
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-100">
                    Productos
                </h2>
            }
        >
            <Head title="Productos" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex gap-2 mb-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Total de Productos</CardTitle>
                                <CardContent>
                                    <CardDescriptionNum>
                                        {products.length}
                                    </CardDescriptionNum>
                                </CardContent>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Total de Categorias</CardTitle>
                                <CardContent>
                                    <CardDescriptionNum>
                                        {
                                            products
                                                .map(
                                                    (product) =>
                                                        product.category
                                                )
                                                .filter(
                                                    (value, index, self) =>
                                                        self.indexOf(value) ===
                                                        index
                                                ).length
                                        }
                                    </CardDescriptionNum>
                                </CardContent>
                            </CardHeader>
                        </Card>
                    </div>
                    <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        <Card className="p-6 text-gray-900">
                            <div className="flex">
                                <div className="justify-start">
                                    <h1 className="text-gray-200">Productos</h1>
                                </div>
                                <div className="mb-4  ml-auto">
                                    <Button variant="green">
                                        <Link href={route("products.create")}>
                                            Agregar Producto
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <Table>
                                <TableCaption>
                                    Lista de productos disponibles.
                                </TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">
                                            Id
                                        </TableHead>
                                        <TableHead>Nombre</TableHead>
                                        <TableHead>Descripcion</TableHead>
                                        <TableHead>Precio</TableHead>
                                        <TableHead>Categoria</TableHead>
                                        <TableHead className="text-center ">
                                            Opciones
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {products.map((product) => (
                                        <TableRow>
                                            <TableCell className="font-medium">
                                                {product.id}
                                            </TableCell>
                                            <TableCell>
                                                {product.name}
                                            </TableCell>
                                            <TableCell>
                                                {product.description}
                                            </TableCell>
                                            <TableCell>
                                                {product.price}
                                            </TableCell>
                                            <TableCell>
                                                {product.category}
                                            </TableCell>
                                            <TableCell className="text-right flex gap-2">
                                                <Button variant="ghost">
                                                    <Link
                                                        href={route(
                                                            "products.edit",
                                                            product.id
                                                        )}
                                                    >
                                                        Editar
                                                    </Link>
                                                </Button>
                                                <Button
                                                    onClick={() =>
                                                        EliminarProducto(
                                                            product.id
                                                        )
                                                    }
                                                    variant="destructive"
                                                    type="submit"
                                                >
                                                    Eliminar
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Card>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
