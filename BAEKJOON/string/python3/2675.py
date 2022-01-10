# 2675: 문자열 반복/브론즈 2

import sys

for i in range(int(input())):
    S = sys.stdin.readline().split()
    print(''.join(map(lambda x: x * int(S[0]), [char for char in S[1]])))