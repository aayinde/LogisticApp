<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Supplier;
use App\Models\Warehouse;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Create two suppliers
        $supplier1 = Supplier::create(['name' => 'Supplier 1', 'address' => '123 Main St.']);
        $supplier2 = Supplier::create(['name' => 'Supplier 2', 'address' => '456 Market St.']);

        // Create two warehouses, one for each supplier
        $warehouse1 = Warehouse::create(['supplier_id' => $supplier1->id, 'address' => '789 Broadway']);
        $warehouse2 = Warehouse::create(['supplier_id' => $supplier2->id, 'address' => '1011 Elm St.']);

        // Create some sample products for each warehouse
        $product1 = Product::create(['name' => 'Product 1', 'price' => 10.99, 'supplier_id' => $supplier1->id, 'warehouse_id' => $warehouse1->id]);
        $product2 = Product::create(['name' => 'Product 2', 'price' => 19.99, 'supplier_id' => $supplier1->id, 'warehouse_id' => $warehouse1->id]);
        $product3 = Product::create(['name' => 'Product 3', 'price' => 25.99, 'supplier_id' => $supplier2->id, 'warehouse_id' => $warehouse2->id]);
    }
}
