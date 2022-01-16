# 10250: ACM호텔/브론즈 3

T = int(input())
for i in range(T):
    H, W, N = map(int, input().split(' '))
    number, floor = divmod(N, H)
    if floor == 0:
        print(f'{H}{number:0>2}')
    else:
        print(f'{floor}{number + 1:0>2}')