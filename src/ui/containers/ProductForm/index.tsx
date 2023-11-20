import { PhotoIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ProductDSO } from 'src/data/dso/product.ds'
import { addProductSchema } from 'src/data/schemas/formValidations/addProductSchema'
import { ProductFormType } from './productForm'


const ProductForm = ({ product, handleProduct }: ProductFormType) => {

    const navigate = useNavigate()
    const { handleSubmit, reset, register, formState: { errors } } = useForm<ProductDSO>({
        resolver: zodResolver(addProductSchema),
        defaultValues: {
            price: product.price || 0,
            description: product.description || '',
            category: product.category || '',
            isNew: product.isNew || false
        }
    })



    // const handleInnerChange = (e) => {
    //     setInnerValue(
    //         {
    //             ...innerValue,
    //             [e.target.id]: e.target.id === 'isNew'
    //                 ? e.target.checked
    //                 : e.target.value
    //         })
    // }


    const submitHandler = (data: ProductDSO) => {
        handleProduct(data)
        reset({ description: "", price: 0, category: "" })
        navigate('/products')
    }

    return (
        <div className="flex justify-center mb-3">
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-5 grid grid-cols-1 gap-x-6 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                    Description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="description"
                                        rows={3}
                                        {...register('description')}
                                        // onChange={handleInnerChange}
                                        // value={innerValue.description}
                                        className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <div className='text-error text-xs'>{errors.description && errors.description.message}</div>
                                </div>
                            </div>

                            <div className="col-span-full mt-2">
                                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Cover photo
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 py-5">
                                    <div className="text-center">
                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                                    Price
                                </label>
                                <div className="mt-2">
                                    <input
                                        min={0}
                                        type="number"
                                        id="price"
                                        {...register('price', { valueAsNumber: true })}
                                        // value={innerValue.price}
                                        // onChange={handleInnerChange}
                                        autoComplete="family-name"
                                        className="block p-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    <div className='text-error text-xs'>{errors.price && errors.price.message}</div>

                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">
                                    Category
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="category"
                                        {...register('category')}
                                        // onChange={handleInnerChange}
                                        // autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option value="" hidden>Categories</option>
                                        <option>Shoes</option>
                                        <option>T-shirts</option>
                                        <option>Suits</option>
                                        <option>Bags</option>
                                        <option>Trousers</option>
                                    </select>
                                    <div className='text-error text-xs'>{errors.category && errors.category.message}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 space-y-10">
                        <fieldset>
                            <div className="space-y-6">
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="isNew"
                                            {...register('isNew')}
                                            type="checkbox"
                                            // onChange={handleInnerChange}
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label htmlFor="isNew" className="font-medium text-gray-900">
                                            this is a new product ?
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </fieldset>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => navigate('/products')}>
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>

            </form>
        </div>
    )
}

export default ProductForm