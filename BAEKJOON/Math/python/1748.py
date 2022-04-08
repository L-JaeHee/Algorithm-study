# 1748: 수 이어 쓰기1/ 실버3
import sys

input = int(sys.stdin.readline())

if input < 10:
    print(input)
else:
    i = 9
    cnt = 1
    result = 0
    while input > i:
        input -= i
        result += i * cnt
        i *= 10
        cnt += 1
    result += input * cnt

    print(result)