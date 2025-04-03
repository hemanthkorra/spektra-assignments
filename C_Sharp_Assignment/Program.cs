using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            cnt.CountClass count = new cnt.CountClass();
            time.TimeZone time = new time.TimeZone();
            average.AverageVal avg = new average.AverageVal();
            simpleintrest.simpleintrest si = new simpleintrest.simpleintrest();
            bignum.bignum bn = new bignum.bignum();

            while (true)
            {
                Console.WriteLine("\nChoose an option:");
                Console.WriteLine("1. Count Words in a String");
                Console.WriteLine("2. Get Time Zone Info");
                Console.WriteLine("3. Calculate Average of 3 Numbers");
                Console.WriteLine("4. Calculate Simple Interest");
                Console.WriteLine("5. Find the Biggest Number");
                Console.WriteLine("6. Exit");
                Console.Write("Enter your choice: ");

                double choice = double.Parse(Console.ReadLine());

                switch (choice)
                {
                    case 1:
                        Console.Write("Enter a string: ");
                        string input = Console.ReadLine();
                        double wordCount = count.Count(input);
                        Console.WriteLine($"Word Count: {wordCount}");
                        break;

                    case 2:
                        time.getTime();
                        break;

                    case 3:
                        Console.Write("Enter first number: ");
                        double num1 = double.Parse(Console.ReadLine());
                        Console.Write("Enter second number: ");
                        double num2 = double.Parse(Console.ReadLine());
                        Console.Write("Enter third number: ");
                        double num3 = double.Parse(Console.ReadLine());
                        double avg1 = avg.getaverage(num1, num2, num3);
                        Console.WriteLine("Average: " + avg1);
                        break;

                    case 4:
                        Console.Write("Enter principal amount: ");
                        double principal = double.Parse(Console.ReadLine());
                        Console.Write("Enter time in years: ");
                        double time1 = double.Parse(Console.ReadLine());
                        Console.Write("Enter rate of interest: ");
                        double rate = double.Parse(Console.ReadLine());
                        Console.WriteLine("Simple Interest: " + si.getSi(principal, time1, rate));
                        break;

                    case 5:
                        Console.Write("Enter first number: ");
                        double x = double.Parse(Console.ReadLine());
                        Console.Write("Enter second number: ");
                        double y = double.Parse(Console.ReadLine());
                        Console.Write("Enter third number: ");
                        double z = double.Parse(Console.ReadLine());
                        Console.WriteLine("Biggest Number: " + bn.getbignum(x, y, z));
                        break;

                    case 6:
                        Console.WriteLine("Exiting program...");
                        return;

                    default:
                        Console.WriteLine("Invalid choice! Please enter a valid option.");
                        break;
                }
            }
        }
    }
}

//Count Words in a String
namespace cnt
{
    class CountClass
    {
        public double Count(string str1)
        {
            string[] words = str1.Split(' ');
            double cnt = 0;

            foreach (string word in words)
            {
                if (!word.Equals(""))
                {
                    cnt++;
                }
            }
            return cnt;
        }
    }
}

//Get Time Zone Info
namespace time
{
    class TimeZone
    {
        public void getTime()
        {
            TimeZoneInfo localZone = TimeZoneInfo.Local;
            Console.WriteLine("Local Time Zone: " + localZone.DisplayName);
            Console.WriteLine("Time Zone ID: " + localZone.Id);
            // DisplayName returns a human-readable name for the time zone
            // ID It is unique for each time zone and is used internally by the OS and .NET.
            Console.WriteLine("Date and Time: " + DateTime.Now);
        }
    }
}

//Calculate Average of 3 Numbers
namespace average
{
    class AverageVal
    {
        public double getaverage(double x, double y, double z)
        {
            return (x + y + z) / 3.0;
        }
    }
}

// Calculate Simple Interest
namespace simpleintrest
{
    class simpleintrest
    {
        public double getSi(double p, double t, double r)
        {
            return (p * t * r) / 100.0;
        }
    }
}

//Find the Biggest Number 
namespace bignum
{
    class bignum
    {
        public double getbignum(double x, double y, double z)
        {
            if (x > y && x > z)
            {
                return x;
            }
            else if (y > z)
            {
                return y;
            }
            return z;
        }
    }
}

