""" 
22.07.05
BOJ : 10828 / 자료구조
"""
import sys

class my_stack:
    def __init__(self):
        self.result = []
    
    def push(self, num):
        self.result.append(num)
        return 0
    
    def my_pop(self):
        if not self.result:
            print(-1)
            return -1
        else:
            temp = self.result.pop()
            print(temp)
            return 0
    
    def size(self):
        print(len(self.result))
        return 0
    
    def empty(self):
        if not self.result:
            print(1)
            return 0
        else:
            print(0)
            return 0
    
    def top(self):
        if not self.result:
            print(-1)
            return -1
        else:
            print(self.result[-1])
            return self.result[-1]

n = int(input())
answer = my_stack()

for _ in range(n):
    commands = sys.stdin.readline().strip()
    if 'push' in commands:
        answer.push(int(commands.split(' ')[-1]))
    elif 'pop' in commands:
        answer.my_pop()
    elif 'size' in commands:
        answer.size()
    elif 'empty' in commands:
        answer.empty()
    elif 'top' in commands:
        answer.top()
