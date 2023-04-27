namespace test
{
	class Program
	{
		static void Main(string[] args)
		{
			int input = int.Parse(Console.ReadLine());
			int result = -1;

			for (int i = input / 5; i >= 0; i--)
			{
				int temp = input - 5 * i;

				if (temp % 2 == 0)
				{
					result = i + (temp / 2);
					break;
				}
			}

			Console.WriteLine(result);
		}
	}
}
