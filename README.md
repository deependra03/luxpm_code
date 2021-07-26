
1. Create a python script that generates the first 20 odd numbers from 0. 
    
		  Comments : script is in file -oddnum.py

2. Within the word, LuxPMsoft, insert the last 8 digits of the odd numbers you have created in the reverse order in between each letter.
i.e. L39u37x35P33M31s29o27f25t
      
			Comments : Generated "L39u37x35P33M31s29o27f25t" string as per requirement.

3. Create a node script that calls the python script - Please use the attached framework in the following link
https://github.com/luxpmsoft/coding_test_luxpm
4. The Python script should return the result as a Json packet
5. Save the result into the database - Save each of the letters and numbers separately one by one in order.

       Comments : API endpoint created , that internally calls python script and get data and then process (insert) into database table named "words" in order one by one.

6. The mysql database should be named after your last name.

       Comments : Database named as "singh"

7. Ensure that one can call this node script through Postman and provide us with a API definition.

       Comments : API can be accessed through postman. Its a GET API and no authentication implemented on it for now.

8. Please follow the code structure within the framework I have shared with you.

       Comments : Followed same code structure, but initial code misses some files like 'response' and 'middleware', so please add those if needed.
