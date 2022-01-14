# 1712: 손익분기점/브론즈 4

A, B, C = map(int, input().split())

def check(A, B, C):
    notebook_cost = C - B
    if notebook_cost <= 0:
        return print(-1)
    return print(A // notebook_cost + 1)

check(A, B, C)
