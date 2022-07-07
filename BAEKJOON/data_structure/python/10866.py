""" 
22.07.07
BOJ : 10866 / 자료구조
"""

from collections import deque
import sys

que = deque()
n = int(input())

for _ in range(n):
    cmds = sys.stdin.readline().strip().split(' ')
    c = cmds[0]

    if c == 'push_front':
        que.appendleft(cmds[1])
    elif c == 'push_back':
        que.append(cmds[1])
    elif c == 'pop_front':
        if len(que) == 0:
            print(-1)
        else:
            print(que.popleft())
    elif c == 'pop_back':
        if len(que) == 0:
            print(-1)
        else:
            print(que.pop())
    elif c == 'size':
        print(len(que))
    elif c == 'empty':
        if len(que) == 0:
            print(1)
        else:
            print(0)
    elif c == 'front':
        if len(que) == 0:
            print(-1)
        else:
            print(que[0])
    elif c == 'back':
        if len(que) == 0:
            print(-1)
        else:
            print(que[-1])
