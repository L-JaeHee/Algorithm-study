""" 
22.07.26
BOJ : 2869 / 수학
"""
import math

a, b, v = map(int, input().split(' '))
print(math.ceil(((v - a) / (a - b))) + 1)
