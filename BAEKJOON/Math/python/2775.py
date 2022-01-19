# 2775: 부녀회장이 될테야/브론즈 2

for _ in range(int(input())):
    k = int(input())
    n = int(input())
    floors = [[i for i in range(1, n + 1)]]

    for i in range(k - 1):
        floors.append([sum(floors[i][:j]) for j in range(1, n + 1)])

    print(sum(floors[k - 1]))