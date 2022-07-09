""" 
22.07.09
BOJ : 10799 / 자료구조
"""
bar = ' '.join(input().split('()'))
cnt = []
result = 0

for i in bar:
    if i == '(':
        cnt.append(i)
    elif i == ')':
        result += 1
        cnt.pop()
    elif i == ' ':
        result += len(cnt)

print(result)
