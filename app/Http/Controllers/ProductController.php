<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $product = Product::all();
        return Inertia::render('Products/Index', ['products' => $product]);
    }

    public function show(Product $product)
    {
        return Inertia::render('Products/Show', [
            'product' => $product,
        ]);
    }


    public function create()
    {
        return Inertia::render('Products/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category' => 'required',
            'price' => 'required|numeric',
            'stock' => 'required|numeric',
        ]);

        Product::create($request->all());
        return redirect()->route('products.index');
    }

    public function edit(Product $product)
    {
        return Inertia::render('Products/Edit', ['product' => $product]);
    }

    public function update(Request $request, Product $product)
    {
        $product->update($request->all());
        return redirect()->route('products.index');
    }


    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route('products.index');
    }
}
