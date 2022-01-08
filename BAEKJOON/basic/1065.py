# 1065: 한수/실버 4

def isHan(num: str) -> bool:
    if len(num) <= 2:
        return True
    
    nums = [int(i) for i in num]
    han = nums[1] - nums[0]

    for i in range(len(nums) - 1):
        if nums[i + 1] - nums[i] != han:
            return False

    return True

N = input()
cnt = 0
for i in range(1, int(N) + 1):
    if isHan(str(i)):
        cnt += 1

print(cnt)