""" 
22.07.07
BOJ : 10845 / 자료구조
"""
import sys

my_stack = []

n = int(input())
for _ in range(n):
    cmds = sys.stdin.readline().strip().split(' ')
    c = cmds[0]

    if c == 'push':
        my_stack.append(cmds[1])
    elif c == 'pop':
        if my_stack == []:
            print(-1)
        else:
            print(my_stack[0])
            my_stack = my_stack[1:]
    elif c == 'size':
        print(len(my_stack))
    elif c == 'empty':
        if my_stack == []:
            print(1)
        else:
            print(0)
    elif c == 'front':
        if my_stack == []:
            print(-1)
        else:
            print(my_stack[0])
    elif c == 'back':
        if my_stack == []:
            print(-1)
        else:
            print(my_stack[-1])
