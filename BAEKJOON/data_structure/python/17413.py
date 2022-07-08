""" 
22.07.08
BOJ : 17413 / 자료구조
"""

S = input()
res = []
temp_stack = []
status = False

for i in S:
    if i == ' ':
        for _ in range(len(temp_stack)):
            res.append(temp_stack.pop())
        res.append(i)
    elif i == '<':
        status = True
        for _ in range(len(temp_stack)):
            res.append(temp_stack.pop())
        res.append(i)
    elif i == '>':
        status = False
        res.append(i)
    elif status:
        res.append(i)
    elif not status:
        temp_stack.append(i)
        
for _ in range(len(temp_stack)):
    res.append(temp_stack.pop())

print(''.join(res))
