# 에러 처리 try & except 활용
import sys

while True:
    try:
        a, b = map(int, sys.stdin.readline().rsplit())
        if a == 0 and b == 0:
            break
        print(a + b)
    except:
        break
