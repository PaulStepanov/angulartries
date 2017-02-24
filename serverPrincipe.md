# Server request handling
##get tasks:  
#### GET :   
* **/tasks/recent/{amount}**   
_return number(amount) of tasks in array object_  
* **/tasks/byDate/{startDate}-{lastDate}**  
* **/tasks/byDate/{startDate}**  
_return array of tasks until today_
 
##updating tasks:  
#### PUT:  
* **/tasks/update/{taskId}**  
  body:{task} 
   
#### GET:
* **/tasks/postpone/{taskId}?[day]**  
_postpone task for 1 day if day param `not` specified,  
otherwise postpone it to specified amount of days_

##adding tasks   
#### POST:
 * **/tasks/add**  
 body:{task}
 
