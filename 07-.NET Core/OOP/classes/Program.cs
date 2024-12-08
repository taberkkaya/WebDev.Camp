using System;

int[] ogrNo = {100,200,300};
string[] ad = {"Ataberk","Ata","Kaya"};
string[] sube = {"A","B","C"};

Console.WriteLine($"no: {ogrNo[0]}  ad: {ad[0]}");
Console.WriteLine($"no: {ogrNo[1]}  ad: {ad[1]}");
Console.WriteLine($"no: {ogrNo[2]}  ad: {ad[2]}");

Ogrenci ogr1 = new Ogrenci();
ogr1.ad = "Ata";
ogr1.sube = "10a";
ogr1.ogrNo = 1000;   

Ogrenci ogr2 = new Ogrenci();
ogr2.ad = "Ata";
ogr2.sube = "10a";
ogr2.ogrNo = 1000;   

Ogrenci ogr3 = new Ogrenci();
ogr3.ad = "Ata";
ogr3.sube = "10a";
ogr3.ogrNo = 1000;   

Ogrenci ogr4 = new Ogrenci();
ogr4.ad = "Ata";
ogr4.sube = "10a";
ogr4.ogrNo = 1000;   

Console.WriteLine($"{ogr1.ad} {ogr1.sube}");


Ogrenci[] ogrenciler = new Ogrenci[3];
ogrenciler[0] = ogr1;
ogrenciler[1] = ogr2;
ogrenciler[2] = ogr4;

for(int i = 0; i < ogrenciler.Length; i++){
    Console.WriteLine($"{ogrenciler[i].ad} {ogrenciler[i].sube}");
}


class Ogrenci {
    public string? ad { get; set; }
    public int ogrNo { get; set; }
    public string? sube { get; set; }
    
}