""" 
22.07.05
BOJ : 9093 / 문자열
"""
import sys

n = int(input())
for _ in range(n):
    print(" ".join(map(lambda x: x[::-1], sys.stdin.readline().strip().split(' '))))
