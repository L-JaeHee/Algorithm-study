""" 
22.07.06
BOJ : 1874 / 자료구조
"""
import sys

n = int(input())
stack = []
current_num = 1
result = []

for _ in range(n):
    num = int(sys.stdin.readline())

    #숫자가 같을 때 까지 push
    while current_num <= num:
        stack.append(current_num)
        current_num += 1
        result.append('+')
    
    # stack의 top이 num과 같으면 pop
    if stack[-1] == num:
        stack.pop()
        result.append('-')

if stack == []:
    print('\n'.join(result))
else:
    print('NO')
