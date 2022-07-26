""" 
22.07.26
BOJ : 2839 / 수학, 그리디, 다이나믹 프로그래밍
"""
n = int(input())

five = n // 5

for i in range(five, -1, -1):
    three, remaining = divmod((n - (i * 5)), 3)

    if remaining == 0:
        print(three + i)
        break
else:
    print(-1)
