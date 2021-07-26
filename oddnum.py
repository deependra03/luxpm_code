import json

odd_num = []
for x in range(40):
  if(x%2!=0) : 
      odd_num.append(x) 

odd_num.reverse()
word = "LuxPMsoft"
wordArray = list(word)
finalArray=[]
for i in range(len(wordArray)):
   finalArray.append(wordArray[i]) 
   if(i<len(wordArray)-1) :
     finalArray.append(odd_num[i]) 

final = ''.join([str(elem) for elem in finalArray])
resultJson = {
  "result": "success",
  "code": 200,
  "data": finalArray
}
finaljson = json.dumps(resultJson) 

print(finaljson)

