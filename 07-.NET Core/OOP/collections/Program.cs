// See https://aka.ms/new-console-template for more information


//Array => fixed size
//  Collection
// non-generic
// ArrayList, SortedList
// int,string,Product

// ArrayList myList = new ArrayList();


using System.Collections;

ArrayList myList = new ArrayList();   

myList.Add(10);
myList.Add("10");
myList.Add("Abc");
myList.Add(10.5);


ArrayList myList2 = new ArrayList(){10,"10","Abc",10.5};

myList2.Insert(0,"0");

myList.AddRange(myList2);

foreach(var item in myList2){
    Console.WriteLine(item);    
}

 Console.WriteLine("************************");

 foreach(var item in myList){
    Console.WriteLine(item);    
}