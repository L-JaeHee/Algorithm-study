using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace test
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.ReadLine();
			HashSet<int> A = new HashSet<int>(Array.ConvertAll(Console.ReadLine().Split(), item => int.Parse(item)));
			HashSet<int> B = new HashSet<int>(Array.ConvertAll(Console.ReadLine().Split(), item => int.Parse(item)));
			int[] temp = new int[A.Count] ;
			A.CopyTo(temp);

			A.ExceptWith(B);
			B.ExceptWith(temp);

			Console.WriteLine(A.Count + B.Count);
		}

	}

}
