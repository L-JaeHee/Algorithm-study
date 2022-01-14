# 2292: 벌집/브론즈 2

N = int(input())

left, right = 2, 7
cnt, term = 2, 6

while True:
    if N == 1:
        print(1)
        break
    if left <= N and N <= right:
        print(cnt)
        break

    left += term
    right += term + 6
    cnt += 1
    term += 6
    