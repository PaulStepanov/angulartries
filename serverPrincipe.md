#Server request handling
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
* **/tasks/complete/{taskId}** 

* **/tasks/undoComplete/{taskId}** 

* **/tasks/delete/{taskId}** 
 _response:_{   
 isDeleted:boolean,     
} 
* **/tasks/postpone/{taskId}?[day]**  
_postpone task for 1 day if day param `not` specified,  
otherwise postpone it to specified amount of days_
_response:_{   
 isPostponed:boolean,     
} 

##adding tasks   
#### POST:
 * **/tasks/add**  
 body:{task}
 _response:_   
{  
 isAdded:boolean, 
 id:string, 
 error:number,    
 errorText:string    
}  
 
#Data exchange standarts:  
###Task to cominicate with server   
{  
  id:'string',  
  date:'string',// ISO 8601, example:2013-02-25   
  title:'string',  
  priority:number, //1-4  
  isDone:boolean    
}  
