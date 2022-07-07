""" 
22.07.07
BOJ : 1406 / 자료구조
"""
import sys

left = list(sys.stdin.readline().strip())
right = []
n = int(input())

for _ in range(n):
    cmds = sys.stdin.readline().strip().split(' ')
    c = cmds[0]

    if c == 'P':
        left.append(cmds[1])
    elif c == 'L' and left != []:
        right.append(left.pop())
    elif c == 'D' and right != []:
        left.append(right.pop())
    elif c == 'B' and left != []:
        left.pop()

print(''.join(left + right[::-1]))

"""
스택을 사용하지 않고 insert, pop(index)를 사용 시 시간복잡도가 크게 증가
"""
