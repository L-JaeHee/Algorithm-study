# 1193: 분수 찾기/브론즈 1

x = int(input())

right = 1
term = 2
cnt = 1

while x > right:
    right += term
    term += 1
    cnt += 1

term = right - x
if cnt % 2 == 0:
    print(f'{cnt - term}/{1 + term}')
else:
    print(f'{1 + term}/{cnt - term}')