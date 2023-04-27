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
			string[] input = Console.ReadLine().Split('.');
			bool flag = true;
			
			for (int i = 0; i < input.Length; i++)
			{
				int length = input[i].Length;

				if (length == 0)
				{
					continue;
				}

				if (length % 4 == 0)
				{
					input[i] = input[i].Replace('X', 'A');
				}
				else if ((length % 4) % 2 == 0)
				{
					input[i] = new string('A', (length / 4) * 4) + new string('B', length % 4);
				}
				else if (length % 2 == 0)
				{
					input[i] = input[i].Replace('X', 'B');
				}
				else
				{
					flag = false;
					break;
				}
			}

			if (flag)
			{
				Console.WriteLine(string.Join(".", input));
			}
			else
			{
				Console.WriteLine(-1);
			}
		}
	}
}
