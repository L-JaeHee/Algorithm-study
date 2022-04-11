# 2670: 연속부분최대곱/실버 4

import sys

N = int(sys.stdin.readline())
input = []
for i in range(N):
    input.append(float(sys.stdin.readline()))

for i in range(1, N):
    input[i] = max(input[i - 1] * input[i], input[i])

print('%.3f'%max(input))
