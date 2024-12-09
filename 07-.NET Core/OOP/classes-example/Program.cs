Console.WriteLine("Count: ");
int count = int.Parse(Console.ReadLine());

Product[] products = new Product[count];

int i = 0;

Product prd;

do{
    prd = new Product();

    Console.WriteLine("Product Name: ");
    prd.Name = Console.ReadLine();

    Console.WriteLine("Product Price: ");
    prd.Price = double.Parse(Console.ReadLine());

    Console.WriteLine("Product Description: ");
    prd.Description = Console.ReadLine();

    products[i] = prd;

    i++;

} while(count>i);


Console.WriteLine("************************************");

// for (int a = 0; a < products.Length-1; a++)
// {

//     Console.WriteLine($"Product Name: {products[a].Name}, Product Price: {products[a].Price}, Product Desription: {products[a].Description}");
// }


foreach(Product p in products){
     Console.WriteLine($"Product Name: {p.Name}, Product Price: {p.Price}, Product Desription: {p.Description}");
}

public class Product {
    public string Name { get; set; }
    public double Price { get; set; }
    public string Description { get; set; }
}