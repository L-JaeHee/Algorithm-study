# 4673: 셀프 넘버/실버 5
# index를 활용하지 않는 경우 list보다 set이 유리

# list보다 set이 시간에서 유리 
result = set(range(1, 10000))
not_self = set()

def d(num):
    for i in str(num):
        num += int(i)
    return num

for i in range(1, 10000):
    not_self.add(d(i))

# set은 unordered이므로 순서대로 출력하기 위해 정렬
result = sorted(result - not_self)

for i in result:
    print(i)
