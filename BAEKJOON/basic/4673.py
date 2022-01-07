# 4673: 셀프 넘버/실버 5

result = [i for i in range(1, 10000)]

def d(num):
    for i in str(num):
        num += int(i)
    return num

for i in range(1, 10000):
    if d(i) in result:
        result.remove(d(i))

for i in result:
    print(i)
