""" 
22.07.07
BOJ : 1158 / 자료구조
"""

from collections import deque

n, k = map(int, input().split(' '))
que = deque([i for i in range(1, n + 1)])
result = []

while len(que) > 0:
    que.rotate(-k)
    result.append(que.pop())

result = ', '.join(map(str, result))
print(f'<{result}>')
