""" 
22.07.05
BOJ : 9012 / 자료구조
"""
import sys

n = int(input())
for _ in range(n):
    string = list(sys.stdin.readline().strip())
    init_stack = []

    for i in string:
        if i == '(':
            init_stack.append(i)
        else:
            if not init_stack:
                init_stack.append(i)
            else:
                if init_stack[-1] == '(':
                    init_stack.pop()
                else:
                    init_stack.append(i)
    
    if not init_stack:
        print('YES')
    else:
        print('NO')
