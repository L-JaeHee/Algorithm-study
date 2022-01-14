# 2292: 벌집/브론즈 2

N = int(input())

right = 1
cnt, term = 1, 6

while N > right:
    right += term
    cnt += 1
    term += 6
    
print(cnt)
