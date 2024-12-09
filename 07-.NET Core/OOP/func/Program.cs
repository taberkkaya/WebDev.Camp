var p1 = new Person{Name = "Name", Year = 2022};
var p2 = new Person{Name = "Name2", Year = 1999};
var p3 = new Person{Name = "Name3", Year = 2001};

p1.Intro();
p2.Intro();
p3.Intro();

class Person {
    public string Name { get; set; }
    public int Year { get; set; }

    public void Intro(){
        Console.WriteLine($"Name: {this.Name}, Age: {2024-this.Year}");
    }
}
