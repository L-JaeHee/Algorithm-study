using System;
using System.Collections.Generic;
using System.Collections;

namespace test
{
	internal class Program
	{
		private static void Main(string[] args)
		{
			Heap maxHeap = new Heap(true);
			Heap minHeap = new Heap(false);

			int n = int.Parse(Console.ReadLine());

			for (int i = 0; i < n; i++)
			{
				int[] input = Array.ConvertAll(Console.ReadLine().Split(), item => int.Parse(item));
				Heap.addedProd.Add(input[0], input[1]);
				maxHeap.Insert(input[0], input[1]);
				minHeap.Insert(input[0], input[1]);
			}

			int m = int.Parse(Console.ReadLine());

			for (int i = 0; i < m; i++)
			{
				string[] input = Console.ReadLine().Split();

				switch (input[0])
				{
					case "add":
						int num = int.Parse(input[1]);
						int level = int.Parse(input[2]);

						if (Heap.addedProd.ContainsKey(num))
						{
							Heap.addedProd[num] = level;
						}
						else
						{

						Heap.addedProd.Add(num, level);
						}
						maxHeap.Insert(num, level);
						minHeap.Insert(num, level);
						break;

					case "recommend":
						if (input[1] == "1")
						{
							Node top = maxHeap.Top();

							while (Heap.addedProd.ContainsKey(top.num))
							{
								if (Heap.addedProd[top.num] != top.level)
								{
									maxHeap.Pop();
									top = maxHeap.Top();
								}

								else break;
							}

							Console.WriteLine(maxHeap.Top().num);
						}
						else if (input[1] == "-1")
						{
							Node top = minHeap.Top();

							while (Heap.addedProd.ContainsKey(top.num))
							{
								if (Heap.addedProd[top.num] != top.level)
								{
									minHeap.Pop();
									top = minHeap.Top();
								}

								else break;
							}

							Console.WriteLine(minHeap.Top().num);
						}
						break;

					case "solved":
						int number = int.Parse(input[1]);

						if (Heap.addedProd.ContainsKey(number))
						{
							Heap.addedProd[number] = -1;
						}
						else
						{
							Heap.addedProd.Add(number, -1);
						}

						break;
				}
			}
		}
	}

	internal class Node
	{
		public int num;
		public int level;

		public Node(int num, int level)
		{
			this.num = num;
			this.level = level;
		}
	}

	internal class Heap
	{
		private bool maxType;
		public List<Node> items;
		public Node safeNode;
		public static Dictionary<int, int> addedProd;

		public Heap(bool maxType)
		{
			this.maxType = maxType;
			addedProd = new Dictionary<int, int>();

			if (maxType)
			{
				this.safeNode = new Node(int.MinValue, int.MinValue);
			}
			else
			{
				this.safeNode = new Node(int.MaxValue, int.MaxValue);
			}

			this.items = new List<Node>() { safeNode };
		}

		public bool Compare(int index1, int index2)
		{
			Node left = index1 < this.items.Count ? items[index1] : this.safeNode;
			Node right = index2 < this.items.Count ? items[index2] : this.safeNode;

			if (maxType)
			{
				if (left.level > right.level || left.level == right.level && left.num > right.num)
				{
					return true;
				}
				else
				{
					return false;
				}
			}
			else
			{
				if (left.level < right.level || left.level == right.level && left.num < right.num)
				{
					return true;
				}
				else
				{
					return false;
				}
			}
		}

		public void Swap(int index1, int index2)
		{
			(this.items[index1], this.items[index2]) = (this.items[index2], this.items[index1]);
		}

		public void Insert(int num, int level)
		{
			this.items.Add(new Node(num, level));
			int current = this.items.Count - 1;

			while (current > 1)
			{
				int parent = current / 2;

				if (this.Compare(current, parent))
				{
					this.Swap(current, parent);
					current = parent;
				}
				else
				{
					break;
				}
			}
		}

		public void Pop()
		{
			int size = this.items.Count - 1;

			if (size == 1)
			{
				this.items.RemoveAt(1);
			}
			else if (size > 1)
			{
				this.Swap(1, size);
				this.items.RemoveAt(size);

				int current = 1;

				while (current <= size / 2)
				{
					int leftIndex = current * 2;
					int rightIndex = current * 2 + 1;
					int targetIndex;

					targetIndex = Compare(leftIndex, rightIndex) ? leftIndex : rightIndex;

					if (Compare(targetIndex, current))
					{
						this.Swap(current, targetIndex);
						current = targetIndex;
					}
					else
					{
						break;
					}
				}
			}
		}

		public Node Top()
		{
			return this.items[1];
		}
	}
}
