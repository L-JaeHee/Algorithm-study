# 4344: 평균은 넘겠지 / 브론즈 1
# float 소수점 자리수 제한
# filter 사용

import sys

N = int(input())
for i in range(N):
    students = list(map(int, sys.stdin.readline().split()))
    avg = sum(students[1:]) / students[0]
    print(f'{len(list(filter(lambda x: x > avg, students[1:]))) / students[0] * 100:.3f}%')
