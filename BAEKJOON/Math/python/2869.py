# 2869: 달팽이는 올라가고 싶다/브론즈 1

A, B, V = map(int, input().split())
if (V - B) % (A - B) == 0:
    print((V - B) // (A - B))
else:
    print((V - B) // (A - B) + 1)