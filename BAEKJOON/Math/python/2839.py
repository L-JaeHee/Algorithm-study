# 2839: 설탕배달/브론즈 1

N = int(input())

def solution(N):
    cnt = N // 5
    for i in range(cnt, -1, -1):
        total = N - (i * 5)
        if total % 3 == 0:
            return print(i + (total // 3))

    return print(-1)

solution(N)